package org.migor.rss.rich.dto

import java.util.*

data class SubscriptionDto(var id: String?,
                           var title: String?,
                           var description: String?,
                           var lastUpdatedAt: Date,
                           var sourceId: String?) {

}
