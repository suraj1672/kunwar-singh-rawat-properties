// Sample property data
const properties = [
    {
        id: 1,
        title: "Luxury 3 BHK Apartment",
        location: "Sector 62, Noida",
        area: "sector-62",
        type: "apartment",
        price: 8500000,
        bedrooms: 3,
        bathrooms: 2,
        area_sqft: 1200,
        description: "Beautiful 3 BHK apartment with modern amenities, located in the heart of Sector 62.",
        status: "sale",
        features: ["Parking", "Gym", "Swimming Pool", "Security"]
    },
    {
        id: 2,
        title: "Spacious 2 BHK Villa",
        location: "Sector 63, Noida",
        area: "sector-63",
        type: "villa",
        price: 12000000,
        bedrooms: 2,
        bathrooms: 3,
        area_sqft: 1800,
        description: "Elegant villa with garden and private parking space.",
        status: "sale",
        features: ["Garden", "Private Parking", "Security", "24/7 Power Backup"]
    },
    {
        id: 3,
        title: "Modern 1 BHK Apartment",
        location: "Sector 64, Noida",
        area: "sector-64",
        type: "apartment",
        price: 4500000,
        bedrooms: 1,
        bathrooms: 1,
        area_sqft: 650,
        description: "Perfect for young professionals, fully furnished apartment.",
        status: "rent",
        rentPrice: 25000,
        features: ["Furnished", "Parking", "Security", "Lift"]
    },
    {
        id: 4,
        title: "Commercial Office Space",
        location: "Sector 65, Noida",
        area: "sector-65",
        type: "commercial",
        price: 15000000,
        bedrooms: 0,
        bathrooms: 2,
        area_sqft: 2000,
        description: "Prime commercial space ideal for corporate offices.",
        status: "sale",
        features: ["Parking", "Reception", "Conference Room", "Cafeteria"]
    },
    {
        id: 5,
        title: "Residential Plot",
        location: "Sector 66, Noida",
        area: "sector-66",
        type: "plot",
        price: 6000000,
        bedrooms: 0,
        bathrooms: 0,
        area_sqft: 1200,
        description: "Prime residential plot ready for construction.",
        status: "sale",
        features: ["Corner Plot", "Road Facing", "Clear Title", "Approved Plans"]
    },
    {
        id: 6,
        title: "Furnished 2 BHK House",
        location: "Sector 67, Noida",
        area: "sector-67",
        type: "house",
        price: 0,
        bedrooms: 2,
        bathrooms: 2,
        area_sqft: 1000,
        description: "Independent house with all modern facilities.",
        status: "rent",
        rentPrice: 35000,
        features: ["Furnished", "Garden", "Parking", "Security"]
    },
    {
        id: 7,
        title: "Premium 4 BHK Apartment",
        location: "Sector 68, Noida",
        area: "sector-68",
        type: "apartment",
        price: 15000000,
        bedrooms: 4,
        bathrooms: 3,
        area_sqft: 2000,
        description: "Luxury apartment with premium finishes and amenities.",
        status: "sale",
        features: ["Premium Finishes", "Gym", "Swimming Pool", "Club House"]
    },
    {
        id: 8,
        title: "Retail Shop Space",
        location: "Sector 69, Noida",
        area: "sector-69",
        type: "shop",
        price: 8000000,
        bedrooms: 0,
        bathrooms: 1,
        area_sqft: 800,
        description: "Prime retail space in busy commercial area.",
        status: "sale",
        features: ["Main Road Facing", "Parking", "Storage", "High Footfall"]
    },
    {
        id: 9,
        title: "Cozy 1 BHK Apartment",
        location: "Sector 70, Noida",
        area: "sector-70",
        type: "apartment",
        price: 0,
        bedrooms: 1,
        bathrooms: 1,
        area_sqft: 550,
        description: "Compact and comfortable apartment for singles or couples.",
        status: "rent",
        rentPrice: 18000,
        features: ["Furnished", "Parking", "Security", "Near Metro"]
    },
    {
        id: 10,
        title: "Executive 3 BHK Villa",
        location: "Sector 71, Noida",
        area: "sector-71",
        type: "villa",
        price: 18000000,
        bedrooms: 3,
        bathrooms: 4,
        area_sqft: 2500,
        description: "Executive villa with premium amenities and modern design.",
        status: "sale",
        features: ["Premium Design", "Private Garden", "Swimming Pool", "Home Theater"]
    }
];

// DOM elements
const propertiesGrid = document.getElementById('properties-grid');
const noResults = document.getElementById('no-results');
const searchBtn = document.getElementById('search-btn');
const areaFilter = document.getElementById('area');
const typeFilter = document.getElementById('type');
const priceMinFilter = document.getElementById('price-min');
const priceMaxFilter = document.getElementById('price-max');
const bedroomsFilter = document.getElementById('bedrooms');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayProperties(properties);
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    searchBtn.addEventListener('click', filterProperties);
    
    // Add real-time filtering on input change
    [areaFilter, typeFilter, priceMinFilter, priceMaxFilter, bedroomsFilter].forEach(filter => {
        filter.addEventListener('change', filterProperties);
        filter.addEventListener('input', filterProperties);
    });
}

