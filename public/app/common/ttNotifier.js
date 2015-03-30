angular.module('app').value('ttToastr', toastr);

angular.module('app').factory('ttNotifier', function(ttToastr) {
  return {
    notify: function(msg) {
      ttToastr.success(msg);
      console.log(msg);
    },
    error: function(msg) {
      ttToastr.error(msg);
      console.log(msg);
    }
  }
})
