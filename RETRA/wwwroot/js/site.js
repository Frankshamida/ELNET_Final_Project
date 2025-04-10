        document.addEventListener('DOMContentLoaded', function() {
            // Get all table rows
            const rows = document.querySelectorAll('#userTableBody tr');
        const searchInput = document.getElementById('searchInput');
        const roleFilter = document.getElementById('roleFilter');
        const resetBtn = document.getElementById('resetFilters');

        // Filter function
        function filterUsers() {
                const searchTerm = searchInput.value.toLowerCase();
        const roleValue = roleFilter.value.toLowerCase();
                
                rows.forEach(row => {
                    const username = row.cells[1].textContent.toLowerCase();
        const email = row.cells[2].textContent.toLowerCase();
        const role = row.cells[3].textContent.toLowerCase();
        const name = row.cells[4].textContent.toLowerCase();

        const matchesSearch =
        username.includes(searchTerm) ||
        email.includes(searchTerm) ||
        name.includes(searchTerm);

        const matchesRole = roleValue === 'all' || role.includes(roleValue);

        row.style.display = (matchesSearch && matchesRole) ? '' : 'none';
                });
            }

        // Event listeners
        searchInput.addEventListener('input', filterUsers);
        roleFilter.addEventListener('change', filterUsers);

        resetBtn.addEventListener('click', function() {
            searchInput.value = '';
        roleFilter.value = 'all';
        filterUsers();
            });

            // Initialize pagination (simple version - would need more logic for real pagination)
            // This is just a placeholder - you'd typically implement server-side pagination
            document.querySelectorAll('#pagination .page-link').forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                alert('Pagination would load new data here');
            });
            });
        });


        document.addEventListener('DOMContentLoaded', function() {
            // Search and filter functionality
            const searchInput = document.getElementById('searchInput');
        const roleFilter = document.getElementById('roleFilter');
        const resetBtn = document.getElementById('resetFilters');
        const rows = document.querySelectorAll('#userTableBody tr');

        function filterUsers() {
                const searchTerm = searchInput.value.toLowerCase();
        const roleValue = roleFilter.value.toLowerCase();
                
                rows.forEach(row => {
                    const name = row.querySelector('.user-name').textContent.toLowerCase();
        const username = row.querySelector('.user-username').textContent.toLowerCase();
        const email = row.querySelector('.user-email').textContent.toLowerCase();
        const role = row.querySelector('.user-role').textContent.toLowerCase();

        const matchesSearch =
        name.includes(searchTerm) ||
        username.includes(searchTerm) ||
        email.includes(searchTerm);

        const matchesRole = roleValue === 'all' || role.includes(roleValue);

        row.style.display = (matchesSearch && matchesRole) ? '' : 'none';
                });
            }

        searchInput.addEventListener('input', filterUsers);
        roleFilter.addEventListener('change', filterUsers);
        resetBtn.addEventListener('click', function() {
            searchInput.value = '';
        roleFilter.value = 'all';
        filterUsers();
            });

        // Initialize tooltips for action buttons
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
                return new bootstrap.Tooltip(tooltipTriggerEl);
            });
        });

        document.addEventListener('DOMContentLoaded', function() {
            // Search functionality would go here
            const searchInput = document.querySelector('.search-input');
        const tableRows = document.querySelectorAll('.data-table tbody tr');

        searchInput.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
                
                tableRows.forEach(row => {
                    const textContent = row.textContent.toLowerCase();
        row.style.display = textContent.includes(searchTerm) ? '' : 'none';
                });
            });
        });


        document.addEventListener('DOMContentLoaded', function() {
            const navbar = document.getElementById('mainNavbar');
        const desktopLogo = document.querySelector('.desktop-logo');
        const mobileLogo = document.querySelector('.mobile-logo');

        window.addEventListener('scroll', function() {
                if (window.scrollY > 50) {
            navbar.classList.add('navbar-shrink', 'navbar-sticky');
        desktopLogo.style.height = '60px';
        mobileLogo.style.height = '50px';
                } else {
            navbar.classList.remove('navbar-shrink', 'navbar-sticky');
        desktopLogo.style.height = '100px';
        mobileLogo.style.height = '70px';
                }
            });
        });

