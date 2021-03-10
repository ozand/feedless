package org.migor.rss.rich.service

import org.migor.rss.rich.dto.FeedDto
import org.migor.rss.rich.dto.SubscriptionGroupDto
import org.migor.rss.rich.model.AccessPolicy
import org.migor.rss.rich.model.SubscriptionGroup
import org.migor.rss.rich.repository.SubscriptionGroupRepository
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import java.util.*

@Service
class SubscriptionGroupService {

  private val log = LoggerFactory.getLogger(SubscriptionGroupService::class.simpleName)

  @Autowired
  lateinit var groupRepository: SubscriptionGroupRepository

  @Autowired
  lateinit var entryService: EntryService

  @Autowired
  lateinit var userService: UserService

  @Autowired
  lateinit var propertyService: PropertyService

  fun findAllByOwnerId(userId: String): List<SubscriptionGroupDto> {
    return groupRepository.findAllByOwnerIdOrderByNameAsc(userId).map { group: SubscriptionGroup ->
      run {
        group.toDto(entries = entryService.findLatestBySubscriptionGroupId(group.id!!))
      }
    }
  }

  fun findById(groupId: String): SubscriptionGroupDto {
    return groupRepository.findById(groupId).orElseThrow { RuntimeException("group $groupId does not exit") }.toDto()
  }

  fun getSubscriptionGroupDetails(groupId: String): Map<String, Any> {
    val group = findById(groupId)
    val user = userService.findById(group.ownerId!!)
    val entries = entryService.findLatestBySubscriptionGroupId(groupId)
    return mapOf(
      Pair("user", user),
      Pair("group", group),
      Pair("entries", entries)
    )
  }

  fun findFeedByGroupId(groupId: String): FeedDto {
    val group = groupRepository.findById(groupId).orElseThrow { RuntimeException("group $groupId does not exit") }
    val entries = entryService.findLatestBySubscriptionGroupId(groupId)
    val lastUpdatedAt = entries.first()!!["pubDate"] as Date
    return FeedDto(groupId, group.name!!, "subscription group", lastUpdatedAt, group.ownerId, AccessPolicy.NONE, entries, link = "${propertyService.host()}/group:${groupId}")
  }
}
