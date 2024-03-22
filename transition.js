document.getElementById('btn-booking').addEventListener('click', function() {
    toggleBookingInfo();
});

function toggleBookingInfo() {
    var bookinginfo = document.getElementById('bookinginfo');
    if (bookinginfo.style.display == 'none') {
        bookinginfo.style.display = 'block';
    } else {
        bookinginfo.style.display = 'none';
    }
}
