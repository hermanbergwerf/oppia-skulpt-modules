// Copyright (c) 2016, Herman Bergwerf. All rights reserved.
// Use of this source code is governed by an AGPL-3.0-style license
// that can be found in the LICENSE file.

var $builtinmodule = function (name) {
  var mod = {}

  mod.loads = new Sk.builtin.func(function (str) {
    var json = JSON.parse(str.v)
    return Sk.ffi.remapToPy(json)
  })

  return mod
}