// Display properties
function displayProperties(propertiesToShow) {
    if (propertiesToShow.length === 0) {
        propertiesGrid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }
    
    propertiesGrid.style.display = 'grid';
    noResults.style.display = 'none';
    
    propertiesGrid.innerHTML = propertiesToShow.map(property => createPropertyCard(property)).join('');
}

// Create property card HTML
function createPropertyCard(property) {
    const price = property.status === 'rent' ? 
        `₹${property.rentPrice.toLocaleString()}/month` : 
        `₹${property.price.toLocaleString()}`;
    
    const statusClass = property.status === 'rent' ? 'rent' : 'sale';
    const statusText = property.status === 'rent' ? 'For Rent' : 'For Sale';
    
    return `
        <div class="property-card" data-property-id="${property.id}">
            <div class="property-image">
                <div class="property-badge ${statusClass}">${statusText}</div>
            </div>
            <div class="property-content">
                <h3 class="property-title">${property.title}</h3>
                <p class="property-location">
                    <i class="fas fa-map-marker-alt"></i>
                    ${property.location}
                </p>
                <div class="property-details">
                    <div class="property-detail">
                        <i class="fas fa-bed"></i>
                        <span>${property.bedrooms} BHK</span>
                    </div>
                    <div class="property-detail">
                        <i class="fas fa-bath"></i>
                        <span>${property.bathrooms} Bath</span>
                    </div>
                    <div class="property-detail">
                        <i class="fas fa-ruler-combined"></i>
                        <span>${property.area_sqft} sq ft</span>
                    </div>
                </div>
                <div class="property-price">${price}</div>
                <p class="property-description">${property.description}</p>
                <div class="property-actions">
                    <button class="btn btn-book" onclick="openBookingModal(${property.id})">
                        <i class="fas fa-calendar-check"></i> Book Visit
                    </button>
                    <button class="btn btn-primary" onclick="viewProperty(${property.id})">
                        <i class="fas fa-eye"></i> View Details
                    </button>
                    <button class="btn btn-secondary" onclick="contactAgent(${property.id})">
                        <i class="fas fa-phone"></i> Contact
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Filter properties based on selected criteria
function filterProperties() {
    const selectedArea = areaFilter.value;
    const selectedType = typeFilter.value;
    const minPrice = parseFloat(priceMinFilter.value) || 0;
    const maxPrice = parseFloat(priceMaxFilter.value) || Infinity;
    const selectedBedrooms = bedroomsFilter.value;
    
    const filteredProperties = properties.filter(property => {
        // Area filter
        if (selectedArea && property.area !== selectedArea) {
            return false;
        }
        
        // Type filter
        if (selectedType && property.type !== selectedType) {
            return false;
        }
        
        // Price filter
        const propertyPrice = property.status === 'rent' ? property.rentPrice : property.price;
        if (propertyPrice < minPrice || propertyPrice > maxPrice) {
            return false;
        }
        
        // Bedrooms filter
        if (selectedBedrooms) {
            const requiredBedrooms = parseInt(selectedBedrooms);
            if (requiredBedrooms === 5) {
                if (property.bedrooms < 5) return false;
            } else {
                if (property.bedrooms !== requiredBedrooms) return false;
            }
        }
        
        return true;
    });
    
    displayProperties(filteredProperties);
}

// View property details (placeholder function)
function viewProperty(propertyId) {
    const property = properties.find(p => p.id === propertyId);
    if (property) {
        alert(`Viewing details for: ${property.title}\n\nLocation: ${property.location}\nPrice: ${property.status === 'rent' ? '₹' + property.rentPrice.toLocaleString() + '/month' : '₹' + property.price.toLocaleString()}\n\nDescription: ${property.description}\n\nFeatures: ${property.features.join(', ')}`);
    }
}

// Contact agent (placeholder function)
function contactAgent(propertyId) {
    const property = properties.find(p => p.id === propertyId);
    if (property) {
        alert(`Contacting agent for: ${property.title}\n\nPlease call: +91 XXXXX XXXXX\nOr email: info@kunwarsinghrawat.com`);
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation (optional enhancement)
function showLoading() {
    propertiesGrid.innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
        </div>
    `;
}

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(amount);
}

// Search functionality (enhanced)
function performSearch() {
    const searchTerm = document.getElementById('search-input')?.value.toLowerCase() || '';
    
    if (searchTerm) {
        const searchResults = properties.filter(property => 
            property.title.toLowerCase().includes(searchTerm) ||
            property.location.toLowerCase().includes(searchTerm) ||
            property.description.toLowerCase().includes(searchTerm)
        );
        displayProperties(searchResults);
    } else {
        filterProperties();
    }
}

// Add search input if needed
function addSearchInput() {
    const filtersContainer = document.querySelector('.filter-grid');
    const searchGroup = document.createElement('div');
    searchGroup.className = 'filter-group';
    searchGroup.innerHTML = `
        <label for="search-input">Search Properties</label>
        <input type="text" id="search-input" placeholder="Search by title, location...">
    `;
    filtersContainer.insertBefore(searchGroup, filtersContainer.firstChild);
    
    document.getElementById('search-input').addEventListener('input', performSearch);
}

