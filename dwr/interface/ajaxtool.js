// Provide a default path to dwr.engine
if (dwr == null) var dwr = {};
if (dwr.engine == null) dwr.engine = {};
if (DWREngine == null) var DWREngine = dwr.engine;

if (ajaxtool == null) var ajaxtool = {};
ajaxtool._path = '/dwr';
ajaxtool.getMessage = function(callback) {
    dwr.engine._execute(ajaxtool._path, 'ajaxtool', 'getMessage', callback);
}
ajaxtool.getType = function(callback) {
    dwr.engine._execute(ajaxtool._path, 'ajaxtool', 'getType', false, callback);
}
ajaxtool.getOper = function(p0, callback) {
    dwr.engine._execute(ajaxtool._path, 'ajaxtool', 'getOper', p0, callback);
}
ajaxtool.getJas = function(p0, p1, callback) {
    dwr.engine._execute(ajaxtool._path, 'ajaxtool', 'getJas', p0, p1, callback);
}
ajaxtool.getJxl = function(p0, callback) {
    dwr.engine._execute(ajaxtool._path, 'ajaxtool', 'getJxl', p0, callback);
}
ajaxtool.getTjzt = function(callback) {
    dwr.engine._execute(ajaxtool._path, 'ajaxtool', 'getTjzt', callback);
}
ajaxtool.getJxlb = function(p0, callback) {
    dwr.engine._execute(ajaxtool._path, 'ajaxtool', 'getJxlb', p0, callback);
}
ajaxtool.getjasb = function(p0, p1, callback) {
    dwr.engine._execute(ajaxtool._path, 'ajaxtool', 'getjasb', p0, p1, callback);
}
ajaxtool.getJczyqkInfo = function(p0, p1, p2, p3, p4, p5, p6, p7, p8, callback) {
    dwr.engine._execute(ajaxtool._path, 'ajaxtool', 'getJczyqkInfo', p0, p1, p2, p3, p4, p5, p6, p7, p8, callback);
}
ajaxtool.reCall = function(callback) {
    dwr.engine._execute(ajaxtool._path, 'ajaxtool', 'reCall', callback);
}
ajaxtool.getLwJsh = function(p0, callback) {
    dwr.engine._execute(ajaxtool._path, 'ajaxtool', 'getLwJsh', p0, callback);
}
ajaxtool.getLwDykc = function(p0, p1, callback) {
    dwr.engine._execute(ajaxtool._path, 'ajaxtool', 'getLwDykc', p0, p1, callback);
}
ajaxtool.getZybList = function(p0, p1, callback) {
    dwr.engine._execute(ajaxtool._path, 'ajaxtool', 'getZybList', p0, p1, callback);
}
ajaxtool.getZybInfo = function(p0, callback) {
    dwr.engine._execute(ajaxtool._path, 'ajaxtool', 'getZybInfo', p0, callback);
}
ajaxtool.getZybInfoNotnull = function(p0, callback) {
    dwr.engine._execute(ajaxtool._path, 'ajaxtool', 'getZybInfoNotnull', p0, callback);
}
ajaxtool.getBjInfo = function(p0, p1, callback) {
    dwr.engine._execute(ajaxtool._path, 'ajaxtool', 'getBjInfo', p0, p1, callback);
}
ajaxtool.getTmxx = function(p0, p1, callback) {
    dwr.engine._execute(ajaxtool._path, 'ajaxtool', 'getTmxx', p0, p1, callback);
}
ajaxtool.checkEmail = function(p0, p1, p2, callback) {
    dwr.engine._execute(ajaxtool._path, 'ajaxtool', 'checkEmail', p0, p1, p2, callback);
}
ajaxtool.getXsbInfo = function(callback) {
    dwr.engine._execute(ajaxtool._path, 'ajaxtool', 'getXsbInfo', callback);
}
ajaxtool.getXsbInfoNotnull = function(callback) {
    dwr.engine._execute(ajaxtool._path, 'ajaxtool', 'getXsbInfoNotnull', callback);
}
ajaxtool.getZyfxbInfo = function(p0, p1, callback) {
    dwr.engine._execute(ajaxtool._path, 'ajaxtool', 'getZyfxbInfo', p0, p1, callback);
}
ajaxtool.getDownFile = function(callback) {
    dwr.engine._execute(ajaxtool._path, 'ajaxtool', 'getDownFile', callback);
}
ajaxtool.getBjInfoNew = function(p0, p1, p2, callback) {
    dwr.engine._execute(ajaxtool._path, 'ajaxtool', 'getBjInfoNew', p0, p1, p2, callback);
}
ajaxtool.getJYSNew = function(p0, callback) {
    dwr.engine._execute(ajaxtool._path, 'ajaxtool', 'getJYSNew', p0, callback);
}
ajaxtool.getMaterialAll1 = function(callback) {
    dwr.engine._execute(ajaxtool._path, 'ajaxtool', 'getMaterialAll1', callback);
}
ajaxtool.updateMMandMMCZZT = function(p0, p1, p2, callback) {
    dwr.engine._execute(ajaxtool._path, 'ajaxtool', 'updateMMandMMCZZT', p0, p1, p2, callback);
}