document.addEventListener('DOMContentLoaded', function () {
    // Room availability counters animation
    animateValue(".suite-count", 0, 12, 1000);
    animateValue(".standard-count", 0, 24, 1000);
    animateValue(".deluxe-count", 0, 18, 1000);

    // Revenue Chart
    const revenueCtx = document.getElementById('revenueChart').getContext('2d');
    const revenueChart = new Chart(revenueCtx, {
        type: 'bar',
        data: {
            labels: ['2019', '2020', '2021', '2022', '2023'],
            datasets: [{
                label: 'Total Revenue ($)',
                data: [1250000, 980000, 1450000, 1650000, 1850000],
                backgroundColor: [
                    'rgba(67, 97, 238, 0.7)',
                    'rgba(67, 97, 238, 0.7)',
                    'rgba(67, 97, 238, 0.7)',
                    'rgba(67, 97, 238, 0.7)',
                    'rgba(67, 97, 238, 1)'
                ],
                borderColor: [
                    'rgba(67, 97, 238, 1)',
                    'rgba(67, 97, 238, 1)',
                    'rgba(67, 97, 238, 1)',
                    'rgba(67, 97, 238, 1)',
                    'rgba(67, 97, 238, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function (value) {
                            return '$' + value.toLocaleString();
                        }
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return '$' + context.raw.toLocaleString();
                        }
                    }
                }
            }
        }
    });

    // Guest Pie Chart
    const guestCtx = document.getElementById('guestChart').getContext('2d');
    const guestChart = new Chart(guestCtx, {
        type: 'pie',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                data: [120, 150, 180, 210, 250, 300, 320, 310, 280, 240, 180, 150],
                backgroundColor: [
                    '#4361ee', '#3a0ca3', '#7209b7', '#f72585', '#b5179e',
                    '#4895ef', '#4cc9f0', '#560bad', '#3f37c9', '#3a0ca3',
                    '#7209b7', '#f72585'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return context.label + ': ' + context.raw + ' guests';
                        }
                    }
                }
            }
        }
    });

    // Chart period toggles
    document.querySelectorAll('.chart-actions button').forEach(button => {
        button.addEventListener('click', function () {
            const parent = this.parentElement;
            parent.querySelector('.active').classList.remove('active');
            this.classList.add('active');

            // Here you would typically update the chart data based on the selected period
            // For demo purposes, we're just logging the action
            console.log(`Switched to ${this.textContent} view`);
        });
    });

    // Notification button click
    document.querySelector('.notification-btn').addEventListener('click', function () {
        // In a real app, this would show a dropdown with notifications
        alert('You have 3 new notifications');
    });
});

// Counter animation function
function animateValue(selector, start, end, duration) {
    const obj = document.querySelector(selector);
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

/* ROOM INVENTORY */

// Simple JavaScript to handle modal interactions
document.addEventListener('DOMContentLoaded', function () {
    // Add Room Modal
    const addRoomBtn = document.getElementById('addRoomBtn');
    const addRoomModal = document.getElementById('addRoomModal');
    const closeModalBtns = document.querySelectorAll('.close');
    const saveRoomBtn = document.getElementById('saveRoomBtn');

    // View Details Modal
    const viewBtns = document.querySelectorAll('.view-btn');
    const roomDetailsModal = document.getElementById('roomDetailsModal');

    // Show Add Room Modal
    addRoomBtn.addEventListener('click', function () {
        addRoomModal.style.display = 'flex';
        setTimeout(() => {
            addRoomModal.classList.add('show');
        }, 10);
    });

    // Show Room Details Modal
    viewBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            roomDetailsModal.style.display = 'flex';
            setTimeout(() => {
                roomDetailsModal.classList.add('show');
            }, 10);
        });
    });

    // Close Modals
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const modal = this.closest('.modal');
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
        });
    });

    // Save Room (just close the modal for this static example)
    saveRoomBtn.addEventListener('click', function () {
        addRoomModal.classList.remove('show');
        setTimeout(() => {
            addRoomModal.style.display = 'none';
            alert('Room added successfully!');
            document.getElementById('roomForm').reset();
        }, 300);
    });

    // Close modal when clicking outside
    window.addEventListener('click', function (event) {
        if (event.target.classList.contains('modal')) {
            event.target.classList.remove('show');
            setTimeout(() => {
                event.target.style.display = 'none';
            }, 300);
        }
    });
});

/* ROOM INVENTORY */



/* ALL BOOKINGS */

// Simple JavaScript to handle modal interactions
document.addEventListener('DOMContentLoaded', function () {
    // Add Booking Modal
    const addBookingBtn = document.getElementById('addBookingBtn');
    const addBookingModal = document.getElementById('addBookingModal');
    const saveBookingBtn = document.getElementById('saveBookingBtn');

    // Booking Details Modal
    const viewBtns = document.querySelectorAll('.view-btn');
    const bookingDetailsModal = document.getElementById('bookingDetailsModal');

    // Close buttons
    const closeModalBtns = document.querySelectorAll('.close');

    // Show Add Booking Modal
    addBookingBtn.addEventListener('click', function () {
        addBookingModal.style.display = 'flex';
        setTimeout(() => {
            addBookingModal.classList.add('show');
        }, 10);
    });

    // Show Booking Details Modal
    viewBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            bookingDetailsModal.style.display = 'flex';
            setTimeout(() => {
                bookingDetailsModal.classList.add('show');
            }, 10);
        });
    });

    // Close Modals
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const modal = this.closest('.modal');
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
        });
    });

    // Save Booking (just close the modal for this static example)
    saveBookingBtn.addEventListener('click', function () {
        addBookingModal.classList.remove('show');
        setTimeout(() => {
            addBookingModal.style.display = 'none';
            alert('Booking created successfully!');
            document.getElementById('bookingForm').reset();
        }, 300);
    });

    // Close modal when clicking outside
    window.addEventListener('click', function (event) {
        if (event.target.classList.contains('modal')) {
            event.target.classList.remove('show');
            setTimeout(() => {
                event.target.style.display = 'none';
            }, 300);
        }
    });
});