// Initialize search input
addSearchInput();

// Booking Modal Functions
let currentPropertyId = null;

function openBookingModal(propertyId) {
    currentPropertyId = propertyId;
    const property = properties.find(p => p.id === propertyId);
    
    if (property) {
        // Set minimum date to today
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('visit-date').min = today;
        
        // Set property reference
        document.getElementById('property-reference').value = `${property.title} - ${property.location}`;
        
        // Show modal
        document.getElementById('booking-modal').style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeBookingModal() {
    document.getElementById('booking-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
    
    // Reset form
    document.getElementById('booking-form').reset();
    currentPropertyId = null;
}

function closeSuccessModal() {
    document.getElementById('success-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Handle booking form submission
document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const bookingData = {
        propertyId: currentPropertyId,
        property: properties.find(p => p.id === currentPropertyId),
        name: formData.get('name'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        date: formData.get('date'),
        time: formData.get('time'),
        propertyRef: formData.get('propertyRef'),
        notes: formData.get('notes'),
        timestamp: new Date().toISOString()
    };
    
    // Validate required fields
    if (!bookingData.name || !bookingData.phone || !bookingData.date || !bookingData.time) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Validate phone number (basic validation)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(bookingData.phone)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
    }
    
    // Validate email if provided
    if (bookingData.email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(bookingData.email)) {
            alert('Please enter a valid email address.');
            return;
        }
    }
    
    // Process booking (for now, just show success modal)
    processBooking(bookingData);
});

function processBooking(bookingData) {
    // Close booking modal
    closeBookingModal();
    
    // Display booking details in success modal
    const bookingDetails = document.getElementById('booking-details');
    bookingDetails.innerHTML = `
        <h4>Booking Details</h4>
        <p><strong>Property:</strong> ${bookingData.property.title}</p>
        <p><strong>Location:</strong> ${bookingData.property.location}</p>
        <p><strong>Name:</strong> ${bookingData.name}</p>
        <p><strong>Phone:</strong> ${bookingData.phone}</p>
        <p><strong>Email:</strong> ${bookingData.email || 'Not provided'}</p>
        <p><strong>Visit Date:</strong> ${new Date(bookingData.date).toLocaleDateString()}</p>
        <p><strong>Visit Time:</strong> ${bookingData.time}</p>
        ${bookingData.notes ? `<p><strong>Notes:</strong> ${bookingData.notes}</p>` : ''}
    `;
    
    // Show success modal
    document.getElementById('success-modal').style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // In a real application, you would send this data to your server
    console.log('Booking submitted:', bookingData);
    
    // For demonstration, you could send an email using a service like EmailJS
    // or store in localStorage for now
    saveBookingToLocalStorage(bookingData);
}

function saveBookingToLocalStorage(bookingData) {
    // Get existing bookings or create new array
    let bookings = JSON.parse(localStorage.getItem('propertyBookings') || '[]');
    
    // Add new booking
    bookings.push(bookingData);
    
    // Save back to localStorage
    localStorage.setItem('propertyBookings', JSON.stringify(bookings));
    
    console.log('Booking saved to localStorage. Total bookings:', bookings.length);
}

// Close modals when clicking outside
window.addEventListener('click', function(event) {
    const bookingModal = document.getElementById('booking-modal');
    const successModal = document.getElementById('success-modal');
    
    if (event.target === bookingModal) {
        closeBookingModal();
    }
    
    if (event.target === successModal) {
        closeSuccessModal();
    }
});

// Close modals with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeBookingModal();
        closeSuccessModal();
    }
});

// Contact Form Handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const contactData = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        interest: formData.get('interest'),
        message: formData.get('message'),
        timestamp: new Date().toISOString()
    };
    
    // Validate required fields
    if (!contactData.name || !contactData.phone || !contactData.interest) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Validate phone number
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(contactData.phone)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
    }
    
    // Validate email if provided
    if (contactData.email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(contactData.email)) {
            alert('Please enter a valid email address.');
            return;
        }
    }
    
    // Process contact form
    processContactForm(contactData);
});

function processContactForm(contactData) {
    // Show success message
    alert(`Thank you for your message, ${contactData.name}! We have received your inquiry and will contact you shortly at ${contactData.phone}.`);
    
    // Reset form
    document.getElementById('contact-form').reset();
    
    // In a real application, you would send this data to your server
    console.log('Contact form submitted:', contactData);
    
    // Save to localStorage for now
    saveContactToLocalStorage(contactData);
}

function saveContactToLocalStorage(contactData) {
    let contacts = JSON.parse(localStorage.getItem('contactInquiries') || '[]');
    contacts.push(contactData);
    localStorage.setItem('contactInquiries', JSON.stringify(contacts));
    console.log('Contact inquiry saved to localStorage. Total inquiries:', contacts.length);
}

// Fix navigation links to work properly
document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers for navigation links
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add click handlers for footer links
    const footerLinks = document.querySelectorAll('.footer-section a');
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});
