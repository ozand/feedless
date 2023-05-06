package org.migor.rich.rss.trigger.plugins

import org.migor.rich.rss.AppProfiles
import org.migor.rich.rss.data.jpa.models.WebDocumentEntity
import org.slf4j.LoggerFactory
import org.springframework.context.annotation.Profile
import org.springframework.stereotype.Service

@Service
@Profile(AppProfiles.database)
class ScorePlugin: WebDocumentPlugin {

  private val log = LoggerFactory.getLogger(ScorePlugin::class.simpleName)

  override fun id(): String = "score"

  override fun executionPriority(): Int = 30

  override fun processWebDocument(corrId: String, webDocument: WebDocumentEntity) {

  }

}
