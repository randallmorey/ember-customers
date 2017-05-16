# ember-customers

[![Travis](https://img.shields.io/travis/randallmorey/ember-customers.svg?style=flat-square)](https://travis-ci.org/randallmorey/ember-customers)
[![Coveralls](https://img.shields.io/coveralls/randallmorey/ember-customers.svg?style=flat-square)](https://coveralls.io/github/randallmorey/ember-customers)
[![David](https://img.shields.io/david/dev/randallmorey/ember-customers.svg?style=flat-square)](https://github.com/randallmorey/ember-customers)
[![Inline docs](https://inch-ci.org/github/randallmorey/ember-customers.svg?branch=master&style=flat-square)](http://inch-ci.org/github/randallmorey/ember-customers)
[![Ember 2.13.1](https://img.shields.io/badge/ember-2.13.1-blue.svg?style=flat-square)](https://github.com/ember-cli/ember-cli/tree/v2.13.1)

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd ember-customers`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more
details.

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)


## Contributing

This repository uses [semantic-release-cli][semantic-release-cli] for automated
releases and [commitizen][commitizen] and
[cz-conventional-changelog][cz-conventional-changelog] for standardized commit
messages and changelogs.


### Committing

All work should be committed to a branch off of `develop`, never to a mainline
branch directly.  When ready to commit changes, stage them as usual with:

		git add .

Commit changes with `npm`, rather than `git`, in order to ensure standardized
commit messages and follow the interactive prompts:

		npm run commit

**Note**:  [watch the overview video of commitizen and the conventional changelog tool][commitizen-video].

[semantic-release-cli]: https://www.npmjs.com/package/semantic-release-cli
[commitizen]: https://www.npmjs.com/package/commitizen
[cz-conventional-changelog]: https://www.npmjs.com/package/cz-conventional-changelog
[commitizen-video]: https://egghead.io/lessons/javascript-how-to-write-a-javascript-library-committing-a-new-feature-with-commitizen


### Pull Requests

When a branch is ready to merge, submit a pull request to `develop` via GitHub.
Pull requests are automatically tested on Travis CI and may not be merged until
all tests pass.  At that time, a team member may safely merge the PR
into `develop`.


### Releasing

Releases are made from the `master` branch automatically.  To initiate a
release, create a PR from `develop` to `master`.  Since releasing is automated,
the timing and extent of release PR's is left to the discretion of team members.

Releasing is automated with `semantic-release`.  An automatic release is tagged
and published to npm upon a successful merge into the `master` branch only after
all tests successfully pass.