/* ALL BOOKINGS */


/* PAYMENT PROCESSING */

document.addEventListener('DOMContentLoaded', function () {
    // Simulate finding a booking
    document.getElementById('findBookingBtn').addEventListener('click', function () {
        document.getElementById('bookingDetails').style.display = 'block';
    });

    // Process payment button
    document.getElementById('processPaymentBtn').addEventListener('click', function () {
        // In a real app, this would send data to server
        alert('Payment processed successfully!');
        document.getElementById('printReceiptBtn').disabled = false;

        // Update receipt with current date/time
        document.querySelector('.receipt-meta div:nth-child(2) span').textContent =
            new Date().toLocaleString('en-PH', {
                month: 'short',
                day: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
            });
    });

    // Print receipt button
    document.getElementById('printReceiptBtn').addEventListener('click', function () {
        const receiptContent = document.getElementById('receiptPreview').innerHTML;
        const printWindow = window.open('', '', 'width=800,height=900');
        printWindow.document.write(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Retra Hotel Receipt</title>
                    <style>
                        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
                        .receipt { max-width: 500px; margin: 0 auto; border: none !important; }
                        ${document.querySelector('style').textContent}
                    </style>
                </head>
                <body>
                    ${receiptContent}
                    <script>
                        window.onload = function() { window.print(); }
                    <\/script>
                </body>
                </html>
            `);
        printWindow.document.close();
    });

    // Search functionality for transaction history
    document.getElementById('historySearch').addEventListener('input', function (e) {
        const searchTerm = e.target.value.toLowerCase();
        const rows = document.querySelectorAll('.transaction-history tbody tr');

        rows.forEach(row => {
            const rowText = row.textContent.toLowerCase();
            row.style.display = rowText.includes(searchTerm) ? '' : 'none';
        });
    });
});
/* PAYMENT PROCESSING */


document.querySelectorAll('.date-input').forEach(input => {
    // Store original placeholder
    const originalPlaceholder = input.placeholder;

    input.addEventListener('focus', function () {
        if (this.type === 'text') {
            this.type = 'date';
            this.style.paddingLeft = '12px'; // Reduce padding when showing date picker
            if (window.innerWidth <= 768) {
                setTimeout(() => this.click(), 100);
            }
        }
    });

    input.addEventListener('blur', function () {
        if (this.value === '' && this.type === 'date') {
            this.type = 'text';
            this.placeholder = originalPlaceholder;
            this.style.paddingLeft = '30px'; // Restore padding for icon
        }
    });
});


<script>
document.addEventListener('DOMContentLoaded', function() {
    // Room selection functionality
    const selectButtons = document.querySelectorAll('.select-btn');
    
    selectButtons.forEach(button => {
        button.addEventListener('click', function() {
            // First remove all selected states
            document.querySelectorAll('.room-card').forEach(card => {
                card.classList.remove('selected');
            });
            
            document.querySelectorAll('.select-btn').forEach(btn => {
                btn.classList.remove('selected');
                btn.innerHTML = '<i class="fas fa-plus"></i> Select';
            });
            
            // Add selected state to clicked room
            const roomCard = this.closest('.room-card');
            roomCard.classList.add('selected');
            this.classList.add('selected');
            this.innerHTML = '<i class="fas fa-check"></i> Selected';
        });
    });
    
    // Date validation
    const checkInDate = document.getElementById('checkInDate');
    const checkOutDate = document.getElementById('checkOutDate');
    
    // Set minimum dates (today)
    const today = new Date().toISOString().split('T')[0];
    checkInDate.min = today;
    
    checkInDate.addEventListener('change', function() {
        if (this.value) {
            const nextDay = new Date(this.value);
            nextDay.setDate(nextDay.getDate() + 1);
            checkOutDate.min = nextDay.toISOString().split('T')[0];
            
            if (checkOutDate.value && new Date(checkOutDate.value) <= new Date(this.value)) {
                checkOutDate.value = '';
            }
        }
    });
    
    // Form submission
    const bookingForm = document.getElementById('bookingForm');
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate room selection
        const selectedRoom = document.querySelector('.room-card.selected');
        if (!selectedRoom) {
            alert('Please select a room to continue with the booking.');
            return;
        }
        
        // Here you would typically send the form data to your backend
        alert('Booking submitted successfully!');
        // bookingForm.reset();
    });
});