// 1. Datatype methods
Set.is = require('./is');

// 2. About methods
Set.equal = require('./equal');

// 3. Transform methods
Set.addAll = require('./add-all');
Set.addArray = require('./add-array');
Set.deleteAll = require('./delete-all');
Set.contains = require('./contains');
Set.shift = require('./shift');
Set.intersection = require('./intersection');
Set.union = require('./union');
Set.concat = require('./concat');

// 4. Functional methods
Set.forEach = require('./for-each');
Set.some = require('./some');
Set.every = require('./every');
Set.find = require('./find');
Set.findAll = require('./find-all');
Set.reduce = require('./reduce');
Set.filter = require('./filter');
Set.map = require('./map');

// 5. Evaluate methods
Set.any = require('./any');
Set.all = require('./all');
Set.min = require('./min');
Set.max = require('./max');
Set.sum = require('./sum');
Set.average = require('./average');
module.exports = Set;
