# rich-RSS

`rich-RSS` is a middleware that allows you archive, filter and transform RSS/ATOM/OPML or JSON feeds into a verbose rich feed. `Rich` in this context is an umbrella term for the following features:

- enrich feed items
  - full(-text) feed items
  - quality stats
  - quantity stats
  - media data for embedded videos/audios and images.
  - metadata from article site, like title, authors, pubDate, language
- aggregate multiple feeds
- throttling: limit a feed output by a maximum number of items per time interval, sorted by quality, quantity or mood 
- filtering: define a matching rule to define what item goes into the feed (attribute contains a string, attribute greater/less than `n`, content matches a language)
- retention policy: when an item shall be deleted.

Try the [live demo](https://richrss.migor.org/) it takes you to the [swagger UI](https://swagger.io/tools/swagger-ui/). `rich-RSS` can be configured to use the feed generators [rss-proxy](https://github.com/damoeb/rss-proxy) and [rss-bridge](https://github.com/RSS-Bridge/rss-bridge), e.g as a fallback for a broken feed.


## Using docker

The simplest - tough limited - way to use rich-RSS is using [docker](https://docs.docker.com/install/).

```
 docker run -p 8080:8080 -it damoeb/rich-rss
```
Then open [localhost:8080](http://localhost:8080) in the browser. 

## Using docker-compose (Recommended)

The recommended way to use rich-RSS is using [docker-compose](https://docs.docker.com/compose/)

```
 docker-compose start
```
Then open [localhost:8080](http://localhost:8080) in the browser. 


## From source

For local development you need java-runtime 11+ and bazel 1+. Then follow these steps:


- Start server
```
cd 

```

## Changelog
TBD

## Roadmap
TBD

## Contributors

* [damoeb](https://github.com/damoeb)

## Contact

* https://twitter.com/damoeb

## Inspiration
- https://www.feedirss.com/
- https://www.datorss.com/

## License

This project uses the following license: [GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html).
