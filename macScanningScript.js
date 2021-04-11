document.getElementById('_searchstring').addEventListener('keydown', function(e) {
  if (e.target.value.toLowerCase().includes('mac_end')) {
    globalSearch(NS.jQuery('#_searchstring').val())
  }
  if (e.keyCode == 13) {
    if (e.target.value.toLowerCase().includes('mac_end')) {
      return true;
    } else {
      e.target.value += ','
      document.getElementById('_searchSubmitter').onclick = function() {
        return false
      }
    }
  }
})
