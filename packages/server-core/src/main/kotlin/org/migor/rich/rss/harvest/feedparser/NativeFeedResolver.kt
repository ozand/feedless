package org.migor.rich.rss.harvest.feedparser

import com.rometools.rome.feed.synd.SyndEntry
import com.rometools.rome.feed.synd.SyndFeed
import org.migor.rich.rss.database.model.Article
import org.migor.rich.rss.database.model.Feed
import org.migor.rich.rss.harvest.HarvestContext
import org.springframework.stereotype.Service

@Service
class NativeFeedResolver : FeedContextResolver {

  override fun priority(): Int {
    return 0
  }

  override fun canHarvest(feed: Feed): Boolean {
    return true
  }

  override fun getHarvestContexts(corrId: String, feed: Feed): List<HarvestContext> {
    return listOf(
      HarvestContext(feed.feedUrl!!, feed),
    )
  }

  override fun mergeFeeds(syndFeeds: List<SyndFeed>): List<Pair<SyndEntry, Article>> {
    return syndFeeds.first().entries.map { syndEntry -> Pair(syndEntry, Article()) }
  }
}
