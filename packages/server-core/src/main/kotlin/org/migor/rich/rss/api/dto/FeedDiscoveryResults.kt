package org.migor.rich.rss.api.dto

import org.migor.rich.rss.feed.discovery.FeedReference
import org.migor.rich.rss.web.GenericFeedRule

data class FeedDiscoveryDocument(
  val mimeType: String? = null,
  val language: String? = null,
  val imageUrl: String? = null,
  val url: String? = null,
  val body: String? = null,
  val title: String? = null,
  val description: String? = null,
  val statusCode: Int
)

data class FeedDiscoveryResults(
  val genericFeedRules: List<GenericFeedRule>,
  val nativeFeeds: List<FeedReference>,
  val failed: Boolean,
  val errorMessage: String? = null,
  val document: FeedDiscoveryDocument
)
