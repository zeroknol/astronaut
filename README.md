## ASTRONAUT MONGO REMIX
This is a mongodb remix of the great project Astronaut (originally created by Andrew Wong and James Thompson) for Digitalocean MongoDB hack-a-thon. The original project has a crawler which crawls youtube for recently uploaded videos with very small number of views and saves the index in a CSV file. This remix tries to use the MongoDB for storing the video metadata.

The original idea and 99.9 % of the implementation is by Andrew and James, this is my attempt of learning an express application and MongoDB.

## ASTRONAUT.IO

A Feed of the Present

See the site live [here](http://astronaut.io).

### About ###

The server currently pulls in videos daily from youtube. Search criteria is [TAG]XXXX with upload time this week, where TAG is a raw video prefix such as 'dsc' or 'img'.
This search turns out to be a good approximation for the data set of home videos created in the last week.
