package org.migor.rich.rss.service

import org.migor.rich.rss.database.model.ArticleRef
import org.migor.rich.rss.database.model.BucketType
import org.migor.rich.rss.database.repository.ArticleRefRepository
import org.migor.rich.rss.database.repository.BucketRepository
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import java.util.*

@Service
class NoteService {

  private val log = LoggerFactory.getLogger(NoteService::class.simpleName)

  @Autowired
  lateinit var bucketRepository: BucketRepository

  @Autowired
  lateinit var articleRefRepository: ArticleRefRepository

  @Transactional
  fun createRootNote(corrId: String, userId: String): ArticleRef {
    val archiveBucket =
      Optional.ofNullable(bucketRepository.findFirstByTypeAndOwnerId(BucketType.ARCHIVE, userId)).orElseThrow()

    val note = ArticleRef()
    note.streamId = archiveBucket.streamId


    return articleRefRepository.save(note)
  }

}