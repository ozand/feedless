package org.migor.rss.rich.config

import org.migor.rss.rich.generated.MqOperation
import org.slf4j.LoggerFactory
import org.springframework.amqp.core.AmqpAdmin
import org.springframework.amqp.core.AmqpTemplate
import org.springframework.amqp.core.Queue
import org.springframework.amqp.rabbit.connection.CachingConnectionFactory
import org.springframework.amqp.rabbit.core.RabbitAdmin
import org.springframework.amqp.rabbit.core.RabbitTemplate
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration


object RabbitQueue {
  fun values(): Array<String> {
    return arrayOf(articleChanged, readability, askReadability, askArticleScore, articleScore)
  }

  const val askReadability = "askReadability"
  const val readability = "readability"
  const val articleChanged = "articleChanged"
  const val askArticleScore = "askArticleScore"
  const val articleScore = "articleScore"
}

@Configuration
class RabbitMqConfig {

  private val log = LoggerFactory.getLogger(RabbitMqConfig::class.simpleName)

//  @Value("env.RABBITMQ_URL:amqp://localhost")
//  lateinit var rabbitUrl: String;

  @Bean
  fun template(): AmqpTemplate {
    val factory = CachingConnectionFactory("localhost")
    val admin: AmqpAdmin = RabbitAdmin(factory)
    RabbitQueue.values()
      .filter { op -> isSupportedMqOperation(op) }
      .forEach { eventType: String -> this.declareQueue(admin, eventType) }
    return RabbitTemplate(factory)
  }

  private fun isSupportedMqOperation(op: String): Boolean {
    val matchedOp = MqOperation.values().find { mqOperation -> op.equals(mqOperation.name) }
    return if (matchedOp == null) {
      this.log.error("'${op}' is not a supported operation")
      false
    } else {
      true
    }
  }

  private fun declareQueue(admin: AmqpAdmin, eventType: String) {
    val q = Queue(eventType, true, false, false)
    admin.declareQueue(q)
  }
}
