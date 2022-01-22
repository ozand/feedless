package org.migor.rich.rss.database.enums

enum class ContentLevelPolicy {
  FIRST_DEGREE_CONTENT,
  SECOND_DEGREE_CONTENT, // lists the provided links as entries in a feed
  ALL
}