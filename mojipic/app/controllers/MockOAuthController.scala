package controllers

import infrastructure.twitter.TwitterAuthenticator
import play.api.Configuration
import play.api.cache.SyncCacheApi
import play.api.mvc.ControllerComponents

import javax.inject.Inject

class MockOAuthController @Inject()(
                                   cc: ControllerComponents,
                                   twitterAuthenticator: TwitterAuthenticator,
                                   configuration: Configuration,
                                   val cache: SyncCacheApi
                                   ) extends TwitterLoginController(cc) {

}