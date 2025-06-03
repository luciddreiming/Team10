document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const loginPage = document.getElementById('loginPage');
    const signupPage = document.getElementById('signupPage');
    const dashboardPage = document.getElementById('dashboardPage');
    const loginForm = document.getElementById('loginForm');
    const staffLoginForm = document.getElementById('staffLoginForm');
    const adminLoginForm = document.getElementById('adminLoginForm');
    const signupForm = document.getElementById('signupForm');
    const logoutBtn = document.getElementById('logoutBtn');
    const showLogin = document.getElementById('showLogin');
    const togglePasswordLogin = document.getElementById('togglePasswordLogin');
    const toggleStaffPassword = document.getElementById('toggleStaffPassword');
    const toggleAdminPassword = document.getElementById('toggleAdminPassword');
    const togglePasswordSignup = document.getElementById('togglePasswordSignup');
    const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
    const capsWarningLogin = document.getElementById('capsWarningLogin');
    const capsWarningStaff = document.getElementById('capsWarningStaff');
    const capsWarningAdmin = document.getElementById('capsWarningAdmin');
    const capsWarningSignup = document.getElementById('capsWarningSignup');
    const passwordLogin = document.getElementById('password');
    const staffPassword = document.getElementById('staffPassword');
    const adminPassword = document.getElementById('adminPassword');
    const passwordSignup = document.getElementById('signupPassword');
    const confirmPassword = document.getElementById('signupConfirmPassword');
    const complaintForm = document.getElementById('complaintForm');
    const documentRequestForm = document.getElementById('documentRequestForm');
    const otherServicesForm = document.getElementById('otherServicesForm');
    const statusFilter = document.getElementById('statusFilter');
    const documentStatusFilter = document.getElementById('documentStatusFilter');
    const serviceTypeFilter = document.getElementById('serviceTypeFilter');
    const manageStatusFilter = document.getElementById('manageStatusFilter');
    const searchComplaints = document.getElementById('searchComplaints');
    const generateReportBtn = document.getElementById('generateReportBtn');
    const publicTypeFilter = document.getElementById('publicTypeFilter');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const complaintsList = document.getElementById('complaintsList');
    const documentsList = document.getElementById('documentsList');
    const servicesList = document.getElementById('servicesList');
    const manageComplaintsList = document.getElementById('manageComplaintsList');
    const manageDocumentsList = document.getElementById('manageDocumentsList');
    const manageServicesList = document.getElementById('manageServicesList');
    const resolvedComplaintsGrid = document.getElementById('resolvedComplaintsGrid');
    const userRoleDisplay = document.getElementById('userRoleDisplay');
    const modal = document.getElementById('complaintDetailsModal');
    const modalTitle = document.getElementById('modalComplaintTitle');
    const modalBody = document.getElementById('modalComplaintBody');
    const modalActions = document.getElementById('modalActions');
    const accountTypeSelector = document.getElementById('accountTypeSelector');
    const welcomeMessage = document.getElementById('welcomeMessage');
    const residentBtn = document.getElementById('residentBtn');
    const staffBtn = document.getElementById('staffBtn');
    const adminBtn = document.getElementById('adminBtn');
    const residentLoginForm = document.getElementById('residentLoginForm');
    const backToSelection = document.getElementById('backToSelection');
    const serviceSelection = document.getElementById('serviceSelection');
    const complaintsBtn = document.getElementById('complaintsBtn');
    const documentsBtn = document.getElementById('documentsBtn');
    const othersBtn = document.getElementById('othersBtn');
    const complaintsSection = document.getElementById('complaintsSection');
    const documentsSection = document.getElementById('documentsSection');
    const othersSection = document.getElementById('othersSection');
    const staffAdminServiceSelection = document.getElementById('staffAdminServiceSelection');
    const manageComplaintsBtn = document.getElementById('manageComplaintsBtn');
    const manageDocumentsBtn = document.getElementById('manageDocumentsBtn');
    const manageOthersBtn = document.getElementById('manageOthersBtn');
    const manageComplaintsSection = document.getElementById('manageComplaintsSection');
    const manageDocumentsSection = document.getElementById('manageDocumentsSection');
    const manageOthersSection = document.getElementById('manageOthersSection');
    const backToServicesFromManageComplaints = document.getElementById('backToServicesFromManageComplaints');
    const backToServicesFromManageDocuments = document.getElementById('backToServicesFromManageDocuments');
    const backToServicesFromManageOthers = document.getElementById('backToServicesFromManageOthers');
    const documentManageStatusFilter = document.getElementById('documentManageStatusFilter');
    const searchDocuments = document.getElementById('searchDocuments');
    const serviceManageTypeFilter = document.getElementById('serviceManageTypeFilter');
    const searchServices = document.getElementById('searchServices');
    const staffDashboard = document.getElementById('staffDashboard');
    const adminDashboard = document.getElementById('adminDashboard');
    const publicViewSection = document.getElementById('publicViewSection');
    const serviceType = document.getElementById('serviceType');
    const donationAmountGroup = document.getElementById('donationAmountGroup');
    const complaintFormSection = document.getElementById('complaintFormSection');
    const backToServicesFromComplaints = document.getElementById('backToServicesFromComplaints');
    const backToServicesFromDocuments = document.getElementById('backToServicesFromDocuments');
    const backToServicesFromOthers = document.getElementById('backToServicesFromOthers');
    const trackingDashboard = document.querySelector('.tracking-dashboard');
    const adminStatusFilter = document.getElementById('adminStatusFilter');
    const adminSearchComplaints = document.getElementById('adminSearchComplaints');
    const adminGenerateReportBtn = document.getElementById('adminGenerateReportBtn');
    const adminComplaintsList = document.getElementById('adminComplaintsList');
    const adminVerifiedComplaintsSection = document.getElementById('adminVerifiedComplaintsSection');
    const adminVerifiedStatusFilter = document.getElementById('adminVerifiedStatusFilter');
    const adminVerifiedSearch = document.getElementById('adminVerifiedSearch');
    const adminVerifiedComplaintsList = document.getElementById('adminVerifiedComplaintsList');
    const backToServicesFromAdminComplaints = document.getElementById('backToServicesFromAdminComplaints');
    const complaintsTitle = document.getElementById('complaintsTitle');
    const documentsTitle = document.getElementById('documentsTitle');
    const servicesTitle = document.getElementById('servicesTitle');
    const manageComplaintsHeader = document.getElementById('manageComplaintsHeader');
    const manageDocumentsHeader = document.getElementById('manageDocumentsHeader');
    const manageServicesHeader = document.getElementById('manageServicesHeader');

    // Data storage
    let userAccounts = JSON.parse(localStorage.getItem('userAccounts')) || [
        { 
            id: '1',
            username: 'admin', 
            password: 'admin123', 
            name: 'Administrator', 
            email: 'admin@barangay.gov',
            role: 'admin'
        },
        { 
            id: '2',
            username: 'staff', 
            password: 'staff123', 
            name: 'Barangay Staff', 
            email: 'staff@barangay.gov',
            role: 'staff'
        },
        { 
            id: '3',
            username: 'resident', 
            password: 'resident123', 
            name: 'Resident User', 
            email: 'resident@barangay.gov',
            role: 'resident'
        }
    ];

    let complaints = JSON.parse(localStorage.getItem('complaints')) || [
        {
            id: 1,
            residentName: 'Juan Dela Cruz',
            residentAge: '35',
            residentAddress: '123 Main St, Purok 5',
            residentEmail: 'juan@example.com',
            residentContact: '09123456789',
            residentUsername: 'resident',
            residentId: '3',
            type: 'Garbage Collection',
            details: 'Garbage has not been collected for 3 days in our area',
            location: 'Purok 5, near basketball court',
            date: new Date().toISOString().split('T')[0],
            status: 'Resolved',
            photo: null,
            assignedStaff: 'Staff 1',
            resolutionNotes: 'Garbage was collected the following day',
            verifiedBy: 'Staff 1',
            verifiedAt: new Date().toISOString().split('T')[0],
            createdBy: 'resident',
            createdById: '3',
            isVerified: true,
            needsVerification: false
        },
        {
            id: 2,
            residentName: 'Maria Santos',
            residentAge: '28',
            residentAddress: '456 Oak St, Purok 3',
            residentEmail: 'maria@example.com',
            residentContact: '09234567890',
            residentUsername: 'resident',
            residentId: '3',
            type: 'Road Repair',
            details: 'Large pothole causing traffic and accidents',
            location: 'Main road near barangay hall',
            date: new Date().toISOString().split('T')[0],
            status: 'In Progress',
            photo: null,
            assignedStaff: 'Staff 2',
            resolutionNotes: '',
            verifiedBy: 'Staff 1',
            verifiedAt: new Date().toISOString().split('T')[0],
            createdBy: 'resident',
            createdById: '3',
            isVerified: true,
            needsVerification: false
        },
        {
            id: 3,
            residentName: 'Pedro Reyes',
            residentAge: '42',
            residentAddress: '789 Pine St, Purok 4',
            residentEmail: 'pedro@example.com',
            residentContact: '09345678901',
            residentUsername: 'resident',
            residentId: '3',
            type: 'Streetlight Repair',
            details: 'Streetlight not working for 1 week',
            location: 'Corner of Purok 3 and Purok 4',
            date: new Date().toISOString().split('T')[0],
            status: 'Pending',
            photo: null,
            assignedStaff: '',
            resolutionNotes: '',
            verifiedBy: '',
            verifiedAt: '',
            createdBy: 'resident',
            createdById: '3',
            isVerified: false,
            needsVerification: true
        }
    ];

    let documents = JSON.parse(localStorage.getItem('documents')) || [
        {
            id: 1,
            residentName: 'Juan Dela Cruz',
            residentUsername: 'resident',
            residentId: '3',
            documentType: 'Barangay Clearance',
            purpose: 'Employment requirement',
            notes: 'Urgent - need by Friday',
            dateRequested: new Date().toISOString().split('T')[0],
            status: 'Completed',
            processedBy: 'Staff 1',
            dateProcessed: new Date().toISOString().split('T')[0],
            verifiedBy: 'Admin 1',
            verifiedAt: new Date().toISOString().split('T')[0],
            createdBy: 'resident',
            createdById: '3',
            isVerified: true
        },
        {
            id: 2,
            residentName: 'Maria Santos',
            residentUsername: 'resident',
            residentId: '3',
            documentType: 'Certificate of Residency',
            purpose: 'School requirement',
            notes: '',
            dateRequested: new Date().toISOString().split('T')[0],
            status: 'Ready for Pickup',
            processedBy: 'Staff 2',
            dateProcessed: new Date().toISOString().split('T')[0],
            verifiedBy: 'Admin 1',
            verifiedAt: new Date().toISOString().split('T')[0],
            createdBy: 'resident',
            createdById: '3',
            isVerified: true
        }
    ];

    let otherServices = JSON.parse(localStorage.getItem('otherServices')) || [
        {
            id: 1,
            residentName: 'Pedro Reyes',
            residentUsername: 'resident',
            residentId: '3',
            serviceType: 'Suggestion',
            details: 'Please install more streetlights in Purok 4',
            donationAmount: null,
            dateSubmitted: new Date().toISOString().split('T')[0],
            status: 'Received',
            verifiedBy: 'Admin 1',
            verifiedAt: new Date().toISOString().split('T')[0],
            createdBy: 'resident',
            createdById: '3',
            isVerified: true
        },
        {
            id: 2,
            residentName: 'Juan Dela Cruz',
            residentUsername: 'resident',
            residentId: '3',
            serviceType: 'Donation',
            details: 'Donation for community pantry',
            donationAmount: 1000,
            dateSubmitted: new Date().toISOString().split('T')[0],
            status: 'Received',
            verifiedBy: 'Admin 1',
            verifiedAt: new Date().toISOString().split('T')[0],
            createdBy: 'resident',
            createdById: '3',
            isVerified: true
        }
    ];

    // Utility Functions
    function getCurrentUser() {
        const user = sessionStorage.getItem('currentUser');
        return user ? JSON.parse(user) : null;
    }

    function resetAllForms() {
        const forms = [
            document.getElementById('loginForm'),
            document.getElementById('staffLoginForm'),
            document.getElementById('adminLoginForm'),
            document.getElementById('signupForm'),
            document.getElementById('complaintForm'),
            document.getElementById('documentRequestForm'),
            document.getElementById('otherServicesForm')
        ];
        
        forms.forEach(form => {
            if (form && typeof form.reset === 'function') {
                form.reset();
            }
        });
    }

    function togglePasswordVisibility(inputField, toggleButton) {
        if (inputField.type === 'password') {
            inputField.type = 'text';
            toggleButton.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 6c-3.95 0-7.2 2.3-9 6 1.8 3.7 5.05 6 9 6s7.2-2.3 9-6c-1.8-3.7-5.05-6-9-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6.5A2.5 2.5 0 0 0 9.5 12 2.5 2.5 0 0 0 12 14.5 2.5 2.5 0 0 0 14.5 12 2.5 2.5 0 0 0 12 9.5z"/>
                    <path d="M22 2L2 22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
            `;
        } else {
            inputField.type = 'password';
            toggleButton.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 6c-3.95 0-7.2 2.3-9 6 1.8 3.7 5.05 6 9 6s7.2-2.3 9-6c-1.8-3.7-5.05-6-9-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6.5A2.5 2.5 0 0 0 9.5 12 2.5 2.5 0 0 0 12 14.5 2.5 2.5 0 0 0 14.5 12 2.5 2.5 0 0 0 12 9.5z"/>
                </svg>
            `;
        }
    }

    // View Management Functions
    function showLoginPage() {
        if (loginPage) loginPage.style.display = 'flex';
        if (signupPage) signupPage.style.display = 'none';
        if (dashboardPage) dashboardPage.style.display = 'none';
        showAccountSelection();
    }

    function showDashboard(user) {
        if (loginPage) loginPage.style.display = 'none';
        if (signupPage) signupPage.style.display = 'none';
        if (dashboardPage) dashboardPage.style.display = 'block';
        document.body.classList.add(`role-${user.role}`);
        updateUIForUserRole(user.role);
    }

    function updateUIForUserRole(role) {
        if (userRoleDisplay) userRoleDisplay.textContent = role.charAt(0).toUpperCase() + role.slice(1);
        
        // Reset all displays
        if (staffDashboard) staffDashboard.style.display = 'none';
        if (adminDashboard) adminDashboard.style.display = 'none';
        if (complaintFormSection) complaintFormSection.style.display = 'none';
        if (trackingDashboard) trackingDashboard.style.display = 'none';
        if (generateReportBtn) generateReportBtn.style.display = 'none';
        if (adminGenerateReportBtn) adminGenerateReportBtn.style.display = 'none';
        if (serviceSelection) serviceSelection.style.display = 'none';
        if (complaintsSection) complaintsSection.style.display = 'none';
        if (documentsSection) documentsSection.style.display = 'none';
        if (othersSection) othersSection.style.display = 'none';
        if (staffAdminServiceSelection) staffAdminServiceSelection.style.display = 'none';
        if (manageComplaintsSection) manageComplaintsSection.style.display = 'none';
        if (manageDocumentsSection) manageDocumentsSection.style.display = 'none';
        if (manageOthersSection) manageOthersSection.style.display = 'none';
        if (adminVerifiedComplaintsSection) adminVerifiedComplaintsSection.style.display = 'none';
        if (publicViewSection) publicViewSection.style.display = role === 'resident' ? 'block' : 'none';
        
        // Update table titles based on role
        if (role === 'staff') {
            if (complaintsTitle) complaintsTitle.textContent = 'Complaints/Requests (Pending Verification)';
            if (documentsTitle) documentsTitle.textContent = 'Document Requests (Pending Verification)';
            if (servicesTitle) servicesTitle.textContent = 'Other Services (Pending Verification)';
            if (manageComplaintsHeader) manageComplaintsHeader.textContent = 'Complaints/Requests (Pending Verification)';
            if (manageDocumentsHeader) manageDocumentsHeader.textContent = 'Document Requests (Pending Verification)';
            if (manageServicesHeader) manageServicesHeader.textContent = 'Other Services (Pending Verification)';
            showStaffAdminServiceSelection();
        } else if (role === 'admin') {
            if (complaintsTitle) complaintsTitle.textContent = 'All Verified Complaints/Requests';
            if (documentsTitle) documentsTitle.textContent = 'All Verified Document Requests';
            if (servicesTitle) servicesTitle.textContent = 'All Verified Other Services';
            if (manageComplaintsHeader) manageComplaintsHeader.textContent = 'All Verified Complaints/Requests';
            if (manageDocumentsHeader) manageDocumentsHeader.textContent = 'All Verified Document Requests';
            if (manageServicesHeader) manageServicesHeader.textContent = 'All Verified Other Services';
            showStaffAdminServiceSelection();
        } else if (role === 'resident') {
            showServiceSelection();
        }
    }

    // Account Type Selection
    function showAccountSelection() {
        if (accountTypeSelector) accountTypeSelector.style.display = 'flex';
        if (welcomeMessage) welcomeMessage.textContent = "Please select your account type";
        if (residentLoginForm) residentLoginForm.style.display = 'none';
        if (staffLoginForm) staffLoginForm.style.display = 'none';
        if (adminLoginForm) adminLoginForm.style.display = 'none';
        if (backToSelection) backToSelection.style.display = 'none';
    }

    function showResidentLogin() {
        if (accountTypeSelector) accountTypeSelector.style.display = 'none';
        if (welcomeMessage) welcomeMessage.textContent = "Resident Login";
        if (residentLoginForm) residentLoginForm.style.display = 'block';
        if (staffLoginForm) staffLoginForm.style.display = 'none';
        if (adminLoginForm) adminLoginForm.style.display = 'none';
        if (backToSelection) backToSelection.style.display = 'block';
    }

    function showStaffLogin() {
        if (accountTypeSelector) accountTypeSelector.style.display = 'none';
        if (welcomeMessage) welcomeMessage.textContent = "Staff Login";
        if (residentLoginForm) residentLoginForm.style.display = 'none';
        if (staffLoginForm) staffLoginForm.style.display = 'block';
        if (adminLoginForm) adminLoginForm.style.display = 'none';
        if (backToSelection) backToSelection.style.display = 'block';
    }

    function showAdminLogin() {
        if (accountTypeSelector) accountTypeSelector.style.display = 'none';
        if (welcomeMessage) welcomeMessage.textContent = "Admin Login";
        if (residentLoginForm) residentLoginForm.style.display = 'none';
        if (staffLoginForm) staffLoginForm.style.display = 'none';
        if (adminLoginForm) adminLoginForm.style.display = 'block';
        if (backToSelection) backToSelection.style.display = 'block';
    }

    function handleLogin(e) {
        e.preventDefault();
        try {
            let usernameField, passwordField, formElement;
            
            if (e.target.id === 'staffLoginForm') {
                usernameField = 'staffUsername';
                passwordField = 'staffPassword';
                formElement = document.getElementById('staffLoginForm');
            } else if (e.target.id === 'adminLoginForm') {
                usernameField = 'adminUsername';
                passwordField = 'adminPassword';
                formElement = document.getElementById('adminLoginForm');
            } else {
                usernameField = 'username';
                passwordField = 'password';
                formElement = document.getElementById('loginForm');
            }
            
            const username = document.getElementById(usernameField).value.trim();
            const password = document.getElementById(passwordField).value.trim();

            if (!username || !password) {
                throw new Error('Username and password are required');
            }

            const user = authenticateUser(username, password);
            sessionStorage.setItem('currentUser', JSON.stringify(user));
            
            showDashboard(user);
            
            if (formElement && typeof formElement.reset === 'function') {
                formElement.reset();
            }
            
            console.log("Login successful:", username);
        } catch (error) {
            console.error("Login error:", error.message);
            if (e.target.id === 'staffLoginForm') {
                document.getElementById('staffPassword').value = '';
            } else if (e.target.id === 'adminLoginForm') {
                document.getElementById('adminPassword').value = '';
            } else {
                document.getElementById('password').value = '';
            }
            alert(error.message);
        }
    }

    function authenticateUser(username, password) {
        const user = userAccounts.find(account => 
            account.username === username && account.password === password
        );
        
        if (!user) {
            throw new Error('Invalid username or password');
        }
        return user;
    }

    function handleSignup(e) {
        e.preventDefault();
        try {
            const formData = {
                name: document.getElementById('signupName').value.trim(),
                email: document.getElementById('signupEmail').value.trim(),
                username: document.getElementById('signupUsername').value.trim(),
                password: document.getElementById('signupPassword').value,
                confirmPassword: document.getElementById('signupConfirmPassword').value,
                role: document.getElementById('userRole').value || 'resident'
            };

            validateSignup(formData);
            const newUser = createUserAccount(formData);
            
            userAccounts.push(newUser);
            localStorage.setItem('userAccounts', JSON.stringify(userAccounts));
            
            if (signupPage) signupPage.style.display = 'none';
            if (loginPage) loginPage.style.display = 'flex';
            if (signupForm) signupForm.reset();
            
            console.log("Signup successful:", newUser.username);
            alert('Account created successfully! Please login.');
        } catch (error) {
            console.error("Signup error:", error.message);
            alert(error.message);
        }
    }

    function validateSignup(formData) {
        if (!formData.name || !formData.email || !formData.username || 
            !formData.password || !formData.confirmPassword || !formData.role) {
            throw new Error('Please fill in all fields');
        }

        if (formData.password !== formData.confirmPassword) {
            throw new Error('Passwords do not match');
        }

        if (userAccounts.some(account => account.username.toLowerCase() === formData.username.toLowerCase())) {
            throw new Error('Username already exists');
        }

        if (userAccounts.some(account => account.email.toLowerCase() === formData.email.toLowerCase())) {
            throw new Error('Email already registered');
        }

        if (formData.password.length < 6) {
            throw new Error('Password must be at least 6 characters long');
        }
    }

    function createUserAccount(formData) {
        return { 
            id: Date.now().toString(),
            username: formData.username, 
            password: formData.password, 
            name: formData.name, 
            email: formData.email,
            role: formData.role 
        };
    }

    function logout() {
        const currentUser = getCurrentUser();
        if (currentUser) {
            console.log("Logging out user:", currentUser.username);
            document.body.classList.remove(`role-${currentUser.role}`);
        }  
        sessionStorage.removeItem('currentUser');
        showLoginPage();
        resetAllForms();
    }

    // Service Selection Functions
    function showServiceSelection() {
        if (serviceSelection) serviceSelection.style.display = 'block';
        if (complaintsSection) complaintsSection.style.display = 'none';
        if (documentsSection) documentsSection.style.display = 'none';
        if (othersSection) othersSection.style.display = 'none';
        if (publicViewSection) publicViewSection.style.display = 'none';
    }

    function showComplaintsSection() {
        if (serviceSelection) serviceSelection.style.display = 'none';
        if (complaintsSection) complaintsSection.style.display = 'grid';
        if (complaintFormSection) complaintFormSection.style.display = 'block';
        if (trackingDashboard) trackingDashboard.style.display = 'block';
        if (documentsSection) documentsSection.style.display = 'none';
        if (othersSection) othersSection.style.display = 'none';
        if (publicViewSection) publicViewSection.style.display = 'none';
        updateComplaintsTable();
    }

    function showDocumentsSection() {
        if (serviceSelection) serviceSelection.style.display = 'none';
        if (complaintsSection) complaintsSection.style.display = 'none';
        if (documentsSection) documentsSection.style.display = 'block';
        if (othersSection) othersSection.style.display = 'none';
        if (publicViewSection) publicViewSection.style.display = 'none';
        updateDocumentsTable();
    }

    function showOthersSection() {
        if (serviceSelection) serviceSelection.style.display = 'none';
        if (complaintsSection) complaintsSection.style.display = 'none';
        if (documentsSection) documentsSection.style.display = 'none';
        if (othersSection) othersSection.style.display = 'block';
        if (publicViewSection) publicViewSection.style.display = 'none';
        updateServicesTable();
    }

    function showStaffAdminServiceSelection() {
        if (staffAdminServiceSelection) staffAdminServiceSelection.style.display = 'block';
        if (manageComplaintsSection) manageComplaintsSection.style.display = 'none';
        if (manageDocumentsSection) manageDocumentsSection.style.display = 'none';
        if (manageOthersSection) manageOthersSection.style.display = 'none';
        if (publicViewSection) publicViewSection.style.display = 'none';
        if (staffDashboard) staffDashboard.style.display = 'none';
        if (adminDashboard) adminDashboard.style.display = 'none';
        if (adminVerifiedComplaintsSection) adminVerifiedComplaintsSection.style.display = 'none';
    }

    function showManageComplaintsSection() {
        const currentUser = getCurrentUser();
        if (!currentUser) return;

        if (staffAdminServiceSelection) staffAdminServiceSelection.style.display = 'none';
        if (manageComplaintsSection) manageComplaintsSection.style.display = 'block';
        if (manageDocumentsSection) manageDocumentsSection.style.display = 'none';
        if (manageOthersSection) manageOthersSection.style.display = 'none';
        if (publicViewSection) publicViewSection.style.display = 'none';
        if (staffDashboard) staffDashboard.style.display = 'none';
        if (adminDashboard) adminDashboard.style.display = 'none';
        if (adminVerifiedComplaintsSection) adminVerifiedComplaintsSection.style.display = 'none';

        if (currentUser.role === 'staff' && manageComplaintsHeader) {
            manageComplaintsHeader.textContent = 'Complaints/Requests (Pending Verification)';
        } else if (currentUser.role === 'admin' && manageComplaintsHeader) {
            manageComplaintsHeader.textContent = 'All Verified Complaints/Requests';
        }

        updateManageComplaintsTable();
    }

    function showManageDocumentsSection() {
        const currentUser = getCurrentUser();
        if (!currentUser) return;

        if (staffAdminServiceSelection) staffAdminServiceSelection.style.display = 'none';
        if (manageComplaintsSection) manageComplaintsSection.style.display = 'none';
        if (manageDocumentsSection) manageDocumentsSection.style.display = 'block';
        if (manageOthersSection) manageOthersSection.style.display = 'none';
        if (publicViewSection) publicViewSection.style.display = 'none';
        if (staffDashboard) staffDashboard.style.display = 'none';
        if (adminDashboard) adminDashboard.style.display = 'none';
        if (adminVerifiedComplaintsSection) adminVerifiedComplaintsSection.style.display = 'none';

        if (currentUser.role === 'staff' && manageDocumentsHeader) {
            manageDocumentsHeader.textContent = 'Document Requests (Pending Verification)';
        } else if (currentUser.role === 'admin' && manageDocumentsHeader) {
            manageDocumentsHeader.textContent = 'All Verified Document Requests';
        }

        updateManageDocumentsTable();
    }

    function showManageOthersSection() {
        const currentUser = getCurrentUser();
        if (!currentUser) return;

        if (staffAdminServiceSelection) staffAdminServiceSelection.style.display = 'none';
        if (manageComplaintsSection) manageComplaintsSection.style.display = 'none';
        if (manageDocumentsSection) manageDocumentsSection.style.display = 'none';
        if (manageOthersSection) manageOthersSection.style.display = 'block';
        if (publicViewSection) publicViewSection.style.display = 'none';
        if (staffDashboard) staffDashboard.style.display = 'none';
        if (adminDashboard) adminDashboard.style.display = 'none';
        if (adminVerifiedComplaintsSection) adminVerifiedComplaintsSection.style.display = 'none';

        if (currentUser.role === 'staff' && manageServicesHeader) {
            manageServicesHeader.textContent = 'Other Services (Pending Verification)';
        } else if (currentUser.role === 'admin' && manageServicesHeader) {
            manageServicesHeader.textContent = 'All Verified Other Services';
        }

        updateManageServicesTable();
    }

    function showAdminVerifiedComplaints() {
        if (staffAdminServiceSelection) staffAdminServiceSelection.style.display = 'none';
        if (manageComplaintsSection) manageComplaintsSection.style.display = 'none';
        if (manageDocumentsSection) manageDocumentsSection.style.display = 'none';
        if (manageOthersSection) manageOthersSection.style.display = 'none';
        if (publicViewSection) publicViewSection.style.display = 'none';
        if (staffDashboard) staffDashboard.style.display = 'none';
        if (adminDashboard) adminDashboard.style.display = 'none';
        if (adminVerifiedComplaintsSection) adminVerifiedComplaintsSection.style.display = 'block';
        updateAdminVerifiedComplaintsTable();
    }

    function handleComplaintSubmit(e) {
        e.preventDefault();
        try {
            const currentUser = getCurrentUser();
            if (!currentUser || currentUser.role !== 'resident') {
                throw new Error('Only residents can submit complaints');
            }

            const formData = collectComplaintFormData();
            validateComplaintForm(formData);
            
            const newComplaint = createComplaint(formData, currentUser);
            complaints.push(newComplaint);
            
            // Force update localStorage
            localStorage.setItem('complaints', JSON.stringify(complaints));
            
            // Debug output
            console.log('New complaint created:', newComplaint);
            console.log('All complaints:', complaints);
            
            // Update all views
            updateComplaintsTable();
            updateManageComplaintsTable();
            if (adminComplaintsList) updateAdminComplaintsTable();
            if (adminVerifiedComplaintsList) updateAdminVerifiedComplaintsTable();
            
            if (complaintForm) complaintForm.reset();
            
            alert('Complaint submitted successfully! It will be reviewed by staff.');
        } catch (error) {
            console.error("Complaint submission error:", error);
            alert(error.message);
        }
    }

    function collectComplaintFormData() {
        return {
            name: document.getElementById('residentName').value.trim(),
            age: document.getElementById('residentAge').value.trim(),
            address: document.getElementById('residentAddress').value.trim(),
            email: document.getElementById('residentEmail').value.trim(),
            contact: document.getElementById('residentContact').value.trim(),
            type: document.getElementById('complaintType').value,
            details: document.getElementById('complaintDetails').value.trim(),
            location: document.getElementById('complaintLocation').value.trim(),
            photoFile: document.getElementById('photoUpload').files[0]
        };
    }

    function validateComplaintForm(formData) {
        if (!formData.name || !formData.age || !formData.address || 
            !formData.email || !formData.contact || !formData.type || 
            !formData.details || !formData.location) {
            throw new Error('Please fill in all required fields');
        }
    }

    function createComplaint(formData, currentUser) {
        return {
            id: complaints.length > 0 ? Math.max(...complaints.map(c => c.id)) + 1 : 1,
            residentName: formData.name,
            residentAge: formData.age,
            residentAddress: formData.address,
            residentEmail: formData.email,
            residentContact: formData.contact,
            residentUsername: currentUser.username,
            residentId: currentUser.id,
            type: formData.type,
            details: formData.details,
            location: formData.location,
            date: new Date().toISOString().split('T')[0],
            status: 'Pending',
            photo: formData.photoFile ? URL.createObjectURL(formData.photoFile) : null,
            assignedStaff: '',
            resolutionNotes: '',
            verifiedBy: '',
            verifiedAt: '',
            createdBy: currentUser.username,
            createdById: currentUser.id,
            isVerified: false,
            needsVerification: true
        };
    }

    // Document Request Handling Functions
    function handleDocumentRequestSubmit(e) {
        e.preventDefault();
        try {
            const currentUser = getCurrentUser();
            if (!currentUser || currentUser.role !== 'resident') {
                throw new Error('Only residents can request documents');
            }

            const formData = collectDocumentRequestFormData();
            validateDocumentRequestForm(formData);
            
            const newDocument = createDocumentRequest(formData, currentUser);
            documents.push(newDocument);
            localStorage.setItem('documents', JSON.stringify(documents));
            
            updateDocumentsTable();
            updateManageDocumentsTable();
            if (documentRequestForm) documentRequestForm.reset();
            
            console.log("Document request submitted:", newDocument.id);
            alert('Document request submitted successfully!');
        } catch (error) {
            console.error("Document request error:", error.message);
            alert(error.message);
        }
    }

    function collectDocumentRequestFormData() {
        return {
            documentType: document.getElementById('documentType').value,
            purpose: document.getElementById('documentPurpose').value.trim(),
            notes: document.getElementById('documentNotes').value.trim()
        };
    }

    function validateDocumentRequestForm(formData) {
        if (!formData.documentType || !formData.purpose) {
            throw new Error('Please fill in all required fields');
        }
    }

    function createDocumentRequest(formData, currentUser) {
        return {
            id: documents.length > 0 ? Math.max(...documents.map(d => d.id)) + 1 : 1,
            residentName: currentUser.name,
            residentUsername: currentUser.username,
            residentId: currentUser.id,
            documentType: formData.documentType,
            purpose: formData.purpose,
            notes: formData.notes,
            dateRequested: new Date().toISOString().split('T')[0],
            status: 'Pending',
            processedBy: '',
            dateProcessed: '',
            verifiedBy: '',
            verifiedAt: '',
            createdBy: currentUser.username,
            createdById: currentUser.id,
            isVerified: false
        };
    }

    // Other Services Handling Functions
    function handleOtherServicesSubmit(e) {
        e.preventDefault();
        try {
            const currentUser = getCurrentUser();
            if (!currentUser || currentUser.role !== 'resident') {
                throw new Error('Only residents can submit other services');
            }

            const formData = collectOtherServicesFormData();
            validateOtherServicesForm(formData);
            
            const newService = createOtherService(formData, currentUser);
            otherServices.push(newService);
            localStorage.setItem('otherServices', JSON.stringify(otherServices));
            
            updateServicesTable();
            updateManageServicesTable();
            if (otherServicesForm) otherServicesForm.reset();
            if (donationAmountGroup) donationAmountGroup.style.display = 'none';
            
            console.log("Service submitted:", newService.id);
            alert('Service submitted successfully!');
        } catch (error) {
            console.error("Service submission error:", error.message);
            alert(error.message);
        }
    }

    function collectOtherServicesFormData() {
        return {
            serviceType: document.getElementById('serviceType').value,
            details: document.getElementById('serviceDetails').value.trim(),
            donationAmount: document.getElementById('donationAmount')?.value
        };
    }

    function validateOtherServicesForm(formData) {
        if (!formData.serviceType || !formData.details) {
            throw new Error('Please fill in all required fields');
        }
        
        if (formData.serviceType === 'Donation' && (!formData.donationAmount || formData.donationAmount <= 0)) {
            throw new Error('Please enter a valid donation amount');
        }
    }

    function createOtherService(formData, currentUser) {
        return {
            id: otherServices.length > 0 ? Math.max(...otherServices.map(s => s.id)) + 1 : 1,
            residentName: currentUser.name,
            residentUsername: currentUser.username,
            residentId: currentUser.id,
            serviceType: formData.serviceType,
            details: formData.details,
            donationAmount: formData.serviceType === 'Donation' ? parseFloat(formData.donationAmount) : null,
            dateSubmitted: new Date().toISOString().split('T')[0],
            status: 'Received',
            verifiedBy: '',
            verifiedAt: '',
            createdBy: currentUser.username,
            createdById: currentUser.id,
            isVerified: false
        };
    }

    function updateComplaintResolution(complaintId, feedback, staffName) {
        const complaint = complaints.find(c => c.id === complaintId);
        if (complaint) {
            complaint.resolutionNotes = feedback;
            complaint.status = 'Resolved';
            complaint.assignedStaff = staffName;
            localStorage.setItem('complaints', JSON.stringify(complaints));
        } else {
            throw new Error('Complaint not found');
        }
    }

    // Table Update Functions
    function updateAllViews() {
        updateComplaintsTable();
        updateDocumentsTable();
        updateServicesTable();
        updateManageComplaintsTable();
        updateManageDocumentsTable();
        updateManageServicesTable();
        updateResolvedComplaintsGrid();
        
        const currentUser = getCurrentUser();
        if (currentUser?.role === 'admin') {
            updateAdminComplaintsTable();
            updateAdminVerifiedComplaintsTable();
        }
    }

    function updateComplaintsTable() {
        const currentUser = getCurrentUser();
        if (!currentUser) return;

        const statusFilterValue = statusFilter ? statusFilter.value : 'all';
        let filteredComplaints = complaints.filter(c => 
            c.createdById === currentUser.id && 
            c.createdBy === currentUser.username
        );

        if (statusFilterValue !== 'all') {
            filteredComplaints = filteredComplaints.filter(c => c.status === statusFilterValue);
        }

        renderTable(
            complaintsList,
            filteredComplaints,
            ['id', 'type', 'date', 'status', 'location'],
            ['ID', 'Type', 'Date', 'Status', 'Location'],
            true
        );
    }

    function updateDocumentsTable() {
        const currentUser = getCurrentUser();
        if (!currentUser) return;

        const statusFilterValue = documentStatusFilter ? documentStatusFilter.value : 'all';
        let filteredDocuments = documents.filter(d => 
            d.createdById === currentUser.id && 
            d.createdBy === currentUser.username
        );

        if (statusFilterValue !== 'all') {
            filteredDocuments = filteredDocuments.filter(d => d.status === statusFilterValue);
        }

        renderTable(
            documentsList,
            filteredDocuments,
            ['id', 'documentType', 'dateRequested', 'status', 'purpose'],
            ['ID', 'Document Type', 'Date Requested', 'Status', 'Purpose'],
            true
        );
    }

    function updateServicesTable() {
        const currentUser = getCurrentUser();
        if (!currentUser) return;

        const typeFilterValue = serviceTypeFilter ? serviceTypeFilter.value : 'all';
        let filteredServices = otherServices.filter(s => 
            s.createdById === currentUser.id && 
            s.createdBy === currentUser.username
        );

        if (typeFilterValue !== 'all') {
            filteredServices = filteredServices.filter(s => s.serviceType === typeFilterValue);
        }

        renderTable(
            servicesList,
            filteredServices,
            ['id', 'serviceType', 'dateSubmitted', 'status', 'details'],
            ['ID', 'Service Type', 'Date', 'Status', 'Details'],
            true
        );
    }

    function updateManageComplaintsTable() {
        const currentUser = getCurrentUser();
        if (!currentUser || (currentUser.role !== 'admin' && currentUser.role !== 'staff')) return;

        const statusFilterValue = manageStatusFilter ? manageStatusFilter.value : 'all';
        const searchValue = searchComplaints ? searchComplaints.value.toLowerCase() : '';
        
        // Start with all complaints
        let filteredComplaints = [...complaints];
        
        // Role-specific filtering
        if (currentUser.role === 'staff') {
            // Staff should see all complaints that need verification or are pending
            filteredComplaints = filteredComplaints.filter(c => 
                c.needsVerification || 
                !c.isVerified || 
                c.status === 'Pending'
            );
        } else if (currentUser.role === 'admin') {
            // Admin sees all verified complaints
            filteredComplaints = filteredComplaints.filter(c => c.isVerified);
        }
        
        // Apply status filter
        if (statusFilterValue !== 'all') {
            filteredComplaints = filteredComplaints.filter(c => c.status === statusFilterValue);
        }
        
        // Apply search filter
        if (searchValue) {
            filteredComplaints = filteredComplaints.filter(c => 
                (c.type && c.type.toLowerCase().includes(searchValue)) ||
                (c.residentName && c.residentName.toLowerCase().includes(searchValue)) ||
                (c.location && c.location.toLowerCase().includes(searchValue))
            );
        }

        // Render the table
        renderTable(
            manageComplaintsList,
            filteredComplaints,
            ['id', 'type', 'residentName', 'date', 'status', 'location'],
            ['ID', 'Type', 'Resident', 'Date', 'Status', 'Location'],
            currentUser.role === 'admin'
        );
    }

    function updateManageDocumentsTable() {
        const currentUser = getCurrentUser();
        if (!currentUser || (currentUser.role !== 'admin' && currentUser.role !== 'staff')) return;

        const statusFilterValue = documentManageStatusFilter ? documentManageStatusFilter.value : 'all';
        const searchValue = searchDocuments ? searchDocuments.value.toLowerCase() : '';
        
        let filteredDocuments = [...documents];
        
        if (currentUser.role === 'staff') {
            filteredDocuments = filteredDocuments.filter(d => !d.isVerified);
        } else if (currentUser.role === 'admin') {
            filteredDocuments = filteredDocuments.filter(d => d.isVerified);
        }
        
        if (statusFilterValue !== 'all') {
            filteredDocuments = filteredDocuments.filter(d => d.status === statusFilterValue);
        }
        
        if (searchValue) {
            filteredDocuments = filteredDocuments.filter(d => 
                d.documentType.toLowerCase().includes(searchValue) ||
                d.residentName.toLowerCase().includes(searchValue) ||
                d.purpose.toLowerCase().includes(searchValue)
            );
        }

        renderTable(
            manageDocumentsList,
            filteredDocuments,
            ['id', 'documentType', 'residentName', 'dateRequested', 'status', 'purpose'],
            ['ID', 'Document Type', 'Resident', 'Date Requested', 'Status', 'Purpose'],
            currentUser.role === 'admin'
        );
    }

    function updateManageServicesTable() {
        const currentUser = getCurrentUser();
        if (!currentUser || (currentUser.role !== 'admin' && currentUser.role !== 'staff')) return;

        const typeFilterValue = serviceManageTypeFilter ? serviceManageTypeFilter.value : 'all';
        const searchValue = searchServices ? searchServices.value.toLowerCase() : '';
        
        let filteredServices = [...otherServices];
        
        if (currentUser.role === 'staff') {
            filteredServices = filteredServices.filter(s => !s.isVerified);
        } else if (currentUser.role === 'admin') {
            filteredServices = filteredServices.filter(s => s.isVerified);
        }
        
        if (typeFilterValue !== 'all') {
            filteredServices = filteredServices.filter(s => s.serviceType === typeFilterValue);
        }
        
        if (searchValue) {
            filteredServices = filteredServices.filter(s => 
                s.serviceType.toLowerCase().includes(searchValue) ||
                s.residentName.toLowerCase().includes(searchValue) ||
                s.details.toLowerCase().includes(searchValue)
            );
        }

        renderTable(
            manageServicesList,
            filteredServices,
            ['id', 'serviceType', 'residentName', 'dateSubmitted', 'status', 'details'],
            ['ID', 'Service Type', 'Resident', 'Date', 'Status', 'Details'],
            currentUser.role === 'admin'
        );
    }

    function updateAdminComplaintsTable() {
        const currentUser = getCurrentUser();
        if (!currentUser || currentUser.role !== 'admin') return;

        const statusFilterValue = adminStatusFilter ? adminStatusFilter.value : 'all';
        const searchValue = adminSearchComplaints ? adminSearchComplaints.value.toLowerCase() : '';
        
        let filteredComplaints = [...complaints];
        
        if (statusFilterValue !== 'all') {
            filteredComplaints = filteredComplaints.filter(c => c.status === statusFilterValue);
        }
        
        if (searchValue) {
            filteredComplaints = filteredComplaints.filter(c => 
                c.type.toLowerCase().includes(searchValue) ||
                c.residentName.toLowerCase().includes(searchValue) ||
                c.location.toLowerCase().includes(searchValue)
            );
        }

        renderAdminTable(
            adminComplaintsList,
            filteredComplaints,
            ['id', 'type', 'residentName', 'date', 'status', 'location', 'verifiedBy'],
            ['ID', 'Type', 'Resident', 'Date', 'Status', 'Location', 'Verified By'],
            true
        );
    }

    function updateAdminVerifiedComplaintsTable() {
        const currentUser = getCurrentUser();
        if (!currentUser || currentUser.role !== 'admin') return;

        const statusFilterValue = adminVerifiedStatusFilter ? adminVerifiedStatusFilter.value : 'all';
        const searchValue = adminVerifiedSearch ? adminVerifiedSearch.value.toLowerCase() : '';
        
        let filteredComplaints = complaints.filter(c => c.isVerified);
        
        if (statusFilterValue !== 'all') {
            filteredComplaints = filteredComplaints.filter(c => c.status === statusFilterValue);
        }
        
        if (searchValue) {
            filteredComplaints = filteredComplaints.filter(c => 
                c.type.toLowerCase().includes(searchValue) ||
                c.residentName.toLowerCase().includes(searchValue) ||
                c.location.toLowerCase().includes(searchValue)
            );
        }

        renderTable(
            adminVerifiedComplaintsList,
            filteredComplaints,
            ['id', 'type', 'residentName', 'date', 'status', 'location', 'verifiedBy'],
            ['ID', 'Type', 'Resident', 'Date', 'Status', 'Location', 'Verified By'],
            true
        );
    }

    function renderTable(container, data, properties, headers, showActions) {
        if (!container) return;

        container.innerHTML = '';

        if (data.length === 0) {
            container.innerHTML = `<tr><td colspan="${headers.length + 1}" style="text-align: center;">No records found</td></tr>`;
            return;
        }

        data.forEach(item => {
            const row = document.createElement('tr');
            
            properties.forEach(prop => {
                const cell = document.createElement('td');
                if (prop === 'status') {
                    cell.innerHTML = `<span class="status-badge status-${item[prop].toLowerCase().replace(' ', '-')}">${item[prop]}</span>`;
                } else if (prop === 'details') {
                    cell.textContent = item[prop].substring(0, 50) + (item[prop].length > 50 ? '...' : '');
                } else {
                    cell.textContent = item[prop] || '-';
                }
                row.appendChild(cell);
            });

            const actionCell = document.createElement('td');
            actionCell.innerHTML = `
                <button class="action-btn view-btn" data-id="${item.id}" data-type="${container.id.includes('Complaints') ? 'complaint' : container.id.includes('Documents') ? 'document' : 'service'}">View</button>
                ${showActions ? `<button class="action-btn delete-btn" data-id="${item.id}" data-type="${container.id.includes('Complaints') ? 'complaint' : container.id.includes('Documents') ? 'document' : 'service'}">Delete</button>` : ''}
            `;
            row.appendChild(actionCell);

            container.appendChild(row);
        });

        container.querySelectorAll('.view-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const itemId = parseInt(btn.dataset.id);
                const itemType = btn.dataset.type;
                showDetails(itemId, itemType);
            });
        });

        container.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const itemId = parseInt(btn.dataset.id);
                const itemType = btn.dataset.type;
                deleteItem(itemId, itemType);
            });
        });
    }

    function renderAdminTable(container, data, properties, headers, showActions) {
        if (!container) return;

        container.innerHTML = '';

        if (data.length === 0) {
            container.innerHTML = `<tr><td colspan="${headers.length + 1}" style="text-align: center;">No verified complaints found</td></tr>`;
            return;
        }

        data.forEach(item => {
            const row = document.createElement('tr');
            
            properties.forEach(prop => {
                const cell = document.createElement('td');
                if (prop === 'status') {
                    cell.innerHTML = `<span class="status-badge status-${item[prop].toLowerCase().replace(' ', '-')}">${item[prop]}</span>`;
                } else if (prop === 'details') {
                    cell.textContent = item[prop].substring(0, 50) + (item[prop].length > 50 ? '...' : '');
                } else {
                    cell.textContent = item[prop] || '-';
                }
                row.appendChild(cell);
            });

            const actionCell = document.createElement('td');
            actionCell.innerHTML = `
                <button class="action-btn view-btn" data-id="${item.id}" data-type="complaint">View</button>
                ${showActions ? `<button class="action-btn delete-btn" data-id="${item.id}" data-type="complaint">Delete</button>` : ''}
            `;
            row.appendChild(actionCell);

            container.appendChild(row);
        });

        container.querySelectorAll('.view-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const itemId = parseInt(btn.dataset.id);
                showDetails(itemId, 'complaint');
            });
        });

        container.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const itemId = parseInt(btn.dataset.id);
                deleteItem(itemId, 'complaint');
            });
        });
    }

    function updateResolvedComplaintsGrid() {
        const typeFilterValue = publicTypeFilter ? publicTypeFilter.value : 'all';
        let filteredComplaints = complaints.filter(c => c.status === 'Resolved');
        
        if (typeFilterValue !== 'all') {
            filteredComplaints = filteredComplaints.filter(c => c.type === typeFilterValue);
        }

        renderComplaintCards(filteredComplaints);
    }

    function renderComplaintCards(complaints) {
        if (!resolvedComplaintsGrid) return;

        resolvedComplaintsGrid.innerHTML = '';

        if (complaints.length === 0) {
            resolvedComplaintsGrid.innerHTML = `
                <div class="no-complaints">
                    <p>No resolved complaints to display</p>
                </div>
            `;
            return;
        }

        complaints.forEach(complaint => {
            const card = document.createElement('div');
            card.className = 'complaint-card';
            card.innerHTML = `
                <h3>${complaint.type}</h3>
                <div class="complaint-meta">
                    <span>${complaint.date}</span>
                    <span>${complaint.location}</span>
                </div>
                <div class="complaint-description">
                    <p>${complaint.details.substring(0, 100)}${complaint.details.length > 100 ? '...' : ''}</p>
                </div>
                ${complaint.photo ? `<img src="${complaint.photo}" alt="Complaint photo" class="complaint-image">` : ''}
                <button class="action-btn view-btn" data-id="${complaint.id}" data-type="complaint">View Details</button>
            `;
            resolvedComplaintsGrid.appendChild(card);
        });

        resolvedComplaintsGrid.querySelectorAll('.view-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const itemId = parseInt(btn.dataset.id);
                showDetails(itemId, 'complaint');
            });
        });
    }

    // Modal and Detail Functions
    function showDetails(itemId, itemType) {
        const currentUser = getCurrentUser();
        if (!currentUser) return;

        let item;
        switch(itemType) {
            case 'complaint':
                item = complaints.find(c => c.id === itemId);
                break;
            case 'document':
                item = documents.find(d => d.id === itemId);
                break;
            case 'service':
                item = otherServices.find(s => s.id === itemId);
                break;
            default:
                alert('Invalid item type');
                return;
        }
        
        if (!item) {
            alert('Item not found');
            return;
        }

        if (modalTitle) modalTitle.textContent = `${itemType === 'complaint' ? item.type : 
                                itemType === 'document' ? item.documentType : 
                                item.serviceType} (ID: ${item.id})`;
        
        let modalContent = `
            <div class="item-detail">
                <h3>${itemType === 'complaint' ? 'Complaint Details' : 
                     itemType === 'document' ? 'Document Request Details' : 
                     'Service Details'}</h3>
                
                <div class="item-meta">
                    <div><strong>Submitted by:</strong> ${item.residentName}</div>
                    <div><strong>Date:</strong> ${item.date || item.dateRequested || item.dateSubmitted}</div>
        `;

        if (itemType === 'complaint') {
            modalContent += `
                    <div><strong>Location:</strong> ${item.location}</div>
                    <div><strong>Details:</strong> ${item.details}</div>
            `;
        } else if (itemType === 'document') {
            modalContent += `
                    <div><strong>Document Type:</strong> ${item.documentType}</div>
                    <div><strong>Purpose:</strong> ${item.purpose}</div>
                    ${item.notes ? `<div><strong>Notes:</strong> ${item.notes}</div>` : ''}
            `;
        } else if (itemType === 'service') {
            modalContent += `
                    <div><strong>Service Type:</strong> ${item.serviceType}</div>
                    <div><strong>Details:</strong> ${item.details}</div>
                    ${item.serviceType === 'Donation' ? `<div><strong>Donation Amount:</strong> PHP ${item.donationAmount}</div>` : ''}
            `;
        }

        modalContent += `
                    <div><strong>Status:</strong> <span class="status-badge status-${item.status.toLowerCase().replace(' ', '-')}">${item.status}</span></div>
        `;

        if (itemType === 'complaint') {
            modalContent += item.assignedStaff ? `<div><strong>Assigned Staff:</strong> ${item.assignedStaff}</div>` : '';
            modalContent += item.verifiedBy ? `<div><strong>Verified By:</strong> ${item.verifiedBy}</div>` : '';
            modalContent += item.resolutionNotes ? `
                <div class="admin-feedback">
                    <h3>Resolution Notes</h3>
                    <p>${item.resolutionNotes}</p>
                </div>
            ` : '';
        } else if (itemType === 'document') {
            modalContent += item.processedBy ? `<div><strong>Processed By:</strong> ${item.processedBy}</div>` : '';
            modalContent += item.dateProcessed ? `<div><strong>Date Processed:</strong> ${item.dateProcessed}</div>` : '';
            modalContent += item.verifiedBy ? `<div><strong>Verified By:</strong> ${item.verifiedBy}</div>` : '';
        } else if (itemType === 'service') {
            modalContent += item.verifiedBy ? `<div><strong>Verified By:</strong> ${item.verifiedBy}</div>` : '';
        }

        if (itemType === 'complaint' && item.photo) {
            modalContent += `
                <div class="complaint-photo">
                    <h3>Attached Photo</h3>
                    <img src="${item.photo}" alt="Complaint photo" style="max-width: 100%;">
                </div>
            `;
        }

        modalContent += `
                </div>
            </div>
        `;

        if (modalBody) modalBody.innerHTML = modalContent;
        updateModalActions(item, itemType, currentUser);
        if (modal) modal.style.display = 'block';
    }

    function updateModalActions(item, itemType, currentUser) {
        if (!modalActions) return;
        
        modalActions.innerHTML = '';
        
        if (!currentUser) return;

        modalActions.innerHTML += `
            <button class="action-btn print-btn" id="printDetailsBtn" data-id="${item.id}" data-type="${itemType}">Print Details</button>
        `;

        if (currentUser.role === 'staff' || currentUser.role === 'admin') {
            if (itemType === 'complaint') {
                if (item.status === 'Pending') {
                    modalActions.innerHTML += `
                        <button class="action-btn edit-btn" id="assignToMeBtn" data-id="${item.id}">Assign to Me</button>
                        <button class="action-btn edit-btn" id="startProgressBtn" data-id="${item.id}">Start Progress</button>
                    `;
                } else if (item.status === 'In Progress') {
                    modalActions.innerHTML += `
                        <button class="action-btn edit-btn" id="resolveBtn" data-id="${item.id}">Mark as Resolved</button>
                    `;
                }
                
                // Add verify button if not already verified
                if (!item.isVerified && item.status !== 'Pending') {
                    modalActions.innerHTML += `
                        <button class="action-btn edit-btn" id="verifyBtn" data-id="${item.id}" data-type="${itemType}">Verify</button>
                    `;
                }
            } else if (itemType === 'document') {
                if (item.status === 'Pending') {
                    modalActions.innerHTML += `
                        <button class="action-btn edit-btn" id="processDocumentBtn" data-id="${item.id}">Mark as Processing</button>
                    `;
                } else if (item.status === 'Processing') {
                    modalActions.innerHTML += `
                        <button class="action-btn edit-btn" id="readyDocumentBtn" data-id="${item.id}">Mark as Ready</button>
                    `;
                } else if (item.status === 'Ready for Pickup') {
                    modalActions.innerHTML += `
                        <button class="action-btn edit-btn" id="completeDocumentBtn" data-id="${item.id}">Mark as Completed</button>
                    `;
                }
                
                if (!item.isVerified && item.status !== 'Pending') {
                    modalActions.innerHTML += `
                        <button class="action-btn edit-btn" id="verifyBtn" data-id="${item.id}" data-type="${itemType}">Verify</button>
                    `;
                }
            } else if (itemType === 'service') {
                if (item.status === 'Received') {
                    modalActions.innerHTML += `
                        <button class="action-btn edit-btn" id="processServiceBtn" data-id="${item.id}">Mark as Processed</button>
                    `;
                }
                
                if (!item.isVerified) {
                    modalActions.innerHTML += `
                        <button class="action-btn edit-btn" id="verifyBtn" data-id="${item.id}" data-type="${itemType}">Verify</button>
                    `;
                }
            }
        }

        if (currentUser.role === 'admin') {
            modalActions.innerHTML += `
                <button class="action-btn delete-btn" id="deleteBtn" data-id="${item.id}" data-type="${itemType}">Delete</button>
            `;
        }

        document.getElementById('printDetailsBtn')?.addEventListener('click', () => printItemDetails(item, itemType));
        document.getElementById('assignToMeBtn')?.addEventListener('click', () => assignComplaintToMe(item.id));
        document.getElementById('startProgressBtn')?.addEventListener('click', () => updateComplaintStatus(item.id, 'In Progress'));
        document.getElementById('resolveBtn')?.addEventListener('click', () => {
            const resolutionNotes = prompt('Enter resolution notes:');
            if (resolutionNotes !== null) {
                updateComplaintStatus(item.id, 'Resolved', resolutionNotes);
            }
        });
        document.getElementById('processDocumentBtn')?.addEventListener('click', () => updateDocumentStatus(item.id, 'Processing'));
        document.getElementById('readyDocumentBtn')?.addEventListener('click', () => updateDocumentStatus(item.id, 'Ready for Pickup'));
        document.getElementById('completeDocumentBtn')?.addEventListener('click', () => updateDocumentStatus(item.id, 'Completed'));
        document.getElementById('processServiceBtn')?.addEventListener('click', () => updateServiceStatus(item.id, 'Processed'));
        document.getElementById('verifyBtn')?.addEventListener('click', () => verifyItem(item.id, itemType));
        document.getElementById('deleteBtn')?.addEventListener('click', () => deleteItem(item.id, itemType));
    }

    function assignComplaintToMe(complaintId) {
        const currentUser = getCurrentUser();
        const complaint = complaints.find(c => c.id === complaintId);
        
        if (complaint && currentUser) {
            complaint.assignedStaff = currentUser.name;
            complaint.status = 'In Progress';
            
            localStorage.setItem('complaints', JSON.stringify(complaints));
            
            updateAllViews();
            closeModal();
            alert('Complaint has been assigned to you and marked as In Progress');
        }
    }

    function verifyItem(itemId, itemType) {
        const currentUser = getCurrentUser();
        if (!currentUser || (currentUser.role !== 'admin' && currentUser.role !== 'staff')) {
            alert('Only staff or admin can verify items');
            return;
        }

        let item;
        let collection;
        
        switch(itemType) {
            case 'complaint':
                collection = complaints;
                item = complaints.find(c => c.id === itemId);
                if (item) {
                    item.verifiedBy = currentUser.name;
                    item.verifiedAt = new Date().toISOString().split('T')[0];
                    item.isVerified = true;
                    item.needsVerification = false;
                    localStorage.setItem('complaints', JSON.stringify(complaints));
                }
                break;
            case 'document':
                collection = documents;
                item = documents.find(d => d.id === itemId);
                if (item) {
                    item.verifiedBy = currentUser.name;
                    item.verifiedAt = new Date().toISOString().split('T')[0];
                    item.isVerified = true;
                    localStorage.setItem('documents', JSON.stringify(documents));
                }
                break;
            case 'service':
                collection = otherServices;
                item = otherServices.find(s => s.id === itemId);
                if (item) {
                    item.verifiedBy = currentUser.name;
                    item.verifiedAt = new Date().toISOString().split('T')[0];
                    item.isVerified = true;
                    localStorage.setItem('otherServices', JSON.stringify(otherServices));
                }
                break;
            default:
                alert('Invalid item type');
                return;
        }

        if (item) {
            updateAllViews();
            closeModal();
            alert('Item has been verified');
        }
    }

    function updateComplaintStatus(complaintId, status, resolutionNotes = '') {
        const complaint = complaints.find(c => c.id === complaintId);
        
        if (complaint) {
            complaint.status = status;
            if (resolutionNotes) {
                complaint.resolutionNotes = resolutionNotes;
            }
            localStorage.setItem('complaints', JSON.stringify(complaints));
            
            updateAllViews();
            closeModal();
            alert(`Complaint status updated to ${status}`);
        }
    }

    function updateDocumentStatus(documentId, status) {
        const document = documents.find(d => d.id === documentId);
        const currentUser = getCurrentUser();
        
        if (document && currentUser) {
            document.status = status;
            document.processedBy = currentUser.name;
            document.dateProcessed = new Date().toISOString().split('T')[0];
            localStorage.setItem('documents', JSON.stringify(documents));
            
            updateAllViews();
            closeModal();
            alert(`Document status updated to ${status}`);
        }
    }

    function updateServiceStatus(serviceId, status) {
        const service = otherServices.find(s => s.id === serviceId);
        const currentUser = getCurrentUser();
        
        if (service && currentUser) {
            service.status = status;
            localStorage.setItem('otherServices', JSON.stringify(otherServices));
            
            updateAllViews();
            closeModal();
            alert(`Service status updated to ${status}`);
        }
    }

    function closeModal() {
        if (modal) modal.style.display = 'none';
    }

    function deleteItem(itemId, itemType) {
        const currentUser = getCurrentUser();
        if (!currentUser || currentUser.role !== 'admin') {
            alert('Only admin can delete items');
            return;
        }
        
        if (confirm('Are you sure you want to delete this item?')) {
            let itemDeleted = false;
            
            switch(itemType) {
                case 'complaint':
                    complaints = complaints.filter(c => c.id !== itemId);
                    localStorage.setItem('complaints', JSON.stringify(complaints));
                    itemDeleted = true;
                    break;
                case 'document':
                    documents = documents.filter(d => d.id !== itemId);
                    localStorage.setItem('documents', JSON.stringify(documents));
                    itemDeleted = true;
                    break;
                case 'service':
                    otherServices = otherServices.filter(s => s.id !== itemId);
                    localStorage.setItem('otherServices', JSON.stringify(otherServices));
                    itemDeleted = true;
                    break;
                default:
                    alert('Invalid item type');
                    return;
            }
            
            if (itemDeleted) {
                updateAllViews();
                closeModal();
                alert('Item deleted successfully');
            }
        }
    }

    function printItemDetails(item, itemType) {
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>${itemType === 'complaint' ? 'Complaint' : 
                         itemType === 'document' ? 'Document Request' : 
                         'Service'} Details #${item.id}</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 20px; }
                    h1 { color: #166088; }
                    .item-info { margin-bottom: 20px; }
                    .status-badge { 
                        display: inline-block;
                        padding: 3px 8px;
                        border-radius: 3px;
                        font-size: 0.9em;
                        font-weight: bold;
                    }
                    .status-pending { background-color: #ffc107; color: black; }
                    .status-in-progress, .status-processing { background-color: #17a2b8; color: white; }
                    .status-resolved, .status-completed, .status-processed { background-color: #28a745; color: white; }
                    .status-ready-for-pickup { background-color: #6f42c1; color: white; }
                    .photo-container { margin-top: 20px; }
                    .photo-container img { max-width: 100%; }
                </style>
            </head>
            <body>
                <h1>${itemType === 'complaint' ? 'Complaint' : 
                    itemType === 'document' ? 'Document Request' : 
                    'Service'} Details #${item.id}</h1>
                <div class="item-info">
                    <p><strong>Type:</strong> ${item.type || item.documentType || item.serviceType}</p>
                    <p><strong>Submitted by:</strong> ${item.residentName}</p>
                    <p><strong>Date:</strong> ${item.date || item.dateRequested || item.dateSubmitted}</p>
                    <p><strong>Status:</strong> <span class="status-badge status-${item.status.toLowerCase().replace(' ', '-')}">${item.status}</span></p>
        `);

        if (itemType === 'complaint') {
            printWindow.document.write(`
                    <p><strong>Location:</strong> ${item.location}</p>
                    <p><strong>Details:</strong> ${item.details}</p>
                    ${item.assignedStaff ? `<p><strong>Assigned Staff:</strong> ${item.assignedStaff}</p>` : ''}
                    ${item.verifiedBy ? `<p><strong>Verified By:</strong> ${item.verifiedBy}</p>` : ''}
                    ${item.resolutionNotes ? `<div class="resolution-notes">
                        <h3>Resolution Notes</h3>
                        <p>${item.resolutionNotes}</p>
                    </div>` : ''}
            `);
        } else if (itemType === 'document') {
            printWindow.document.write(`
                    <p><strong>Purpose:</strong> ${item.purpose}</p>
                    ${item.notes ? `<p><strong>Notes:</strong> ${item.notes}</p>` : ''}
                    ${item.processedBy ? `<p><strong>Processed By:</strong> ${item.processedBy}</p>` : ''}
                    ${item.dateProcessed ? `<p><strong>Date Processed:</strong> ${item.dateProcessed}</p>` : ''}
                    ${item.verifiedBy ? `<p><strong>Verified By:</strong> ${item.verifiedBy}</p>` : ''}
            `);
        } else if (itemType === 'service') {
            printWindow.document.write(`
                    <p><strong>Details:</strong> ${item.details}</p>
                    ${item.serviceType === 'Donation' ? `<p><strong>Donation Amount:</strong> PHP ${item.donationAmount}</p>` : ''}
                    ${item.verifiedBy ? `<p><strong>Verified By:</strong> ${item.verifiedBy}</p>` : ''}
            `);
        }

        if (itemType === 'complaint' && item.photo) {
            printWindow.document.write(`
                <div class="photo-container">
                    <h3>Attached Photo</h3>
                    <img src="${item.photo}" alt="Complaint photo">
                </div>
            `);
        }

        printWindow.document.write(`
                </div>
                <script>
                    setTimeout(function() {
                        window.print();
                        window.close();
                    }, 500);
                </script>
            </body>
            </html>
        `);
        printWindow.document.close();
    }

    function generateReport() {
        const currentUser = getCurrentUser();
        if (!currentUser || (currentUser.role !== 'admin' && currentUser.role !== 'staff')) {
            alert('Only staff/admin can generate reports');
            return;
        }
        
        const currentDate = new Date().toLocaleDateString();
        const statusFilterValue = currentUser.role === 'admin' ? 
            (adminStatusFilter ? adminStatusFilter.value : 'all') : 
            (manageStatusFilter ? manageStatusFilter.value : 'all');
        const searchValue = currentUser.role === 'admin' ? 
            (adminSearchComplaints ? adminSearchComplaints.value.toLowerCase() : '') : 
            (searchComplaints ? searchComplaints.value.toLowerCase() : '');
        
        let filteredComplaints = [...complaints];
        
        if (statusFilterValue !== 'all') {
            filteredComplaints = filteredComplaints.filter(c => c.status === statusFilterValue);
        }
        
        if (searchValue) {
            filteredComplaints = filteredComplaints.filter(c => 
                c.type.toLowerCase().includes(searchValue) ||
                c.residentName.toLowerCase().includes(searchValue) ||
                c.location.toLowerCase().includes(searchValue)
            );
        }
        
        const reportWindow = window.open('', '_blank');
        reportWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Barangay Complaints Report</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 20px; }
                    h1 { color: #166088; text-align: center; }
                    .report-info { margin-bottom: 20px; text-align: center; }
                    table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                    th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                    th { background-color: #166088; color: white; }
                    .status-badge { padding: 3px 8px; border-radius: 3px; font-size: 0.8em; }
                    .status-pending { background-color: #ffc107; color: black; }
                    .status-in-progress { background-color: #17a2b8; color: white; }
                    .status-resolved { background-color: #28a745; color: white; }
                    .footer { margin-top: 30px; text-align: right; font-style: italic; }
                    @page { size: landscape; }
                </style>
            </head>
            <body>
                <h1>Barangay Complaints Report</h1>
                <div class="report-info">
                    <p>Generated on: ${currentDate}</p>
                    <p>Total Complaints: ${filteredComplaints.length}</p>
                    ${statusFilterValue !== 'all' ? `<p>Filtered by status: ${statusFilterValue}</p>` : ''}
                    ${searchValue ? `<p>Search term: "${searchValue}"</p>` : ''}
                </div>
                
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Type</th>
                            <th>Resident</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Location</th>
                            <th>Assigned Staff</th>
                            ${currentUser.role === 'admin' ? '<th>Verified By</th>' : ''}
                        </tr>
                    </thead>
                    <tbody>
                        ${filteredComplaints.map(c => `
                            <tr>
                                <td>${c.id}</td>
                                <td>${c.type}</td>
                                <td>${c.residentName}</td>
                                <td>${c.date}</td>
                                <td><span class="status-badge status-${c.status.toLowerCase().replace(' ', '-')}">${c.status}</span></td>
                                <td>${c.location}</td>
                                <td>${c.assignedStaff || 'Not assigned'}</td>
                                ${currentUser.role === 'admin' ? `<td>${c.verifiedBy || 'Not verified'}</td>` : ''}
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
                
                <div class="footer">
                    <p>Barangay Complaint & Request Management System</p>
                    <p>Generated by: ${currentUser.name} (${currentUser.role})</p>
                </div>
                
                <script>
                    setTimeout(function() {
                        window.print();
                        window.close();
                    }, 500);
                </script>
            </body>
            </html>
        `);
        reportWindow.document.close();
    }

    // Event Listeners Setup
    function setupEventListeners() {
        // Account type selection
        if (residentBtn) residentBtn.addEventListener('click', showResidentLogin);
        if (staffBtn) staffBtn.addEventListener('click', showStaffLogin);
        if (adminBtn) adminBtn.addEventListener('click', showAdminLogin);
        if (backToSelection) backToSelection.addEventListener('click', showAccountSelection);

        // Service selection
        if (complaintsBtn) complaintsBtn.addEventListener('click', showComplaintsSection);
        if (documentsBtn) documentsBtn.addEventListener('click', showDocumentsSection);
        if (othersBtn) othersBtn.addEventListener('click', showOthersSection);

        // Toggle password visibility
        if (togglePasswordLogin && passwordLogin) {
            togglePasswordLogin.addEventListener('click', () => 
                togglePasswordVisibility(passwordLogin, togglePasswordLogin));    
        }
        if (toggleStaffPassword && staffPassword) {
            toggleStaffPassword.addEventListener('click', () => 
                togglePasswordVisibility(staffPassword, toggleStaffPassword));
        }
        if (toggleAdminPassword && adminPassword) {
            toggleAdminPassword.addEventListener('click', () => 
                togglePasswordVisibility(adminPassword, toggleAdminPassword));
        }
        if (togglePasswordSignup && passwordSignup) {
            togglePasswordSignup.addEventListener('click', () => 
                togglePasswordVisibility(passwordSignup, togglePasswordSignup));
        }
        if (toggleConfirmPassword && confirmPassword) {
            toggleConfirmPassword.addEventListener('click', () => 
                togglePasswordVisibility(confirmPassword, toggleConfirmPassword));
        }

        // Form submissions
        if (loginForm) loginForm.addEventListener('submit', handleLogin);
        if (staffLoginForm) staffLoginForm.addEventListener('submit', handleLogin);
        if (adminLoginForm) adminLoginForm.addEventListener('submit', handleLogin);
        if (signupForm) signupForm.addEventListener('submit', handleSignup);
        const showSignup = document.getElementById('showSignup');
        if (showSignup) {
            showSignup.addEventListener('click', function(e) {
                e.preventDefault();
                if (loginPage) loginPage.style.display = 'none';
                if (signupPage) signupPage.style.display = 'flex';
            });
        }

        if (showLogin) {
            showLogin.addEventListener('click', function(e) {
                e.preventDefault();
                if (signupPage) signupPage.style.display = 'none';
                if (loginPage) loginPage.style.display = 'flex';
            });
        }

        if (complaintForm) complaintForm.addEventListener('submit', handleComplaintSubmit);
        if (documentRequestForm) documentRequestForm.addEventListener('submit', handleDocumentRequestSubmit);
        if (otherServicesForm) otherServicesForm.addEventListener('submit', handleOtherServicesSubmit);

        // Other event listeners
        if (logoutBtn) logoutBtn.addEventListener('click', logout);
        if (statusFilter) statusFilter.addEventListener('change', updateComplaintsTable);
        if (documentStatusFilter) documentStatusFilter.addEventListener('change', updateDocumentsTable);
        if (serviceTypeFilter) serviceTypeFilter.addEventListener('change', updateServicesTable);
        if (manageStatusFilter) manageStatusFilter.addEventListener('change', updateManageComplaintsTable);
        if (searchComplaints) searchComplaints.addEventListener('input', updateManageComplaintsTable);
        if (generateReportBtn) generateReportBtn.addEventListener('click', generateReport);
        if (adminGenerateReportBtn) adminGenerateReportBtn.addEventListener('click', generateReport);
        if (publicTypeFilter) publicTypeFilter.addEventListener('change', updateResolvedComplaintsGrid);
        if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
        if (backToServicesFromComplaints) backToServicesFromComplaints.addEventListener('click', showServiceSelection);
        if (backToServicesFromDocuments) backToServicesFromDocuments.addEventListener('click', showServiceSelection);
        if (backToServicesFromOthers) backToServicesFromOthers.addEventListener('click', showServiceSelection);
        if (manageComplaintsBtn) manageComplaintsBtn.addEventListener('click', showManageComplaintsSection);
        if (manageDocumentsBtn) manageDocumentsBtn.addEventListener('click', showManageDocumentsSection);
        if (manageOthersBtn) manageOthersBtn.addEventListener('click', showManageOthersSection);
        if (backToServicesFromManageComplaints) backToServicesFromManageComplaints.addEventListener('click', showStaffAdminServiceSelection);
        if (backToServicesFromManageDocuments) backToServicesFromManageDocuments.addEventListener('click', showStaffAdminServiceSelection);
        if (backToServicesFromManageOthers) backToServicesFromManageOthers.addEventListener('click', showStaffAdminServiceSelection);
        if (backToServicesFromAdminComplaints) backToServicesFromAdminComplaints.addEventListener('click', showStaffAdminServiceSelection);
        if (documentManageStatusFilter) documentManageStatusFilter.addEventListener('change', updateManageDocumentsTable);
        if (searchDocuments) searchDocuments.addEventListener('input', updateManageDocumentsTable);
        if (serviceManageTypeFilter) serviceManageTypeFilter.addEventListener('change', updateManageServicesTable);
        if (searchServices) searchServices.addEventListener('input', updateManageServicesTable);
        if (adminStatusFilter) adminStatusFilter.addEventListener('change', updateAdminComplaintsTable);
        if (adminSearchComplaints) adminSearchComplaints.addEventListener('input', updateAdminComplaintsTable);
        if (adminVerifiedStatusFilter) adminVerifiedStatusFilter.addEventListener('change', updateAdminVerifiedComplaintsTable);
        if (adminVerifiedSearch) adminVerifiedSearch.addEventListener('input', updateAdminVerifiedComplaintsTable);

        // Show/hide donation amount field based on service type
        if (serviceType) {
            serviceType.addEventListener('change', function() {
                if (donationAmountGroup) {
                    donationAmountGroup.style.display = this.value === 'Donation' ? 'block' : 'none';
                }
            });
        }

        // Caps lock detection
        [passwordLogin, staffPassword, adminPassword, passwordSignup, confirmPassword].forEach(input => {
            if (input) {
                input.addEventListener('keyup', function(e) {
                    const capsOn = e.getModifierState('CapsLock');
                    if (input === passwordLogin && capsWarningLogin) {
                        capsWarningLogin.style.display = capsOn ? 'flex' : 'none';
                    } else if (input === staffPassword && capsWarningStaff) {
                        capsWarningStaff.style.display = capsOn ? 'flex' : 'none';
                    } else if (input === adminPassword && capsWarningAdmin) {
                        capsWarningAdmin.style.display = capsOn ? 'flex' : 'none';
                    } else if (capsWarningSignup) {
                        capsWarningSignup.style.display = capsOn ? 'flex' : 'none';
                    }
                });
            }
        });

        // Close modal when clicking outside
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeModal();
            }
        });
    }

    // Initialize the application
    function init() {
        console.log("Initializing Barangay Complaint System...");
        try {
            // Load data from localStorage
            userAccounts = JSON.parse(localStorage.getItem('userAccounts')) || userAccounts;
            complaints = JSON.parse(localStorage.getItem('complaints')) || complaints;
            documents = JSON.parse(localStorage.getItem('documents')) || documents;
            otherServices = JSON.parse(localStorage.getItem('otherServices')) || otherServices;

            const currentUser = getCurrentUser();
            if (currentUser) {
                showDashboard(currentUser);
                // Refresh complaints every 30 seconds for staff/admin
                if (currentUser.role === 'staff' || currentUser.role === 'admin') {
                    setInterval(function() {
                        updateComplaintsTable();
                        updateManageComplaintsTable();
                        if (adminComplaintsList) updateAdminComplaintsTable();
                        if (adminVerifiedComplaintsList) updateAdminVerifiedComplaintsTable();
                    }, 30000);
                }
            } else {
                showLoginPage();
            }
            setupEventListeners();
            updateAllViews();
        } catch (error) {
            console.error("Initialization failed:", error);
            showLoginPage();
        }
    }
    // Start the application
    init();
});