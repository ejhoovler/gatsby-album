# Gatsby Material Album

[![Netlify Status](https://api.netlify.com/api/v1/badges/89ff37d0-a506-4c9c-ab1c-f61ce3614323/deploy-status)](https://app.netlify.com/sites/leeleeswreaths/deploys)

## Features

* Material UI styling
* Pagination
* Exif data parsing

## About

This starter uses the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) to accomplish two things.

- It creates a new page from each image file,

- and creates custom node fields so their exif data can be accessed via GraphQl.



## Adding your own images

This project reads a given image's exif data using [fast-exif](https://www.npmjs.com/package/fast-exif).

However, you'll need to edit your own image's exif data first.

The best way of accomplishing this appears to be [ExifTool](https://www.sno.phy.queensu.ca/~phil/exiftool/).

Once installed, you can quickly edit your exif data via the CLI as such:

```sh
exiftool -ImageDescription="by Mike Gorrell" -DocumentName="Lost In Thought" -Copyright="https://unsplash.com/@mikegorrell" src/images/mike-gorrell-61cMb0WQAMA-unsplash.jpg
```


## Built With

[Gatsby](https://github.com/gatsbyjs/gatsby)

[Material-UI](https://github.com/mui-org/material-ui)

## Based On

[Material UI Gatsby Starter](https://github.com/mui-org/material-ui/tree/master/examples/gatsby)

[Material UI Album Template](https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/album)





