(ns process.env
  "This file exists to inform the Google Closure Compiler that we expect variables
  to be defined in the process.env namespace; libraries like React require the
  process.env.NODE_ENV variable to exist, so we define them here")

(goog-define NODE_ENV "production")