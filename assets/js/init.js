requirejs(['jquery', 'underscore', 'backbone', 'marionette', 'webix', 'json2'], function($, _, Backbone, Marionette, $$){

  var app = new Marionette.Application();
  app.addRegions({ folderTree : '#folderTree' });

  var folder = new Backbone.Model.extend({}),
      folders = new Backbone.Collection([
        {"webid":"5400c2e7edc32ff76f000007","name":"Inbox","value":"Inbox","description":null,"type":"System Folder","created_at":"2014-08-29T18:13:59Z","updated_at":"2014-08-29T18:13:59Z","share_type":0,"parent_id":"5400c2e7edc32ff76f000006","latest_revision":"5400c2e7edc32ff76f000008","synced":false,"_id":"jOBljxU8Tmo21xbt"},
        {"webid":"5400c2ebedc32ff76f00000d","name":"From Web Import","value":"From Web Import","description":null,"type":"System Folder","created_at":"2014-08-29T18:14:03Z","updated_at":"2014-08-29T18:14:03Z","share_type":0,"parent_id":"5400c2e7edc32ff76f000007","latest_revision":"5400c2ebedc32ff76f00000e","synced":false,"_id":"pKcL7sHvwrrC6K9t"},
        {"webid":"5400c2ebedc32ff76f000011","name":"From Email","value":"From Email","description":null,"type":"System Folder","created_at":"2014-08-29T18:14:03Z","updated_at":"2014-08-29T18:14:03Z","share_type":0,"parent_id":"5400c2e7edc32ff76f000007","latest_revision":"5400c2ebedc32ff76f000012","synced":false,"_id":"pic1NZpjrGFkxtti"},
        {"webid":"5400c2ebedc32ff76f00000f","name":"From Concierge Scan","value":"From Concierge Scan","description":null,"type":"System Folder","created_at":"2014-08-29T18:14:03Z","updated_at":"2014-11-25T18:16:31Z","share_type":0,"parent_id":"5400c2e7edc32ff76f000007","latest_revision":"5474c77f86d0a2121300190f","synced":false,"_id":"qnD1xSVbpxNEfzPj"},
        {"webid":"5400c2ecedc32ff76f000013","name":"From NeatMobile®","value":"From NeatMobile®","description":null,"type":"System Folder","created_at":"2014-08-29T18:14:04Z","updated_at":"2014-08-29T18:14:04Z","share_type":0,"parent_id":"5400c2e7edc32ff76f000007","latest_revision":"5400c2ecedc32ff76f000014","synced":false,"_id":"tRFsnFQoFVHryAnN"},
        {"webid":"5400c2ebedc32ff76f00000b","name":"My Cabinet","value":"My Cabinet","description":null,"type":"Cabinet","created_at":"2014-08-29T18:14:03Z","updated_at":"2014-08-29T18:14:03Z","share_type":0,"parent_id":"5400c2e7edc32ff76f000006","latest_revision":"5400c2ebedc32ff76f00000c","synced":false,"_id":"4O1e2cCfHHeCtd2A"},
        {"webid":"545bae0f86d0a25c4d00001b","name":"test","value":"test","description":"","type":"Folder","created_at":"2014-11-06T17:21:19Z","updated_at":"2014-11-06T17:21:19Z","share_type":0,"parent_id":"5400c3302fff51223f000005","latest_revision":"545bae0f86d0a25c4d00001c","synced":false,"_id":"10QNceJeRDGgEZlq"},
        {"webid":"5400c3302fff51223f000005","name":"2014","value":"2014","description":"","type":"Folder","created_at":"2014-08-29T18:15:12Z","updated_at":"2014-08-29T18:15:12Z","share_type":1,"parent_id":"5400c2ebedc32ff76f00000b","latest_revision":"5400c3302fff51223f000006","synced":false,"_id":"EqB6ui3cTq3Kf6Tu"},
        {"webid":"5400c2eaedc32ff76f000009","name":"Trash","value":"Trash","description":null,"type":"System Folder","created_at":"2014-08-29T18:14:02Z","updated_at":"2014-08-29T18:14:02Z","share_type":0,"parent_id":"5400c2e7edc32ff76f000006","latest_revision":"5400c2eaedc32ff76f00000a","items":[],"synced":false,"_id":"XsuRJ1MTe0GNXwi7"}
      ]);

  var webixFolderTree = $$.ui({
    container: 'folderTree',
    view: 'tree',
    select: true,
    data: folders
  });

  // var folderTreeView = Marionette.ItemView.extend({
  //   collection: folders,
  //   template: false
  // });

  //app.folderTree.show(new folderTreeView().render());

});