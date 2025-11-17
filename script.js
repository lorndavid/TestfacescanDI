/* --------------------------- CONFIG & DOM --------------------------- */
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyM-9UZbpL8GW6agRejPVGalKcTQPIdmm5-Xa0BWnpgrJiqahHFIRSE0LKH7n15AjNQ/exec";

// Add these new variables at top of file
let isFirstLogin = false;
let tourSteps = [];
let currentTourStep = 0;
let isTourActive = false;

// Safe DOM element getter function
function getEl(id) {
    return document.getElementById(id);
}

// DOM refs with null checks
const video = getEl("video"),
    captureCanvas = getEl("capture-canvas"),
    photoPreview = getEl("photo-preview");
const uploadBtn = getEl("upload-btn"),
    retakeBtn = getEl("retake-btn"),
    cameraSection = getEl("camera-section");
const videoWrapper = getEl("video-wrapper"),
    faceStatus = getEl("face-status"),
    subtitle = getEl("subtitle");
const switchCameraBtn = getEl("switch-camera-btn"),
    backBtn = getEl("back-btn"),
    manualCaptureBtn = getEl("manual-capture-btn");

const modal = getEl("modal"),
    modalIcon = getEl("modal-icon"),
    modalMessage = getEl("modal-message"),
    modalButtons = getEl("modal-buttons");

const pageScan = getEl("page-scan"),
    pageRecords = getEl("page-records"),
    pageList = getEl("page-list"),
    pageStorage = getEl("page-storage"),
    pageProfile = getEl("page-profile"),
    pageAdmin = getEl("page-admin"),
    pageAnalytics = getEl("page-analytics");

const navScan = getEl("nav-scan"),
    navRecords = getEl("nav-records"),
    navList = getEl("nav-list"),
    navStorage = getEl("nav-storage"),
    navProfile = getEl("nav-profile"),
    navAdmin = getEl("nav-admin"),
    navAnalytics = getEl("nav-analytics"),
    navSettingsBtn = getEl("nav-settings-btn");

const sidebar = getEl("sidebar"),
    menuBtn = getEl("menu-btn"),
    sidebarBackdrop = getEl("sidebar-backdrop"),
    sidebarToggleBtn = getEl("sidebar-toggle-btn"),
    contentWrapper = getEl("content-wrapper");

const selectionArea = getEl("selection-area"),
    studentSearchInput = getEl("student-search-input"),
    studentList = getEl("student-list");

const recordsLoading = getEl("records-loading"),
    recordsTable = getEl("records-table"),
    recordsClassFilter = getEl("records-class-filter"),
    recordsSearchInput = getEl("records-search-input");

const listLoading = getEl("list-loading"),
    listTable = getEl("list-table"),
    listClassFilter = getEl("list-class-filter"),
    listSearchInput = getEl("list-search-input");

const listTotalCount = getEl("list-total-count");
const listCompletedCount = getEl("list-completed-count");
const listPendingCount = getEl("list-pending-count");

const loginScreen = getEl("login-screen"),
    mainAppWrapper = getEl("main-app-wrapper"),
    adminListLoader = getEl("admin-list-loader"),
    adminSelect = getEl("admin-select"),
    proceedToScanBtn = getEl("proceed-to-scan-btn"),
    adminSelectionArea = getEl("admin-selection-area"),
    adminScanArea = getEl("admin-scan-area"),
    adminVideoWrapper = getEl("admin-video-wrapper"),
    adminVideo = getEl("admin-video"),
    adminScanStatus = getEl("admin-scan-status"),
    adminManualScanBtn = getEl("admin-manual-scan-btn"),
    adminBackBtn = getEl("admin-back-btn");

const adminProfileImgHeader = getEl("admin-profile-img-header"),
    adminProfileSidebar = getEl("admin-profile-compact"),
    adminProfileImgSidebar = getEl("admin-profile-img-sidebar"),
    adminNameSidebar = getEl("admin-name-sidebar"),
    adminRoleSidebar = getEl("admin-role-sidebar");

const sidebarLogo = getEl("sidebar-logo");

const btnThemeToggle = getEl("btn-theme-toggle"),
    btnLang = getEl("btn-lang"),
    bgColorPicker = getEl("bg-color-picker"),
    faceScanToggleRow = getEl("face-scan-toggle-row"),
    faceScanEnabledCheckbox = getEl("face-scan-enabled");

const logoutBtn = getEl("logout-btn");

// profile page refs
const profileImgLarge = getEl("profile-img-large"),
    profileNameLarge = getEl("profile-name-large"),
    profileRoleLarge = getEl("profile-role-large"),
    profileTotalAll = getEl("profile-total-all"),
    profileTotalMy = getEl("profile-total-my"),
    profileImagesGrid = getEl("profile-images-grid"),
    profileImageFilter = getEl("profile-image-filter");

// Admin Panel Refs
const adminManagementList = getEl("admin-management-list");
const addAdminName = getEl("add-admin-name");
const addAdminImageUrl = getEl("add-admin-image-url");
const addAdminEmail = getEl("add-admin-email");
const addAdminRole = getEl("add-admin-role");
const addAdminBtn = getEl("add-admin-btn");

// Analytics Refs
const scansTodayEl = getEl("scans-today");
const activeUsersEl = getEl("active-users");
const completionRateEl = getEl("completion-rate");
const storageUsedEl = getEl("storage-used");
const weeklyActivityChart = getEl("weekly-activity-chart");
const classCompletionChart = getEl("class-completion-chart");

// Notification Toast Refs
const notificationToast = getEl("notification-toast");
const notificationIcon = getEl("notification-icon");
const notificationTitle = getEl("notification-title");
const notificationMessage = getEl("notification-message");
const notificationClose = getEl("notification-close");

// New Feature Refs
const voiceSearchBtn = getEl("voice-search-btn");
const batchScanBtn = getEl("batch-scan-btn");
const qrScanBtn = getEl("qr-scan-btn");
const exportListBtn = getEl("export-list-btn");
const exportRecordsBtn = getEl("export-records-btn");

// Voice Search Indicator
const voiceSearchIndicator = getEl("voice-search-indicator");

// Modal refs for new features
const welcomeModal = getEl("welcome-modal");
const welcomeAvatar = getEl("welcome-avatar");
const welcomeTitle = getEl("welcome-title");
const welcomeSubtitle = getEl("welcome-subtitle");
const welcomeName = getEl("welcome-name");
const welcomeRole = getEl("welcome-role");
const startTourBtn = getEl("start-tour-btn");
const skipTourBtn = getEl("skip-tour-btn");

const roleInfoModal = getEl("role-info-modal");
const roleBadgeText = getEl("role-badge-text");
const roleTitle = getEl("role-title");
const roleDescription = getEl("role-description");
const permissionList = getEl("permission-list");
const viewDashboardBtn = getEl("view-dashboard-btn");
const closeRoleBtn = getEl("close-role-btn");

const qrScannerModal = getEl("qr-scanner-modal");
const closeQrScannerBtn = getEl("close-qr-scanner");
const qrVideo = getEl("qr-video");

const batchScanModal = getEl("batch-scan-modal");
const closeBatchScanBtn = getEl("close-batch-scan");
const batchList = getEl("batch-list");
const selectedCountEl = getEl("selected-count");
const cancelBatchScanBtn = getEl("cancel-batch-scan");
const startBatchScanBtn = getEl("start-batch-scan");

const tourGuide = getEl("tour-guide");
const tourTitle = getEl("tour-title");
const tourContent = getEl("tour-content");
const tourSkip = getEl("tour-skip");
const tourNext = getEl("tour-next");

// state
const SESSION_KEY = "di_admin_session_v2";
let studentsData = [],
    savedRecordsData = [],
    allStudentsListData = [],
    adminData = [];
let currentStream,
    faceApiInterval,
    stableFrames = 0,
    currentFacingMode = "environment",
    selectedStudent = null,
    currentCameraMode = "auto";
let loggedInAdmin = null,
    adminFaceMatcher = null,
    adminScanInterval = null,
    isScanning = false,
    isUploading = false;
let settings = { theme: "light", lang: "KH", bgColor: "#ffffff" };
let isSidebarCollapsed = false;

// Voice recognition
let recognition = null;
let isListening = false;

// QR Scanner
let qrScanner = null;

// Batch scan data
let batchScanData = [];

// Analytics data
let analyticsData = {
    scansToday: 0,
    activeUsers: 0,
    completionRate: 0,
    storageUsed: 0,
    weeklyActivity: [],
    classCompletion: []
};

/* --------------------------- UTIL (modal) --------------------------- */
const icons = {
    success: `<svg class="w-full h-full text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
    error: `<svg class="w-full h-full text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
    loading: `<div class="w-16 h-16 border-4 border-slate-500 border-t-indigo-500 rounded-full animate-spin"></div>`,
    choice: `<svg class="w-full h-full text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m4 13-4-4M3 10h12M3 15h4M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1z"/></svg>`,
};

function showModal(type, message, actions = {}) {
    if (!modal || !modalIcon || !modalMessage || !modalButtons) return;
    
    modalIcon.innerHTML = icons[type] || "";
    modalMessage.textContent = message;
    modal.classList.remove("hidden");
    modalButtons.innerHTML = "";
    if (type === "loading") return;
    if (Object.keys(actions).length) {
        for (const [txt, action] of Object.entries(actions)) {
            const b = document.createElement("button");
            b.className = action.className || "w-full bg-slate-600 text-white py-2 rounded-lg font-semibold hover:bg-slate-700 transition";
            b.textContent = txt;
            b.onclick = () => {
                modal.classList.add("hidden");
                if (action.callback) action.callback();
            };
            modalButtons.appendChild(b);
        }
    } else {
        const b = document.createElement("button");
        b.className = "w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition";
        b.textContent = settings.lang === "KH" ? "យល់ព្រម" : "OK";
        b.onclick = () => modal.classList.add("hidden");
        modalButtons.appendChild(b);
    }
}

/* --------------------------- NOTIFICATION TOAST --------------------------- */
function showNotification(title, message, type = 'info') {
    if (!notificationToast || !notificationIcon || !notificationTitle || !notificationMessage) return;
    
    notificationTitle.textContent = title;
    notificationMessage.textContent = message;
    
    // Set icon based on type
    let iconHtml = '';
    switch(type) {
        case 'success':
            iconHtml = '<i class="fas fa-check-circle text-green-400"></i>';
            break;
        case 'error':
            iconHtml = '<i class="fas fa-exclamation-circle text-red-400"></i>';
            break;
        case 'warning':
            iconHtml = '<i class="fas fa-exclamation-triangle text-yellow-400"></i>';
            break;
        default:
            iconHtml = '<i class="fas fa-info-circle text-blue-400"></i>';
    }
    notificationIcon.innerHTML = iconHtml;
    
    // Show notification
    notificationToast.classList.add('show');
    
    // Auto hide after 5 seconds
    setTimeout(() => {
        if (notificationToast) {
            notificationToast.classList.remove('show');
        }
    }, 5000);
}

if (notificationClose) {
    notificationClose.addEventListener('click', () => {
        if (notificationToast) {
            notificationToast.classList.remove('show');
        }
    });
}

/* --------------------------- FACEAPI MODELS --------------------------- */
async function loadModels() {
    const MODEL_URL = "./models";
    await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
        faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
        faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
    ]);
}

/* --------------------------- VOICE RECOGNITION --------------------------- */
function initVoiceRecognition() {
    if (!voiceSearchBtn || !voiceSearchIndicator) return;
    
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = settings.lang === "KH" ? 'km-KH' : 'en-US';
        
        recognition.onstart = () => {
            isListening = true;
            voiceSearchIndicator.classList.add('active');
            showNotification('Voice Search', settings.lang === "KH" ? 'កំពុងស្តាប់...' : 'Listening...', 'info');
        };
        
        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            if (studentSearchInput) {
                studentSearchInput.value = transcript;
                populateStudentList(transcript);
            }
            isListening = false;
            voiceSearchIndicator.classList.remove('active');
            showNotification('Voice Search', settings.lang === "KH" ? `ស្វែងរក: ${transcript}` : `Search for: ${transcript}`, 'success');
        };
        
        recognition.onerror = (event) => {
            console.error('Speech recognition error:', event.error);
            isListening = false;
            voiceSearchIndicator.classList.remove('active');
            showNotification('Voice Search Error', settings.lang === "KH" ? 'សូមព្យាយាមម្ដងទៀត' : 'Please try again', 'error');
        };
        
        recognition.onend = () => {
            isListening = false;
            voiceSearchIndicator.classList.remove('active');
        };
        
        voiceSearchBtn.addEventListener('click', () => {
            if (recognition && !isListening) {
                recognition.start();
            }
        });
    } else {
        voiceSearchBtn.style.display = 'none';
        console.log('Speech recognition not supported');
    }
}

/* --------------------------- QR SCANNER --------------------------- */
function initQRScanner() {
    if (!qrScanBtn || !qrScannerModal || !qrVideo || !closeQrScannerBtn) return;
    
    qrScanBtn.addEventListener('click', () => {
        openQRScanner();
    });
    
    closeQrScannerBtn.addEventListener('click', () => {
        closeQRScanner();
    });
}

function openQRScanner() {
    if (!qrScannerModal || !qrVideo) return;
    
    qrScannerModal.classList.add('active');
    
    // Initialize QR scanner
    if (!qrScanner) {
        qrScanner = new QrScanner(
            qrVideo,
            result => {
                handleQRResult(result);
                closeQRScanner();
            },
            {
                highlightScanRegion: true,
                highlightCodeOutline: true,
            }
        );
    }
    
    qrScanner.start().catch(error => {
        console.error('Failed to start QR scanner:', error);
        showNotification('QR Scanner Error', settings.lang === "KH" ? 'បរាជ័យក្នុងការចាប់ផ្ដើមកាមេរ៉ា' : 'Failed to start camera', 'error');
        closeQRScanner();
    });
}

function closeQRScanner() {
    if (!qrScannerModal) return;
    
    qrScannerModal.classList.remove('active');
    
    if (qrScanner) {
        qrScanner.stop();
    }
}

function handleQRResult(result) {
    // Assuming QR code contains student ID
    const studentId = result.data;
    const student = studentsData.find(s => s[0] === studentId);
    
    if (student) {
        selectedStudent = student;
        closeQRScanner();
        showCameraModeSelection();
    } else {
        const message = settings.lang === "KH" 
            ? `រកមិនឃើញនិស្សិតដែលមាន ID ${studentId}` 
            : `Student with ID ${studentId} not found`;
        showNotification('QR Scan Result', message, 'error');
    }
}

/* --------------------------- BATCH SCAN --------------------------- */
function initBatchScan() {
    if (!batchScanBtn || !batchScanModal || !closeBatchScanBtn || 
        !batchList || !selectedCountEl || !cancelBatchScanBtn || !startBatchScanBtn) return;
    
    batchScanBtn.addEventListener('click', () => {
        openBatchScanModal();
    });
    
    closeBatchScanBtn.addEventListener('click', () => {
        closeBatchScanModal();
    });
    
    cancelBatchScanBtn.addEventListener('click', () => {
        closeBatchScanModal();
    });
    
    startBatchScanBtn.addEventListener('click', () => {
        startBatchScanning();
    });
}

function openBatchScanModal() {
    if (!batchScanModal || !batchList || !selectedCountEl || !startBatchScanBtn) return;
    
    batchScanModal.classList.add('active');
    populateBatchList();
}

function closeBatchScanModal() {
    if (!batchScanModal) return;
    
    batchScanModal.classList.remove('active');
    batchScanData = [];
}

function populateBatchList() {
    if (!batchList || !selectedCountEl || !startBatchScanBtn) return;
    
    batchList.innerHTML = '';
    
    const studentsWithoutPhotos = studentsData.filter(s => s[4] === 0);
    
    if (studentsWithoutPhotos.length === 0) {
        const message = settings.lang === "KH" 
            ? "និស្សិតទាំងអស់មានរូបភាពរួចហើយ!" 
            : "All students have photos!";
        batchList.innerHTML = `<div class="text-center text-slate-400 p-4">${message}</div>`;
        startBatchScanBtn.disabled = true;
        return;
    }
    
    studentsWithoutPhotos.forEach(student => {
        const item = document.createElement('div');
        item.className = 'batch-item';
        item.innerHTML = `
            <input type="checkbox" class="batch-checkbox" data-id="${student[0]}" data-name="${student[1]}">
            <div class="info">
                <div class="name">${student[1]}</div>
                <div class="id">ID: ${student[0]}</div>
            </div>
            <div class="status pending">Pending</div>
        `;
        batchList.appendChild(item);
    });
    
    // Add event listeners to checkboxes
    const checkboxes = document.querySelectorAll('.batch-checkbox');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateSelectedCount);
    });
    
    updateSelectedCount();
}

function updateSelectedCount() {
    if (!selectedCountEl || !startBatchScanBtn) return;
    
    const checkboxes = document.querySelectorAll('.batch-checkbox:checked');
    selectedCountEl.textContent = checkboxes.length;
    startBatchScanBtn.disabled = checkboxes.length === 0;
}

async function startBatchScanning() {
    // Get selected students
    const checkboxes = document.querySelectorAll('.batch-checkbox:checked');
    
    if (checkboxes.length === 0) {
        const message = settings.lang === "KH" 
            ? "សូមជ្រើសរើសនិស្សិតយ៉ាងហោចណាស់មួយ" 
            : "Please select at least one student";
        showNotification('Batch Scan', message, 'warning');
        return;
    }
    
    batchScanData = Array.from(checkboxes).map(cb => ({
        id: cb.dataset.id,
        name: cb.dataset.name,
        status: 'pending',
        photo: null
    }));
    
    closeBatchScanModal();
    
    // Start with first student
    processBatchStudent(0);
}

async function processBatchStudent(index) {
    if (index >= batchScanData.length) {
        // All students processed
        const completed = batchScanData.filter(s => s.status === 'completed').length;
        const message = settings.lang === "KH" 
            ? `ការស្កេនជាក្រុមបានបញ្ចប់! បានស្កេននិស្សិត ${completed} នាក់ដោយជោគជ័យ` 
            : `Batch Scan Complete! Successfully scanned ${completed} students`;
        showNotification('Batch Scan Complete', message, 'success');
        return;
    }
    
    const student = batchScanData[index];
    const studentData = studentsData.find(s => s[0] === student.id);
    
    if (!studentData) {
        student.status = 'error';
        processBatchStudent(index + 1);
        return;
    }
    
    selectedStudent = studentData;
    
    // Show current student info
    const message = settings.lang === "KH" 
        ? `កំពុងស្កេន: ${student.name}` 
        : `Now scanning: ${student.name}`;
    showNotification('Batch Scan', message, 'info');
    
    // Start camera for this student
    await startCamera("environment", "manual");
    
    // Override upload button to process next student
    if (uploadBtn) {
        uploadBtn.onclick = async () => {
            await uploadPhoto();
            
            // Mark as completed
            student.status = 'completed';
            
            // Move to next student
            processBatchStudent(index + 1);
        };
    }
}

/* --------------------------- EXPORT FUNCTIONALITY --------------------------- */
function initExportFunctions() {
    if (!exportListBtn || !exportRecordsBtn) return;
    
    exportListBtn.addEventListener('click', () => {
        exportData('list');
    });
    
    exportRecordsBtn.addEventListener('click', () => {
        exportData('records');
    });
}

function exportData(type) {
    let data, filename;
    
    if (type === 'list') {
        data = allStudentsListData.map(s => ({
            ID: s[0],
            Name: s[1],
            Class: s[2],
            Group: s[3],
            PhotoCount: s[4]
        }));
        filename = 'student_list.csv';
    } else if (type === 'records') {
        data = savedRecordsData.map(r => ({
            Serial: r[0],
            Name: r[1],
            ID: r[2],
            Class: r[3],
            Group: r[4],
            ImageURL: r[5]
        }));
        filename = 'saved_records.csv';
    }
    
    // Convert to CSV
    const csv = convertToCSV(data);
    
    // Create download link
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showNotification('Export Success', settings.lang === "KH" ? `ទិន្នន័យត្រូវបាននាំចេញទៅ ${filename}` : `Data exported to ${filename}`, 'success');
}

function convertToCSV(data) {
    if (!data || data.length === 0) return '';
    
    // Get headers
    const headers = Object.keys(data[0]);
    
    // Create CSV content
    const csvContent = [
        headers.join(','),
        ...data.map(row => 
            headers.map(header => {
                const value = row[header];
                // Escape commas and quotes
                if (typeof value === 'string' && (value.includes(',') || value.includes('"'))) {
                    return `"${value.replace(/"/g, '""')}"`;
                }
                return value;
            }).join(',')
        )
    ].join('\n');
    
    return csvContent;
}

/* --------------------------- TOUR GUIDE --------------------------- */
function initTourGuide() {
    if (!startTourBtn || !skipTourBtn || !tourSkip || !tourNext || !tourGuide || !tourTitle || !tourContent) return;
    
    // Define tour steps
    tourSteps = [
        {
            element: '#nav-scan',
            title: settings.lang === "KH" ? "ថតរូប" : "Scan Photos",
            content: settings.lang === "KH" 
                ? "នេះជាកន្លែងដែលអ្នកអាចថតរូបភាពនិស្សិតថ្មីៗ។ ជ្រើសរើសនិស្សិតហើយបន្ទាប់មកប្រើកាមេរ៉ាដើម្បីថតរូបភាពរបស់ពួកគេ។" 
                : "This is where you can capture new student photos. Select a student and then use the camera to take their photo.",
            position: 'bottom'
        },
        {
            element: '#nav-list',
            title: settings.lang === "KH" ? "បញ្ជីនិស្សិត" : "Student List",
            content: settings.lang === "KH" 
                ? "មើលបញ្ជីនិស្សិតទាំងអស់ និងត្រូវបានឬមិនទាន់បានថតរូបភាព។ អ្នកក៏អាចស្វែងរកនិងត្រង់បញ្ជីតាមថ្នាក់។" 
                : "View all students and see who has or hasn't had their photo taken. You can also search and filter the list by class.",
            position: 'bottom'
        },
        {
            element: '#nav-records',
            title: settings.lang === "KH" ? "រូបភាពដែលបានរក្សាទុក" : "Saved Photos",
            content: settings.lang === "KH" 
                ? "មើលរូបភាពដែលបានរក្សាទុកទាំងអស់។ អ្នកអាចលុបរូបភាពបានប្រសិនបើអ្នកមានសិទ្ធិ។" 
                : "View all saved photos. You can delete photos if you have the necessary permissions.",
            position: 'bottom'
        },
        {
            element: '#nav-analytics',
            title: settings.lang === "KH" ? "ការវិភាគ" : "Analytics",
            content: settings.lang === "KH" 
                ? "មើលស្ថិតិ និងរបាយការណ៍អំពីការប្រើប្រាស់ប្រព័ន្ធ។ រួមមានចំនួននិស្សិតដែលបានថត អត្រាការបញ្ចប់ និងច្រើនទៀត។" 
                : "View statistics and reports about system usage. Including number of students scanned, completion rates, and more.",
            position: 'bottom'
        },
        {
            element: '#student-search-input',
            title: settings.lang === "KH" ? "ស្វែងរកនិស្សិត" : "Search Students",
            content: settings.lang === "KH" 
                ? "ប្រើប្រអាដ្ឋាននេះដើម្បីស្វែងរកនិស្សិតតាមឈ្មោះ ឬលេខ ID។ អ្នកក៏អាចប្រើប៊ូតុងសំឡេងដើម្បីស្វែងរកដោយសំឡេង។" 
                : "Use this field to search for students by name or ID. You can also use the voice button to search by voice.",
            position: 'top'
        },
        {
            element: '#batch-scan-btn',
            title: settings.lang === "KH" ? "ការស្កេនជាក្រុម" : "Batch Scanning",
            content: settings.lang === "KH" 
                ? "បើកមុខងារស្កេនជាក្រុមដើម្បីដំណើរការនិស្សិតច្រើននាក់ក្នុងមួយសម័យ។ ជ្រើសរើសនិស្សិតដែលអ្នកចង់ថត ហើយប្រព័ន្ធនឹងណែនាំអ្នកតាមរយៈលំដាប់។" 
                : "Enable batch scanning to process multiple students in one session. Select the students you want to scan and the system will guide you through them sequentially.",
            position: 'top'
        },
        {
            element: '#qr-scan-btn',
            title: settings.lang === "KH" ? "ការស្កេន QR Code" : "QR Code Scanning",
            content: settings.lang === "KH" 
                ? "ប្រើកាមេរ៉ាដើម្បីស្កេន QR Codes ដែលមានព័ត៌មាននិស្សិត។ នេះជាវិធីរហ័សនិងងាយស្រួលក្នុងការកំណត់អត្តសញ្ញាណនិស្សិត។" 
                : "Use the camera to scan QR codes containing student information. This is a quick and easy way to identify students.",
            position: 'top'
        }
    ];
    
    // Add event listeners
    startTourBtn.addEventListener('click', startTour);
    skipTourBtn.addEventListener('click', () => {
        if (welcomeModal) {
            welcomeModal.classList.add("hidden");
        }
        showRoleInfoModal();
    });
    
    tourSkip.addEventListener('click', endTour);
    tourNext.addEventListener('click', nextTourStep);
}

function startTour() {
    if (!welcomeModal || !tourGuide) return;
    
    welcomeModal.classList.add("hidden");
    isTourActive = true;
    currentTourStep = 0;
    showTourStep();
}

function showTourStep() {
    if (!tourGuide || !tourTitle || !tourContent) return;
    
    if (currentTourStep >= tourSteps.length) {
        endTour();
        return;
    }
    
    const step = tourSteps[currentTourStep];
    const element = document.querySelector(step.element);
    
    if (!element) {
        nextTourStep();
        return;
    }
    
    // Position tour guide
    const rect = element.getBoundingClientRect();
    const guideWidth = 300; // Approximate width of tour guide
    const guideHeight = 200; // Approximate height of tour guide
    
    let top, left, arrowClass;
    
    switch (step.position) {
        case 'top':
            top = rect.top - guideHeight - 20;
            left = rect.left + (rect.width / 2) - (guideWidth / 2);
            arrowClass = 'bottom';
            break;
        case 'bottom':
            top = rect.bottom + 20;
            left = rect.left + (rect.width / 2) - (guideWidth / 2);
            arrowClass = 'top';
            break;
        case 'left':
            top = rect.top + (rect.height / 2) - (guideHeight / 2);
            left = rect.left - guideWidth - 20;
            arrowClass = 'right';
            break;
        case 'right':
            top = rect.top + (rect.height / 2) - (guideHeight / 2);
            left = rect.right + 20;
            arrowClass = 'left';
            break;
        default:
            top = rect.bottom + 20;
            left = rect.left + (rect.width / 2) - (guideWidth / 2);
            arrowClass = 'top';
    }
    
    // Adjust if out of bounds
    if (left < 10) left = 10;
    if (left + guideWidth > window.innerWidth - 10) left = window.innerWidth - guideWidth - 10;
    if (top < 10) top = 10;
    if (top + guideHeight > window.innerHeight - 10) top = window.innerHeight - guideHeight - 10;
    
    // Update tour guide content
    tourTitle.textContent = step.title;
    tourContent.textContent = step.content;
    
    // Update arrow
    const arrowElement = tourGuide.querySelector('.tour-guide-arrow');
    if (arrowElement) {
        arrowElement.className = `tour-guide-arrow ${arrowClass}`;
    }
    
    // Position and show tour guide
    tourGuide.style.top = `${top}px`;
    tourGuide.style.left = `${left}px`;
    tourGuide.classList.remove('hidden');
    
    // Highlight element
    element.classList.add('feature-highlight');
    
    // Update button text
    if (tourNext) {
        if (currentTourStep === tourSteps.length - 1) {
            tourNext.textContent = settings.lang === "KH" ? "បញ្ចប់" : "Finish";
        } else {
            tourNext.textContent = settings.lang === "KH" ? "បន្ទាប់" : "Next";
        }
    }
}

function nextTourStep() {
    // Remove highlight from current element
    const currentElement = document.querySelector(tourSteps[currentTourStep].element);
    if (currentElement) {
        currentElement.classList.remove('feature-highlight');
    }
    
    // Move to next step
    currentTourStep++;
    showTourStep();
}

function endTour() {
    if (!tourGuide) return;
    
    isTourActive = false;
    tourGuide.classList.add('hidden');
    
    // Remove all highlights
    tourSteps.forEach(step => {
        const element = document.querySelector(step.element);
        if (element) {
            element.classList.remove('feature-highlight');
        }
    });
    
    // Show role info modal
    showRoleInfoModal();
}

/* --------------------------- WELCOME & ROLE MODALS --------------------------- */
function showWelcomeModal() {
    if (!welcomeModal || !welcomeAvatar || !welcomeName || !welcomeRole || !welcomeTitle || !welcomeSubtitle) return;
    
    // Set welcome modal content
    welcomeAvatar.src = loggedInAdmin.imageUrl;
    welcomeName.textContent = loggedInAdmin.name;
    welcomeRole.textContent = loggedInAdmin.role || "admin";
    
    // Set language based on settings
    if (settings.lang === "KH") {
        welcomeTitle.textContent = "សូមស្វាគមន៍មកកាន់ប្រព័ន្ធស្កេនមុខ";
        welcomeSubtitle.textContent = "តើមានអ្វីជាមួយនឹងការណែនាំរយៈពេលខ្លី";
        
        // Update feature descriptions in Khmer
        const featureTitles = document.querySelectorAll('.welcome-feature-title');
        const featureDescriptions = document.querySelectorAll('.welcome-feature-description');
        
        if (featureTitles[0]) featureTitles[0].textContent = "ឈ្មោះ";
        if (featureTitles[1]) featureTitles[1].textContent = "តួនាទី";
        if (featureTitles[2]) featureTitles[2].textContent = "ការស្កេនមុខ";
        if (featureDescriptions[2]) featureDescriptions[2].textContent = "ថតរូបភាពនិស្សិតជាមួយនឹងការរកឃើញមុខដោយស្វ័យប្រវត្តិ";
        if (featureTitles[3]) featureTitles[3].textContent = "ការស្កេន QR Code";
        if (featureDescriptions[3]) featureDescriptions[3].textContent = "កំណត់អត្តសញ្ញាណនិស្សិតយ៉ាងរហ័សដោយប្រើ QR Code";
        if (featureTitles[4]) featureTitles[4].textContent = "ការស្កេនជាក្រុម";
        if (featureDescriptions[4]) featureDescriptions[4].textContent = "ដំណើរការនិស្សិតច្រើននាក់ក្នុងមួយសម័យ";
        if (featureTitles[5]) featureTitles[5].textContent = "ការវិភាគ";
        if (featureDescriptions[5]) featureDescriptions[5].textContent = "មើលស្ថិតិ និងរបាយការណ៍ដំណើរការ";
        
        // Update onboarding steps in Khmer
        const stepTitles = document.querySelectorAll('.onboarding-step-title');
        const stepDescriptions = document.querySelectorAll('.onboarding-step-description');
        
        if (stepTitles[0]) stepTitles[0].textContent = "ជ្រើសរើសនិស្សិត";
        if (stepDescriptions[0]) stepDescriptions[0].textContent = "ជ្រើសរើសនិស្សិតពីបញ្ជី ឬស្វែងរកតាមឈ្មោះ/ID";
        
        if (stepTitles[1]) stepTitles[1].textContent = "ថតរូបភាព";
        if (stepDescriptions[1]) stepDescriptions[1].textContent = "ប្រើការរកឃើញមុខដោយស្វ័យប្រវត្តិ ឬថតដោយដៃ";
        
        if (stepTitles[2]) stepTitles[2].textContent = "បញ្ជូន និងរក្សាទុក";
        if (stepDescriptions[2]) stepDescriptions[2].textContent = "បញ្ជាក់ និងបញ្ជូនរូបភាពទៅក្នុងប្រព័ន្ធ";
        
        // Update buttons in Khmer
        if (startTourBtn) startTourBtn.innerHTML = '<i class="fas fa-play"></i> ចាប់ផ្តើមការណែនាំអន្តរកម្ម';
        if (skipTourBtn) skipTourBtn.innerHTML = '<i class="fas fa-forward"></i> លំងាប់ការណែនាំ';
    } else {
        welcomeTitle.textContent = "Welcome to Employee Face Recognition System";
        welcomeSubtitle.textContent = "Would you like a quick tour?";
        
        // Update buttons in English
        if (startTourBtn) startTourBtn.innerHTML = '<i class="fas fa-play"></i> Start Interactive Tour';
        if (skipTourBtn) skipTourBtn.innerHTML = '<i class="fas fa-forward"></i> Skip Tour';
    }
    
    welcomeModal.classList.remove("hidden");
}

function showRoleInfoModal() {
    if (!roleInfoModal || !roleBadgeText || !roleTitle || !roleDescription || !permissionList) return;
    
    // Set role info modal content
    roleBadgeText.textContent = loggedInAdmin.role || "admin";
    roleTitle.textContent = `${loggedInAdmin.name} - ${loggedInAdmin.role || "admin"}`;
    
    // Set language based on settings
    if (settings.lang === "KH") {
        roleDescription.textContent = "នេះជាអ្វីដែលអ្នកអាចធ្វើបាននៅក្នុងប្រព័ន្ធ";
        
        // Update button text in Khmer
        if (viewDashboardBtn) viewDashboardBtn.innerHTML = '<i class="fas fa-tachometer-alt"></i> ទៅកាន់ផ្ទាំងគ្រប់គ្រង';
        if (closeRoleBtn) closeRoleBtn.innerHTML = '<i class="fas fa-times"></i> បិទ';
    } else {
        roleDescription.textContent = "Here's what you can do in the system";
        
        // Update button text in English
        if (viewDashboardBtn) viewDashboardBtn.innerHTML = '<i class="fas fa-tachometer-alt"></i> Go to Dashboard';
        if (closeRoleBtn) closeRoleBtn.innerHTML = '<i class="fas fa-times"></i> Close';
    }
    
    // Set permissions based on role
    permissionList.innerHTML = "";
    const permissions = getRolePermissions(loggedInAdmin.role || "admin");
    
    permissions.forEach(permission => {
        const li = document.createElement("li");
        li.className = "permission-item";
        li.innerHTML = `
            <i class="fas ${permission.icon} permission-icon"></i>
            <span class="permission-text">${permission.text}</span>
        `;
        permissionList.appendChild(li);
    });
    
    roleInfoModal.classList.remove("hidden");
}

function getRolePermissions(role) {
    const permissions = {
        viewer: [
            { icon: "fa-eye", text: settings.lang === "KH" ? "មើលទិន្នន័យនិស្សិត" : "View employee data" },
            { icon: "fa-eye", text: settings.lang === "KH" ? "មើលរូបភាពដែលបានរក្សាទុក" : "View saved photos" },
            { icon: "fa-eye", text: settings.lang === "KH" ? "មើលការវិភាគ" : "View analytics" }
        ],
        subadmin: [
            { icon: "fa-camera", text: settings.lang === "KH" ? "ថតរូបភាពនិស្សិត" : "Capture employee photos" },
            { icon: "fa-eye", text: settings.lang === "KH" ? "មើលទិន្នន័យនិស្សិត" : "View employee data" },
            { icon: "fa-eye", text: settings.lang === "KH" ? "មើលរូបភាពដែលបានរក្សាទុក" : "View saved photos" },
            { icon: "fa-eye", text: settings.lang === "KH" ? "មើលការវិភាគ" : "View analytics" },
            { icon: "fa-download", text: settings.lang === "KH" ? "នាំចេញទិន្នន័យ" : "Export data" }
        ],
        admin: [
            { icon: "fa-camera", text: settings.lang === "KH" ? "ថតរូបភាពនិស្សិត" : "Capture employee photos" },
            { icon: "fa-trash", text: settings.lang === "KH" ? "លុបរូបភាព" : "Delete photos" },
            { icon: "fa-eye", text: settings.lang === "KH" ? "មើលទិន្នន័យនិស្សិត" : "View employee data" },
            { icon: "fa-eye", text: settings.lang === "KH" ? "មើលរូបភាពដែលបានរក្សាទុក" : "View saved photos" },
            { icon: "fa-eye", text: settings.lang === "KH" ? "មើលការវិភាគ" : "View analytics" },
            { icon: "fa-download", text: settings.lang === "KH" ? "នាំចេញទិន្នន័យ" : "Export data" },
            { icon: "fa-qrcode", text: settings.lang === "KH" ? "ស្កេន QR Code" : "Scan QR codes" },
            { icon: "fa-layer-group", text: settings.lang === "KH" ? "ស្កេនជាក្រុម" : "Batch scanning" }
        ],
        superadmin: [
            { icon: "fa-camera", text: settings.lang === "KH" ? "ថតរូបភាពនិស្សិត" : "Capture employee photos" },
            { icon: "fa-trash", text: settings.lang === "KH" ? "លុបរូបភាព" : "Delete photos" },
            { icon: "fa-eye", text: settings.lang === "KH" ? "មើលទិន្នន័យនិស្សិត" : "View employee data" },
            { icon: "fa-eye", text: settings.lang === "KH" ? "មើលរូបភាពដែលបានរក្សាទុក" : "View saved photos" },
            { icon: "fa-eye", text: settings.lang === "KH" ? "មើលការវិភាគ" : "View analytics" },
            { icon: "fa-download", text: settings.lang === "KH" ? "នាំចេញទិន្នន័យ" : "Export data" },
            { icon: "fa-qrcode", text: settings.lang === "KH" ? "ស្កេន QR Code" : "Scan QR codes" },
            { icon: "fa-layer-group", text: settings.lang === "KH" ? "ស្កេនជាក្រុម" : "Batch scanning" },
            { icon: "fa-users-cog", text: settings.lang === "KH" ? "គ្រប់គ្រងគណនីអ្នកគ្រប់គ្រង" : "Manage admin accounts" },
            { icon: "fa-cog", text: settings.lang === "KH" ? "កែប្រែការកំណត់ប្រព័ន្ធ" : "Change system settings" }
        ]
    };
    
    return permissions[role] || permissions.viewer;
}

// Update the event listeners for the modal buttons
if (viewDashboardBtn) {
    viewDashboardBtn.addEventListener('click', () => {
        if (roleInfoModal) roleInfoModal.classList.add("hidden");
        // Default to scan page
        navLinksDeactivate();
        hideAllPages();
        if (navScan) navScan.classList.add('active');
        if (pageScan) pageScan.classList.remove('hidden');
    });
}

if (closeRoleBtn) {
    closeRoleBtn.addEventListener('click', () => {
        if (roleInfoModal) roleInfoModal.classList.add("hidden");
        // Default to scan page
        navLinksDeactivate();
        hideAllPages();
        if (navScan) navScan.classList.add('active');
        if (pageScan) pageScan.classList.remove('hidden');
    });
}

/* --------------------------- ADMIN FETCH & SESSIONS --------------------------- */
async function fetchAdmins() {
    try {
        const res = await fetch(`${SCRIPT_URL}?action=getAdmins`);
        if (!res.ok) throw new Error(`Server error: ${res.status}`);
        const data = await res.json();
        
        adminData = [];
        if (Array.isArray(data)) {
            adminData = data.map(r => ({
                name: r[0] || '',
                imageUrl: r[1] || '',
                role: r[2] || 'admin',
                faceScan: r[3] === false ? false : true,
                disabled: r[3] === true || String(r[3]).toLowerCase() === 'true'
            })).filter(a => a.name && a.imageUrl);
        }
        if (!adminData.length) throw new Error("No admin data found.");
        
        // Only populate login select if we are on the login screen
        if (adminSelect) {
            populateAdminSelect();
        }
    } catch (e) {
        console.error("Failed to fetch admins:", e);
        if(loginScreen && loginScreen.style.display !== 'none') {
            showModal('error', `Could not fetch admin list: ${e.message}`);
            if (adminListLoader) adminListLoader.classList.add('hidden');
        }
    }
}

function populateAdminSelect() {
    if (!adminSelect) return;
    
    adminSelect.innerHTML = '<option value="">-- សូមជ្រើសរើសឈ្មោះ --</option>';
    adminData.forEach((a, i) => {
        const opt = document.createElement("option");
        opt.value = i;
        opt.textContent = a.name;
        adminSelect.appendChild(opt);
    });
    if (adminListLoader) adminListLoader.classList.add("hidden");
    adminSelect.classList.remove("hidden");
}

function saveAdminSession({ name, imageUrl, role, faceScan, hasLoggedInBefore }) {
    try {
        localStorage.setItem(
            SESSION_KEY,
            JSON.stringify({ name, imageUrl, role, faceScan, hasLoggedInBefore, ts: Date.now() })
        );
    } catch (e) {}
}

function loadAdminSession() {
    try {
        const r = localStorage.getItem(SESSION_KEY);
        return r ? JSON.parse(r) : null;
    } catch (e) {
        return null;
    }
}

function clearAdminSession() {
    try {
        localStorage.removeItem(SESSION_KEY);
    } catch (e) {}
}

if (adminSelect) {
    adminSelect.onchange = () => {
        if (proceedToScanBtn) {
            proceedToScanBtn.classList.toggle("hidden", !adminSelect.value);
        }
    };
}

if (proceedToScanBtn) {
    proceedToScanBtn.onclick = () => {
        const idx = adminSelect.value;
        if (idx === "") return;
        loggedInAdmin = adminData[idx];
        
        // Check if account is disabled
        if (loggedInAdmin.disabled) {
            showModal('error', settings.lang === "KH" ? 'គណនីរបស់អ្នកត្រូវបានទប់ស្កាត់។ សូមទាក់ទង superadmin។' : 'Your account is disabled. Please contact a superadmin.');
            return;
        }

        if (adminSelectionArea) adminSelectionArea.classList.add("hidden");
        if (adminScanArea) adminScanArea.classList.remove("hidden");
        if (adminScanStatus) adminScanStatus.textContent = settings.lang === "KH" ? "កំពុងចាប់ផ្តើមកាមេរ៉ា..." : "Starting camera...";
        startAdminLoginScan();
    };
}

async function startAdminLoginScan() {
    if (!adminScanStatus || !adminVideoWrapper) return;
    
    adminScanStatus.textContent = settings.lang === "KH" 
        ? `កំពុងផ្ទុកឯកសារយោងសម្រាប់ ${loggedInAdmin.name}...` 
        : `Loading reference for ${loggedInAdmin.name}...`;
    adminFaceMatcher = await createFaceMatcher(
        loggedInAdmin.imageUrl,
        loggedInAdmin.name
    );
    if (!adminFaceMatcher) {
        adminScanStatus.textContent = settings.lang === "KH" 
            ? "មិនអាចផ្ទុករូបភាពយោង។ សូមត្រឡប់ក្រោយ។" 
            : "Could not load reference image. Please go back.";
        adminVideoWrapper.classList.add("fail");
        return;
    }
    try {
        // Admin login uses front camera by default
        const stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: "user", width: 640, height: 480 },
        });
        currentStream = stream;
        if (adminVideo) {
            adminVideo.srcObject = stream;
            adminVideo.onloadedmetadata = () => {
                adminScanStatus.textContent = settings.lang === "KH" 
                    ? "សូមមើលកាមេរ៉ា។ កំពុងស្កេនដោយស្វ័យប្រវត្តិ..." 
                    : "Look at the camera. Auto-scanning...";
                adminVideoWrapper.classList.add("ready");
                startAdminScanInterval();
            };
        }
    } catch (err) {
        showModal("error", settings.lang === "KH" ? "សូមអនុញ្ញាតឱ្យចូលដំណើរការកាមេរ៉ា។" : "Please allow camera access.");
        resetToAdminSelection();
    }
}

async function createFaceMatcher(imageUrl, label) {
    try {
        const img = await faceapi.fetchImage(imageUrl);
        const det = await faceapi
            .detectSingleFace(img, new faceapi.TinyFaceDetectorOptions())
            .withFaceLandmarks()
            .withFaceDescriptor();
        if (!det) return null;
        const desc = new faceapi.LabeledFaceDescriptors(label, [
            det.descriptor,
        ]);
        return new faceapi.FaceMatcher(desc, 0.5);
    } catch (e) {
        console.error(e);
        if (adminScanStatus) {
            adminScanStatus.innerHTML = settings.lang === "KH" 
                ? "កំហុសក្នុងការផ្ទុករូបភាពយោង (ពិនិត្យ CORS)។" 
                : "Error loading reference image (check CORS).";
        }
        return null;
    }
}

function startAdminScanInterval() {
    clearInterval(adminScanInterval);
    isScanning = true;
    adminScanInterval = setInterval(async () => {
        if (!isScanning) return;
        const ok = await performAdminScan();
        if (ok) onLoginSuccess();
    }, 1000);
}

async function performAdminScan() {
    if (!adminFaceMatcher || !adminVideo) return false;
    const det = await faceapi
        .detectSingleFace(
            adminVideo,
            new faceapi.TinyFaceDetectorOptions({
                inputSize: 224,
                scoreThreshold: 0.5,
            })
        )
        .withFaceLandmarks()
        .withFaceDescriptor();
    if (det) {
        const best = adminFaceMatcher.findBestMatch(det.descriptor);
        if (best.label !== "unknown" && best.distance < 0.5) {
            if (adminScanStatus) {
                adminScanStatus.textContent = settings.lang === "KH" 
                    ? `សូមស្វាគមន៍, ${best.label}!` 
                    : `Welcome, ${best.label}!`;
            }
            if (adminVideoWrapper) {
                adminVideoWrapper.classList.remove("fail");
                adminVideoWrapper.classList.add("ready");
            }
            return true;
        } else {
            if (adminScanStatus) {
                adminScanStatus.textContent = settings.lang === "KH" 
                    ? "មុខមិនត្រូវគ្នា។ កំពុងព្យាយាម..." 
                    : "Face does not match. Trying...";
            }
            if (adminVideoWrapper) {
                adminVideoWrapper.classList.add("fail");
            }
            return false;
        }
    } else {
        if (adminScanStatus) {
            adminScanStatus.textContent = settings.lang === "KH" 
                ? "រកមិនឃើញមុខ។ សូមដាក់មុខអ្នកនៅកណ្តាល។" 
                : "No face detected. Please center your face.";
        }
        if (adminVideoWrapper) {
            adminVideoWrapper.classList.remove("fail");
        }
        return false;
    }
}

if (adminManualScanBtn) {
    adminManualScanBtn.onclick = async () => {
        if (isScanning) clearInterval(adminScanInterval);
        isScanning = false;
        if (adminScanStatus) {
            adminScanStatus.textContent = settings.lang === "KH" ? "កំពុងស្កេនដោយដៃ..." : "Manual scan... processing...";
        }
        const ok = await performAdminScan();
        if (ok) onLoginSuccess();
        else {
            if (adminScanStatus) {
                adminScanStatus.textContent = settings.lang === "KH" 
                    ? "ការស្កេនដោយដៃបរាជ័យ។ កំពុងបន្តការស្កេនដោយស្វ័យប្រវត្តិ..." 
                    : "Manual scan failed. Resuming auto-scan...";
            }
            setTimeout(() => {
                if (!isScanning) startAdminScanInterval();
            }, 2000);
        }
    };
}

function resetToAdminSelection() {
    stopCamera();
    if (adminScanArea) adminScanArea.classList.add("hidden");
    if (adminSelectionArea) adminSelectionArea.classList.remove("hidden");
    if (adminVideoWrapper) adminVideoWrapper.classList.remove("ready", "fail");
    if (adminSelect) adminSelect.value = "";
    if (proceedToScanBtn) proceedToScanBtn.classList.add("hidden");
    loggedInAdmin = null;
    adminFaceMatcher = null;
    clearInterval(adminScanInterval);
}

if (adminBackBtn) {
    adminBackBtn.onclick = resetToAdminSelection;
}

// Update the onLoginSuccess function to handle first-time login
async function onLoginSuccess() {
    clearInterval(adminScanInterval);
    stopCamera();
    
    // Find the full admin object, in case one from login was partial
    const adminObject = adminData.find(a => a.name === loggedInAdmin.name);
    if (adminObject) {
        loggedInAdmin = adminObject;
    }

    // Check if this is first time login
    const sessionData = loadAdminSession();
    isFirstLogin = !sessionData || !sessionData.hasLoggedInBefore;
    
    // persist session
    saveAdminSession({
        name: loggedInAdmin.name,
        imageUrl: loggedInAdmin.imageUrl,
        role: loggedInAdmin.role || "admin",
        faceScan: loggedInAdmin.faceScan,
        hasLoggedInBefore: true
    });
    
    // set profile UI
    if (adminProfileImgHeader) {
        adminProfileImgHeader.crossOrigin = "anonymous";
        adminProfileImgHeader.src = loggedInAdmin.imageUrl;
        adminProfileImgHeader.classList.remove("hidden");
    }
    if (adminProfileSidebar) {
        adminProfileSidebar.crossOrigin = "anonymous";
        adminProfileSidebar.src = loggedInAdmin.imageUrl;
        adminProfileSidebar.classList.remove("hidden");
    }
    if (adminNameSidebar) adminNameSidebar.textContent = loggedInAdmin.name;
    if (adminRoleSidebar) adminRoleSidebar.textContent = loggedInAdmin.role || "admin";
    
    // remove login screen permanently
    if (loginScreen) {
        loginScreen.classList.add("hidden");
        if (loginScreen.parentNode)
            loginScreen.parentNode.removeChild(loginScreen);
    }
    if (mainAppWrapper) mainAppWrapper.classList.remove("hidden");
    
    // Show appropriate modal based on first-time login
    if (isFirstLogin) {
        showWelcomeModal();
    } else {
        showRoleInfoModal();
    }
    
    // apply settings UI (face-scan toggle visible only for superadmin)
    setupSettingsUI();
    
    // Fetch data in background
    Promise.all([
        fetchStudents(),
        displaySavedRecords(),
        fetchAllSavedRecordsForStats(),
    ]).then(updateProfileSummary);
}

// Updated Click Handlers for new sidebar
if (logoutBtn) {
    logoutBtn.onclick = (e) => {
        e.preventDefault();
        clearAdminSession();
        location.reload();
    };
}

if (sidebarLogo) {
    sidebarLogo.onclick = () => openProfilePage();
}
if (adminProfileImgHeader) {
    adminProfileImgHeader.onclick = () => openProfilePage();
}
if (adminProfileSidebar) {
    adminProfileSidebar.onclick = () => openProfilePage();
}

if (navProfile) {
    navProfile.onclick = (e) => {
        e.preventDefault();
        openProfilePage();
    };
}

if (navSettingsBtn) {
    navSettingsBtn.onclick = (e) => {
        e.preventDefault();
        navLinksDeactivate();
        hideAllPages();
        if (navAdmin) navAdmin.classList.add('active');
        if (pageAdmin) pageAdmin.classList.remove('hidden');
        stopCamera();
        closeSidebar();
        
        // Load admin list when opening panel
        populateAdminManagementList();
    };
}

/* --------------------------- STUDENTS & RECORDS --------------------------- */
async function fetchStudents() {
    try {
        const res = await fetch(`${SCRIPT_URL}?action=getStudents`);
        if (!res.ok) throw new Error(`Server error: ${res.status}`);
        const data = await res.json();
        studentsData = data.slice(1) || [];
        studentsData = studentsData.filter((s) => {
            const g = (s[3] || "").toString().trim();
            return g !== "បុគ្គលិក";
        });
        allStudentsListData = studentsData;
        populateStudentList();
    } catch (e) {
        showModal("error", settings.lang === "KH" ? `មិនអាចទាញយកទិន្នន័យនិស្សិត: ${e.message}` : `Could not fetch student data: ${e.message}`);
    }
}

function populateStudentList(filter = "") {
    if (!studentList) return;
    
    studentList.innerHTML = "";
    const f = filter.toLowerCase();
    const filtered = studentsData.filter(
        (s) =>
            (s[0] || "").toString().toLowerCase().includes(f) ||
            (s[1] || "").toLowerCase().includes(f)
    );
    if (!filtered.length) {
        studentList.innerHTML = `<li class="text-center text-slate-400 p-4">${settings.lang === "KH" ? "រកមិនឃើញនិស្សិត" : "No students found"}</li>`;
        return;
    }
    filtered.forEach((s) => {
        const li = document.createElement("li");
        li.className = "p-3 rounded-lg cursor-pointer transition flex justify-between items-center";
        const count = s[4];
        if (count > 0) li.classList.add("completed");
        const indicator = count > 0 ? `<i class="fas fa-check-circle ml-2 text-green-400"></i>` : "";
        if (count > 0) {
            li.style.pointerEvents = "none";
            li.style.opacity = ".7";
            li.style.color = "#4ade80";
        } else {
            // permission: viewer cannot capture
            if (loggedInAdmin && loggedInAdmin.role === "viewer") {
                li.classList.add("opacity-60");
                li.title = settings.lang === "KH" ? "គណនីមើលតែប៉ុណ្ណោះ" : "View only account";
            } else {
                li.onclick = () => {
                    selectedStudent = s;
                    showCameraModeSelection();
                };
            }
        }
        li.innerHTML = `<span>${s[0]} - ${s[1]}</span>${indicator}`;
        studentList.appendChild(li);
    });
}

function showCameraModeSelection() {
    // if face-scan disabled for this device
    if (loggedInAdmin && loggedInAdmin.faceScan === false) {
        showModal("error", settings.lang === "KH" ? "ការស្កេនមុខត្រូវបានបិទសម្រាប់គណនីនេះ។" : "Face-scan is disabled for this account.");
        return;
    }
    showModal(
        "choice",
        settings.lang === "KH" ? "សូមជ្រើសរើសប្រតិប្តិកាមេរ៉ា" : "Select camera mode",
        {
            [settings.lang === "KH" ? "ថតរូបស្វ័យប្រវត្តិ" : "Auto Capture"]: {
                callback: () => startCamera("environment", "auto"),
                className: "w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition",
            },
            [settings.lang === "KH" ? "ថតរូបដោយខ្លួនឯង" : "Manual Capture"]: {
                callback: () => startCamera("environment", "manual"),
                className: "w-full bg-slate-600 text-white py-3 rounded-lg font-semibold hover:bg-slate-700 transition",
            },
        }
    );
}

async function displaySavedRecords() {
    if (!recordsLoading || !recordsTable) return;
    
    recordsLoading.style.display = "block";
    recordsTable.classList.add("hidden");
    try {
        const res = await fetch(`${SCRIPT_URL}?action=getSavedData`);
        if (!res.ok) throw new Error(`Server error: ${res.status}`);
        const data = await res.json();
        savedRecordsData = data.slice(1) || [];
        savedRecordsData = savedRecordsData.filter((r) => {
            const grp = (r[4] || "").toString().trim();
            return grp !== "បុគ្គលិក";
        });
        populateClassFilter(savedRecordsData, recordsClassFilter);
        filterRecordsTable();
        recordsLoading.style.display = "none";
        recordsTable.classList.remove("hidden");
    } catch (e) {
        recordsLoading.innerHTML = `<p class="text-red-400">${settings.lang === "KH" ? "កំហុស" : "Error"}: ${e.message}</p>`;
    }
}

function populateClassFilter(records, filterElement) {
    if (!filterElement) return;
    
    const classes = [
        ...new Set(
            records
                .filter((r) => (r[4] || "").toString().trim() !== "បុគ្គលិក")
                .map((r) => r[3])
                .filter(Boolean)
        ),
    ];
    filterElement.innerHTML = `<option value="all">${settings.lang === "KH" ? "ថ្នាក់ទាំងអស់" : "All Classes"}</option>`;
    classes
        .sort()
        .forEach(
            (c) => (filterElement.innerHTML += `<option value="${c}">${c}</option>`)
        );
}

function filterRecordsTable() {
    if (!recordsTable) return;
    
    const sel = recordsClassFilter ? recordsClassFilter.value : "all";
    const q = recordsSearchInput ? recordsSearchInput.value.toLowerCase() : "";
    const tbody = recordsTable.querySelector("tbody");
    if (!tbody) return;
    
    tbody.innerHTML = "";
    const rows = savedRecordsData.filter((r) => {
        const cOk = sel === "all" || r[3] === sel;
        const sOk =
            (r[1] || "").toLowerCase().includes(q) ||
            (r[2] || "").toString().toLowerCase().includes(q);
        return cOk && sOk;
    });
    if (!rows.length) {
        tbody.innerHTML = `<tr><td colspan="7" class="text-center p-4 text-slate-400">${settings.lang === "KH" ? "រកមិនឃើញកំណត់ត្រា" : "No records found"}</td></tr>`;
        return;
    }
    rows.forEach((r) => {
        const serial = r[0],
            url = r[5];
        const tr = document.createElement("tr");
        tr.className = "border-b border-slate-700";
        tr.innerHTML = `<td class="p-3">${serial}</td><td class="p-3 whitespace-nowrap">${r[1]}</td><td class="p-3">${r[2]}</td><td class="p-3">${r[3]}</td><td class="p-3">${r[4]}</td><td class="p-3"><a href="${url}" target="_blank" rel="noopener noreferrer" class="relative block w-16 h-16 group rounded-lg overflow-hidden"><img src="${url}" crossorigin="anonymous" class="w-full h-full object-cover" alt="${settings.lang === "KH" ? "រូបភាពនិស្សិត" : "Employee photo"}></a></td><td class="p-3 text-center">${renderRecordControls(serial, url)}</td>`;
        tbody.appendChild(tr);
    });
}

function renderRecordControls(serial, url) {
    // permission: only admin and superadmin can delete
    if (!loggedInAdmin) return "-";
    const role = loggedInAdmin.role || "viewer";
    if (role === "superadmin" || role === "admin")
        return `<button class="text-red-400 hover:text-red-600 transition delete-btn" data-serial="${serial}" data-url="${url}"><i class="fas fa-trash-alt"></i></button>`;
    if (role === "subadmin")
        return `<span class="text-slate-400">${settings.lang === "KH" ? "មិនអាចលុប" : "No delete"}</span>`;
    return `<span class="text-slate-400">${settings.lang === "KH" ? "មើលតែប៉ុណ្ណោះ" : "View only"}</span>`;
}

document.addEventListener("click", async (e) => {
    if (e.target.closest(".delete-btn")) {
        const b = e.target.closest(".delete-btn");
        const serial = b.dataset.serial;
        const url = b.dataset.url;
        handleDelete(serial, url);
    }
});

async function handleDelete(serialNumber, imageUrl) {
    showModal(
        "confirm",
        settings.lang === "KH" ? "តើអ្នកប្រាកដទេថាចង់លុបរូបភាពនេះ?" : "Are you sure you want to delete this image?",
        {
            [settings.lang === "KH" ? "បោះបង់" : "Cancel"]: {
                callback: null,
                className: "w-full bg-slate-600 text-white py-2 rounded-lg font-semibold hover:bg-slate-700 transition",
            },
            [settings.lang === "KH" ? "លុប" : "Delete"]: {
                callback: async () => {
                    showModal("loading", settings.lang === "KH" ? "កំពុងលុប..." : "Deleting...");
                    try {
                        const res = await fetch(SCRIPT_URL, {
                            method: "POST",
                            body: JSON.stringify({
                                action: "delete",
                                serialNumber,
                                imageUrl,
                                adminName: loggedInAdmin ? loggedInAdmin.name : 'Unknown'
                            }),
                            redirect: "follow",
                        });
                        if (!res.ok) throw new Error(`Server error: ${res.status}`);
                        const r = await res.json();
                        if (r.status === "success") {
                            showModal("success", settings.lang === "KH" ? "រូបភាពត្រូវបានលុប!" : "Image deleted!", {
                                "OK": {
                                    callback: async () => {
                                        await fetchStudents();
                                        await displaySavedRecords();
                                        await displayStudentList();
                                    },
                                },
                            });
                        } else throw new Error(r.message || "Unknown server error.");
                    } catch (e) {
                        showModal("error", settings.lang === "KH" ? `ការលុបបរាជ័យ: ${e.message}` : `Delete failed: ${e.message}`);
                    }
                },
                className: "w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition",
            },
        }
    );
}

/* --------------------------- STUDENT LIST / STATS --------------------------- */
function populateListClassFilterV2() {
    if (!listClassFilter) return;
    
    const classes = [
        ...new Set(
            allStudentsListData
                .filter((s) => (s[3] || "").toString().trim() !== "បុគ្គលិក")
                .map((s) => s[2])
                .filter(Boolean)
        ),
    ];
    listClassFilter.innerHTML = `<option value="all">${settings.lang === "KH" ? "និស្សិតទាំងអស់" : "All Employees"}</option><option value="with_photos">${settings.lang === "KH" ? "មានរូបភាព" : "With Photos"}</option>`;
    classes
        .sort()
        .forEach(
            (c) =>
                (listClassFilter.innerHTML += `<option value="${c}">${c}</option>`)
        );
}

function filterStudentListTable() {
    if (!listTable) return;
    
    const sel = listClassFilter ? listClassFilter.value : "all";
    const q = listSearchInput ? listSearchInput.value.toLowerCase() : "";
    const tbody = listTable.querySelector("tbody");
    if (!tbody) return;
    
    tbody.innerHTML = "";
    const imgMap = new Map(savedRecordsData.map((r) => [r[2], r[5]]));
    let arr =
        sel === "all"
            ? allStudentsListData
            : sel === "with_photos"
            ? allStudentsListData.filter((s) => s[4] > 0)
            : allStudentsListData.filter((s) => s[2] === sel);
    arr = arr.filter(
        (s) =>
            (s[0] || "").toString().toLowerCase().includes(q) ||
            (s[1] || "").toLowerCase().includes(q)
    );
    const done = arr.filter((s) => s[4] > 0).length;
    if (!arr.length) {
        tbody.innerHTML = `<tr><td colspan="5" class="text-center p-4 text-slate-400">${settings.lang === "KH" ? "រកមិនឃើញនិស្សិត" : "No employees found"}</td></tr>`;
    } else {
        arr.forEach((s) => {
            const ok = s[4] > 0;
            const url = ok ? imgMap.get(String(s[0])) : null;
            const cell = url
                ? `<a href="${url}" target="_blank" rel="noopener noreferrer" class="relative block w-12 h-12 group rounded-lg overflow-hidden mx-auto"><img src="${url}" crossorigin="anonymous" class="w-full h-full object-cover" alt="${settings.lang === "KH" ? "រូបភាពនិស្សិត" : "Employee photo"}"></a>`
                : `<span class="text-slate-500">-</span>`;
            const icon = ok
                ? `<i class="fas fa-check-circle text-green-400"></i>`
                : `<i class="fas fa-times-circle text-red-400"></i>`;
            const actionButtons = ok
                ? `<button class="text-blue-400 hover:text-blue-600 transition view-btn" data-id="${s[0]}"><i class="fas fa-eye"></i></button>`
                : `<button class="text-indigo-400 hover:text-indigo-600 transition scan-btn" data-id="${s[0]}"><i class="fas fa-camera"></i></button>`;
                
            tbody.insertAdjacentHTML(
                "beforeend",
                `<tr class="border-b border-slate-700"><td class="p-3">${s[0]}</td><td class="p-3 whitespace-nowrap">${s[1]}</td><td class="p-3">${cell}</td><td class="p-3 text-center">${icon}</td><td class="p-3 text-center">${actionButtons}</td></tr>`
            );
        });
    }
    
    if(listTotalCount) listTotalCount.textContent = arr.length;
    if(listCompletedCount) listCompletedCount.textContent = done;
    if(listPendingCount) listPendingCount.textContent = arr.length - done;
    
    // Add event listeners to new buttons
    document.querySelectorAll('.scan-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const studentId = e.currentTarget.dataset.id;
            const student = studentsData.find(s => s[0] === studentId);
            if (student) {
                selectedStudent = student;
                showCameraModeSelection();
            }
        });
    });
    
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const studentId = e.currentTarget.dataset.id;
            const student = savedRecordsData.find(r => r[2] === studentId);
            if (student) {
                window.open(student[5], '_blank');
            }
        });
    });
}

async function displayStudentList() {
    if (!listLoading || !listTable) return;
    
    listLoading.style.display = "block";
    listTable.classList.add("hidden");
    if (savedRecordsData.length === 0) {
        try {
            const res = await fetch(`${SCRIPT_URL}?action=getSavedData`);
            if (!res.ok) throw new Error(`Server error: ${res.status}`);
            const data = await res.json();
            savedRecordsData = data.slice(1);
            savedRecordsData = savedRecordsData.filter((r) => {
                const grp = (r[4] || "").toString().trim();
                return grp !== "បុគ្គលិក";
            });
        } catch (e) {
            console.error("Could not pre-fetch records for images:", e);
        }
    }
    populateListClassFilterV2();
    filterStudentListTable();
    listLoading.style.display ="none";
    listTable.classList.remove("hidden");
}

/* --------------------------- CAMERA & UPLOAD --------------------------- */
async function startCamera(facingMode = "environment", mode = "auto") {
    if (!video || !videoWrapper || !faceStatus || !subtitle || !switchCameraBtn || !backBtn || !uploadBtn || !retakeBtn || !photoPreview || !manualCaptureBtn || !cameraSection || !selectionArea) return;
    
    currentFacingMode = facingMode;
    currentCameraMode = mode;
    stableFrames = 0;
    subtitle.textContent = settings.lang === "KH" 
        ? `កំពុងស្កេនសម្រាប់: ${selectedStudent ? selectedStudent[1] : ""}` 
        : `Scanning for: ${selectedStudent ? selectedStudent[1] : ""}`;
    cameraSection.classList.remove("hidden");
    selectionArea.classList.add("hidden");
    switchCameraBtn.classList.remove("hidden");
    backBtn.classList.remove("hidden");
    uploadBtn.classList.add("hidden");
    retakeBtn.classList.add("hidden");
    photoPreview.classList.add("hidden");
    videoWrapper.classList.remove("hidden");
    faceStatus.classList.remove("hidden");
    isUploading = false;
    stopCamera();
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode, width: { ideal: 640 }, height: { ideal: 480 } },
            audio: false,
        });
        currentStream = stream;
        video.srcObject = stream;
        video.onloadedmetadata = () => {
            if (mode === "auto") {
                manualCaptureBtn.classList.add("hidden");
                detectFace();
            } else {
                manualCaptureBtn.classList.remove("hidden");
                faceStatus.textContent = settings.lang === "KH" 
                    ? "ចុចប៊ូតុងកាមេរ៉ាដើម្បីថត" 
                    : "Click camera button to capture";
                faceStatus.classList.remove("text-green-400");
                videoWrapper.classList.remove("ready");
            }
        };
    } catch (err) {
        showModal("error", settings.lang === "KH" ? "សូមអនុញ្ញាតឱ្យចូលដំណើរការកាមេរ៉ា។" : "Please allow camera access.");
        resetToSelection();
    }
}

function detectFace() {
    if (!video || !faceStatus || !videoWrapper || !captureCanvas) return;
    
    const opts = new faceapi.TinyFaceDetectorOptions({
        inputSize: 224,
        scoreThreshold: 0.5,
    });
    clearInterval(faceApiInterval);
    faceApiInterval = setInterval(async () => {
        const res = await faceapi.detectSingleFace(video, opts);
        if (res && res.score > 0.7) {
            stableFrames++;
            faceStatus.textContent = settings.lang === "KH" 
                ? `ល្អ! (${stableFrames}/4)` 
                : `Excellent! (${stableFrames}/4)`;
            faceStatus.classList.add("text-green-400");
            videoWrapper.classList.add("ready");
            if (stableFrames >= 4) captureFace();
        } else {
            stableFrames = 0;
            faceStatus.textContent = settings.lang === "KH" 
                ? "សូមដាក់មុខអ្នកនៅកណ្តាល" 
                : "Please center your face";
            faceStatus.classList.remove("text-green-400");
            videoWrapper.classList.remove("ready");
        }
    }, 400);
}

function captureFace() {
    if (!captureCanvas || !video || !photoPreview || !switchCameraBtn || !videoWrapper || !manualCaptureBtn || !uploadBtn || !retakeBtn || !faceStatus || !subtitle) return;
    
    clearInterval(faceApiInterval);
    const ctx = captureCanvas.getContext("2d");
    const size = 512;
    captureCanvas.width = size;
    captureCanvas.height = size;
    const vRatio = video.videoWidth / video.videoHeight;
    let sx = 0,
        sy = 0,
        sw = video.videoWidth,
        sh = video.videoHeight;
    if (vRatio > 1) {
        sw = sh;
        sx = (video.videoWidth - sw) / 2;
    } else {
        sh = sw;
        sy = (video.videoHeight - sh) / 2;
    }
    ctx.drawImage(video, sx, sy, sw, sh, 0, 0, size, size);
    photoPreview.src = captureCanvas.toDataURL("image/jpeg", 0.9);
    stopCamera();
    switchCameraBtn.classList.add("hidden");
    videoWrapper.classList.add("hidden");
    manualCaptureBtn.classList.add("hidden");
    photoPreview.classList.remove("hidden");
    uploadBtn.classList.remove("hidden");
    retakeBtn.classList.remove("hidden");
    faceStatus.classList.add("hidden");
    subtitle.textContent = settings.lang === "KH" ? "បញ្ជាក់រូបភាពរបស់អ្នក" : "Confirm your photo";
}

function stopCamera() {
    if (currentStream) currentStream.getTracks().forEach((t) => t.stop());
    clearInterval(faceApiInterval);
    clearInterval(adminScanInterval);
}

function resetToSelection() {
    if (!cameraSection || !switchCameraBtn || !backBtn || !photoPreview || !uploadBtn || !retakeBtn || !videoWrapper || !selectionArea || !subtitle) return;
    
    stopCamera();
    cameraSection.classList.add("hidden");
    switchCameraBtn.classList.add("hidden");
    backBtn.classList.add("hidden");
    photoPreview.classList.add("hidden");
    uploadBtn.classList.add("hidden");
    retakeBtn.classList.add("hidden");
    videoWrapper.classList.remove("hidden");
    selectionArea.classList.remove("hidden");
    subtitle.textContent = settings.lang === "KH" ? "ជ្រើសរើស ID ឬឈ្មោះរបស់អ្នក" : "Select your ID or Name";
    selectedStudent = null;
}

if (manualCaptureBtn) {
    manualCaptureBtn.onclick = captureFace;
}

async function uploadPhoto() {
    if (!uploadBtn || !captureCanvas || !selectedStudent) return;
    
    if (isUploading) return;
    if (!selectedStudent) {
        showModal("error", settings.lang === "KH" ? "មិនអាចរកឃើញទិន្នន័យនិស្សិត" : "Could not find employee data.");
        return;
    }
    const imageData = captureCanvas
        .toDataURL("image/jpeg", 0.9)
        .split(",")[1];
    showModal("loading", settings.lang === "KH" ? "កំពុងបញ្ជូនរូបភាព..." : "Uploading image...");
    isUploading = true;
    try {
        const res = await fetch(SCRIPT_URL, {
            method: "POST",
            body: JSON.stringify({
                id: selectedStudent[0],
                name: selectedStudent[1],
                class: selectedStudent[2],
                group: selectedStudent[3],
                imageData,
                adminName: loggedInAdmin ? loggedInAdmin.name : 'Unknown'
            }),
            redirect: "follow",
        });
        if (!res.ok) throw new Error(`Server error: ${res.status}`);
        const r = await res.json();
        if (r.status === "success") {
            showModal("success", settings.lang === "KH" ? "រូបភាពរក្សាទុកបានជោគជ័យ!" : "Image saved successfully!", {
                "OK": {
                    callback: async () => {
                        resetToSelection();
                        await fetchStudents();
                        await displaySavedRecords();
                        updateAnalyticsData();
                    },
                },
            });
        } else throw new Error(r.message || "Unknown server error.");
    } catch (e) {
        showModal("error", settings.lang === "KH" ? `ការបញ្ជូនបរាជ័យ: ${e.message}` : `Upload failed: ${e.message}`);
    } finally {
        isUploading = false;
    }
};

if (uploadBtn) {
    uploadBtn.onclick = uploadPhoto;
}

if (retakeBtn) {
    retakeBtn.onclick = () => {
        if (!photoPreview || !uploadBtn || !retakeBtn || !videoWrapper || !faceStatus) return;
        
        photoPreview.classList.add("hidden");
        uploadBtn.classList.add("hidden");
        retakeBtn.classList.add("hidden");
        videoWrapper.classList.remove("hidden");
        faceStatus.classList.remove("hidden");
        stableFrames = 0;
        startCamera(currentFacingMode, currentCameraMode);
    };
}

if (switchCameraBtn) {
    switchCameraBtn.onclick = () =>
        startCamera(
            currentFacingMode === "environment" ? "user" : "environment",
            currentCameraMode
        );
}

if (backBtn) {
    backBtn.onclick = () => resetToSelection();
}

if (studentSearchInput) {
    studentSearchInput.oninput = () =>
        populateStudentList(studentSearchInput.value);
}

/* --------------------------- PROFILE / STATS --------------------------- */
async function fetchAllSavedRecordsForStats() {
    // ensure savedRecordsData is populated
    if (!savedRecordsData || savedRecordsData.length === 0)
        await displaySavedRecords();
    updateProfileSummary();
}

function updateProfileSummary() {
    // total counts
    const totalAll = savedRecordsData.length;
    const myUploads = savedRecordsData.filter((r) => {
        // try to infer uploader from r[6] or r[7] if backend stores admin
        return (
            r[6] && loggedInAdmin && r[6].toString().includes(loggedInAdmin.name)
        );
    }).length;
    
    const statTotal = document.getElementById("stat-total");
    const statMycount = document.getElementById("stat-mycount");
    const statOthers = document.getElementById("stat-others");
    
    if (statTotal) statTotal.textContent = totalAll;
    if (statMycount) statMycount.textContent = myUploads;
    if (statOthers) statOthers.textContent = totalAll - myUploads;
    
    // profile page values
    if (profileTotalAll) profileTotalAll.textContent = totalAll;
    if (profileTotalMy) profileTotalMy.textContent = myUploads;
    if (loggedInAdmin) {
        if (profileImgLarge) profileImgLarge.src = loggedInAdmin.imageUrl;
        if (profileNameLarge) profileNameLarge.textContent = loggedInAdmin.name;
        if (profileRoleLarge) profileRoleLarge.textContent = loggedInAdmin.role || "admin";
    }
}

function openProfilePage() {
    navLinksDeactivate();
    hideAllPages();
    if (navProfile) navProfile.classList.add('active');
    if (pageProfile) pageProfile.classList.remove('hidden');
    populateProfileImages();
}

function populateProfileImages(filter = "") {
    if (!profileImagesGrid) return;
    
    profileImagesGrid.innerHTML = "";
    const q = (filter || "").toLowerCase();
    // show images uploaded by loggedInAdmin first (best-effort by checking uploader name in record row)
    const mine = savedRecordsData.filter(
        (r) =>
            r[6] && loggedInAdmin && r[6].toString().includes(loggedInAdmin.name)
    );
    const others = savedRecordsData.filter(
        (r) =>
            !(
                r[6] &&
                loggedInAdmin &&
                r[6].toString().includes(loggedInAdmin.name)
            )
    );
    const list = mine
        .concat(others)
        .filter(
            (r) =>
                (r[1] || "").toLowerCase().includes(q) ||
                (r[2] || "").toString().toLowerCase().includes(q)
        );
    if (!list.length)
        profileImagesGrid.innerHTML = `<div class="text-slate-400 col-span-4">${settings.lang === "KH" ? "រកមិនឃើញរូបភាព" : "No images found"}</div>`;
    list.forEach((r) => {
        const url = r[5];
        const card = document.createElement("div");
        card.className = "rounded overflow-hidden bg-slate-800/40 p-2";
        card.innerHTML = `<a href="${url}" target="_blank" rel="noopener noreferrer"><img src="${url}" class="w-full h-28 object-cover rounded"></a><div class="mt-2 text-sm"><div class="font-semibold">${r[1]}</div><div class="text-xs text-slate-400">ID: ${r[2]}</div></div>`;
        profileImagesGrid.appendChild(card);
    });
}

if (profileImageFilter) {
    profileImageFilter.oninput = () =>
        populateProfileImages(profileImageFilter.value);
}
/* --------------------------- ADMIN PANEL --------------------------- */
async function populateAdminManagementList() {
    if (!adminManagementList) return;
    
    adminManagementList.innerHTML = `<div class="text-center text-slate-400 p-4">${settings.lang === "KH" ? "កំពុងផ្ទុកបញ្ជីអ្នកគ្រប់គ្រង..." : "Loading admin list..."}</div>`;
    
    // Ensure adminData is fresh
    await fetchAdmins(); 
    
    adminManagementList.innerHTML = ""; // Clear loader
    
    if (!adminData || !adminData.length) {
        adminManagementList.innerHTML = `<div class="text-center text-slate-400 p-4">${settings.lang === "KH" ? "មិនអាចផ្ទុកបញ្ជីអ្នកគ្រប់គ្រង" : "Could not load admin list"}.</div>`;
        return;
    }
    
    adminData.forEach(admin => {
        const isAdminSelf = admin.name === loggedInAdmin.name;
        const card = document.createElement('div');
        card.className = 'p-3 bg-slate-800/40 rounded-lg flex items-center gap-3';
        
        const roleOptions = ['viewer', 'subadmin', 'admin', 'superadmin']
            .map(role => `<option value="${role}" ${admin.role === role ? 'selected' : ''}>${role}</option>`)
            .join('');
            
        const isDisabled = admin.disabled;
        
        card.innerHTML = `
            <img src="${admin.imageUrl}" alt="${admin.name}" class="w-12 h-12 rounded-full object-cover flex-shrink-0" crossorigin="anonymous">
            <div class="flex-1 overflow-hidden">
                <p class="font-semibold text-white truncate">${admin.name}</p>
                <p class="text-sm text-slate-400 truncate">${admin.role} ${isDisabled ? '(${settings.lang === "KH" ? "ត្រូវបានទប់ស្កាត់" : "Disabled"})' : ''}</p>
            </div>
            <div class="flex items-center gap-2 flex-shrink-0">
                <select id="role-select-${admin.name}" class="admin-filter-select text-sm !py-1 !px-2" ${isAdminSelf ? 'disabled' : ''}>
                    ${roleOptions}
                </select>
                <label class="switch" title="${isDisabled ? (settings.lang === "KH" ? "លើកស្រាង" : "Unblock") : (settings.lang === "KH" ? "ទប់ស្កាត់" : "Block")} User">
                    <input id="disable-check-${admin.name}" type="checkbox" ${isDisabled ? 'checked' : ''} ${isAdminSelf ? 'disabled' : ''}>
                    <span class="slider"></span>
                </label>
            </div>
        `;
        
        adminManagementList.appendChild(card);

        // Add event listeners for new elements
        const roleSelect = document.getElementById(`role-select-${admin.name}`);
        const disableCheck = document.getElementById(`disable-check-${admin.name}`);
        
        if (!isAdminSelf && roleSelect) {
            roleSelect.onchange = (e) => {
                handleUpdateAdminRole(admin.name, e.target.value);
            };
        }
        if (!isAdminSelf && disableCheck) {
            disableCheck.onchange = (e) => {
                handleUpdateAdminDisabled(admin.name, e.target.checked);
            };
        }
    });
}

async function handleUpdateAdminRole(adminName, newRole) {
    const admin = adminData.find(a => a.name === adminName);
    if (!admin) return;
    
    showModal('loading', settings.lang === "KH" ? `កំពុងធ្វើបច្ចុប្បន្នភាព ${adminName} ទៅ ${newRole}...` : `Updating ${adminName} to ${newRole}...`);
    
    try {
        const res = await fetch(SCRIPT_URL, {
            method: 'POST',
            body: JSON.stringify({
                action: 'setAdminRole',
                requestedBy: loggedInAdmin.name,
                name: adminName,
                role: newRole,
                disabled: admin.disabled // Pass existing disabled status
            }),
            redirect: 'follow'
        });
        if (!res.ok) throw new Error('Server request failed');
        const result = await res.json();
        if (result.status === 'success') {
            showModal('success', settings.lang === "KH" ? `${adminName} តួនាទីត្រូវបានធ្វើបច្ចុប្បន្នភាពទៅ ${newRole}` : `${adminName} role updated to ${newRole}.`);
            await populateAdminManagementList(); // Refresh list
        } else {
            throw new Error(result.message || 'Unknown error');
        }
    } catch (e) {
        showModal('error', settings.lang === "KH" ? `ធ្វើបច្ចុប្បន្នភាពបរាជ័យ: ${e.message}` : `Failed to update: ${e.message}`);
        await populateAdminManagementList(); // Refresh to reset UI
    }
}

async function handleUpdateAdminDisabled(adminName, isDisabled) {
    const admin = adminData.find(a => a.name === adminName);
    if (!admin) return;

    const actionText = isDisabled ? (settings.lang === "KH" ? 'កំពុងទប់ស្កាត់' : 'Blocking') : (settings.lang === "KH" ? 'កំពុងលើកស្រាង' : 'Unblocking');
    showModal('loading', `${actionText} ${adminName}...`);
    
    try {
        const res = await fetch(SCRIPT_URL, {
            method: 'POST',
            body: JSON.stringify({
                action: 'setAdminRole',
                requestedBy: loggedInAdmin.name,
                name: adminName,
                role: admin.role, // Pass existing role
                disabled: isDisabled 
            }),
            redirect: 'follow'
        });
        if (!res.ok) throw new Error('Server request failed');
        const result = await res.json();
        if (result.status === 'success') {
            showModal('success', settings.lang === "KH" ? `${adminName} ត្រូវបាន${isDisabled ? 'ទប់ស្កាត់' : 'លើកស្រាង'}` : `${adminName} has been ${isDisabled ? 'disabled' : 'enabled'}.`);
            await populateAdminManagementList(); // Refresh list
        } else {
            throw new Error(result.message || 'Unknown error');
        }
    } catch (e) {
        showModal('error', settings.lang === "KH" ? `ធ្វើបច្ចុប្បន្នភាពបរាជ័យ: ${e.message}` : `Failed to update: ${e.message}`);
        await populateAdminManagementList(); // Refresh to reset UI
    }
}

if (addAdminBtn) {
    addAdminBtn.onclick = () => {
        // The backend script setAdminRoleHandler only UPDATES. It does not ADD.
        // Therefore, we must inform user to add via Google Sheet.
        showModal(
            'choice', 
            settings.lang === "KH" ? 'បន្ថែមអ្នកគ្រប់គ្រងតាមរយៈ Google Sheet' : 'Add Admin via Google Sheet', 
            { 'OK': {} }
        );
        if (modalMessage) {
            modalMessage.innerHTML = settings.lang === "KH" 
                ? 'ដើម្បីបន្ថែមអ្នកគ្រប់គ្រងថ្មី សូមបញ្ចូលព័ត៌មានរបស់ពួកគេ (ឈ្មោះ, URL រូបភាព, តួនាទី, អ៊ីមែល) ទៅក្នុងផ្ទាំង <strong>AdminScan</strong> នៅក្នុង Google Sheet មេ។' 
                : 'To add a new admin, please add their details (Name, Image URL, Role, Email) to <strong>AdminScan</strong> tab in master Google Sheet.';
        }
    };
}

/* --------------------------- ANALYTICS --------------------------- */
async function fetchAnalyticsData() {
    if (!scansTodayEl || !activeUsersEl || !completionRateEl || !storageUsedEl) return;
    
    try {
        // In a real implementation, this would fetch from a dedicated analytics endpoint
        // For now, we'll simulate data based on existing data
        
        // Calculate today's scans (simplified)
        const today = new Date().toISOString().split('T')[0];
        const todayScans = savedRecordsData.filter(r => {
            // This assumes there's a timestamp field we can check
            // In a real implementation, we'd have a proper date field
            return true; // Simplified for demo
        }).length;
        
        // Calculate completion rate
        const totalStudents = allStudentsListData.length;
        const studentsWithPhotos = savedRecordsData.length;
        const completionRate = totalStudents > 0 ? Math.round((studentsWithPhotos / totalStudents) * 100) : 0;
        
        // Calculate storage used (simplified estimate)
        const avgImageSize = 0.5; // MB
        const storageUsed = (savedRecordsData.length * avgImageSize / 1024).toFixed(2); // GB
        
        // Update UI
        scansTodayEl.textContent = todayScans;
        activeUsersEl.textContent = adminData.filter(a => !a.disabled).length;
        completionRateEl.textContent = `${completionRate}%`;
        storageUsedEl.textContent = `${storageUsed} GB`;
        
        // Update charts
        updateWeeklyActivityChart();
        updateClassCompletionChart();
        
    } catch (error) {
        console.error('Failed to fetch analytics data:', error);
    }
}

function updateWeeklyActivityChart() {
    if (!weeklyActivityChart) return;
    
    const ctx = weeklyActivityChart.getContext('2d');
    
    // Generate sample data for past 7 days
    const labels = [];
    const data = [];
    
    for (let i = 6; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        labels.push(settings.lang === "KH" ? date.toLocaleDateString('km-KH', { weekday: 'short' }) : date.toLocaleDateString('en-US', { weekday: 'short' }));
        
        // In a real implementation, this would be actual scan data
        // For now, generate random data
        data.push(Math.floor(Math.random() * 50) + 10);
    }
    
    // Destroy existing chart if it exists
    if (window.weeklyActivityChartInstance) {
        window.weeklyActivityChartInstance.destroy();
    }
    
    window.weeklyActivityChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: settings.lang === "KH" ? "ការស្កេន" : "Scans",
                data: data,
                borderColor: '#4f46e5',
                backgroundColor: 'rgba(79, 70, 229, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#e2e8f0'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#e2e8f0'
                    }
                }
            }
        }
    });
}

function updateClassCompletionChart() {
    if (!classCompletionChart) return;
    
    const ctx = classCompletionChart.getContext('2d');
    
    // Get unique classes
    const classes = [...new Set(allStudentsListData.map(s => s[2]).filter(Boolean))];
    
    // Calculate completion rate for each class
    const completionData = classes.map(className => {
        const totalStudents = allStudentsListData.filter(s => s[2] === className).length;
        const studentsWithPhotos = savedRecordsData.filter(r => r[3] === className).length;
        return totalStudents > 0 ? Math.round((studentsWithPhotos / totalStudents) * 100) : 0;
    });
    
    // Destroy existing chart if it exists
    if (window.classCompletionChartInstance) {
        window.classCompletionChartInstance.destroy();
    }
    
    window.classCompletionChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: classes,
            datasets: [{
                label: settings.lang === "KH" ? "អត្រាបញ្ចប់ (%)" : "Completion Rate (%)",
                data: completionData,
                backgroundColor: [
                    'rgba(79, 70, 229, 0.7)',
                    'rgba(16, 185, 129, 0.7)',
                    'rgba(245, 158, 11, 0.7)',
                    'rgba(239, 68, 68, 0.7)',
                    'rgba(59, 130, 246, 0.7)'
                ],
                borderColor: [
                    'rgba(79, 70, 229, 1)',
                    'rgba(16, 185, 129, 1)',
                    'rgba(245, 158, 11, 1)',
                    'rgba(239, 68, 68, 1)',
                    'rgba(59, 130, 246, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#e2e8f0',
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#e2e8f0'
                    }
                }
            }
        }
    });
}

function updateAnalyticsData() {
    fetchAnalyticsData();
}

/* --------------------------- NAV HELPERS --------------------------- */
const navLinks = [
    navScan,
    navList,
    navRecords,
    navStorage,
    navProfile,
    navAdmin,
    navAnalytics
];
const pages = [
    pageScan,
    pageList,
    pageRecords,
    pageStorage,
    pageProfile,
    pageAdmin,
    pageAnalytics
];

function navLinksDeactivate() {
    navLinks.forEach((l) => {
        if (l) l.classList.remove("active");
    });
}

function hideAllPages() {
    pages.forEach((p) => {
        if (p) p.classList.add("hidden");
    });
}

navLinks.forEach((link, index) => {
    if (!link || !pages[index]) return;
    
    link.onclick = (e) => {
        e.preventDefault();
        navLinksDeactivate();
        hideAllPages();
        link.classList.add("active");
        pages[index].classList.remove("hidden");
        stopCamera();
        if (pages[index] === pageRecords) displaySavedRecords();
        if (pages[index] === pageList) displayStudentList();
        if (pages[index] === pageStorage) populateStorageLinks();
        if (pages[index] === pageAdmin) populateAdminManagementList();
        if (pages[index] === pageAnalytics) fetchAnalyticsData();
        closeSidebar();
    };
});

const closeSidebar = () => {
    // Only applies to mobile
    if (sidebar) sidebar.classList.remove("is-open");
    if (sidebarBackdrop) sidebarBackdrop.classList.add("hidden");
};

if (menuBtn) {
    menuBtn.onclick = () => { // Mobile menu button
        if (sidebar) sidebar.classList.toggle('is-open'); 
        if (sidebarBackdrop) sidebarBackdrop.classList.toggle('hidden');
        // If we open mobile nav, make sure desktop collapsed state is off
        if (sidebar) sidebar.classList.remove('collapsed');
        if (contentWrapper) contentWrapper.classList.remove('collapsed');
        isSidebarCollapsed = false;
    };
}

if (sidebarToggleBtn) {
    sidebarToggleBtn.onclick = () => { // Desktop toggle button
        isSidebarCollapsed = !isSidebarCollapsed;
        if (sidebar) sidebar.classList.toggle('collapsed', isSidebarCollapsed);
        if (contentWrapper) contentWrapper.classList.toggle('collapsed', isSidebarCollapsed);
        // Store preference
        try { localStorage.setItem('sidebar_collapsed', isSidebarCollapsed); } catch(e){}
    };
}

if (sidebarBackdrop) {
    sidebarBackdrop.onclick = () => closeSidebar();
}

if (recordsClassFilter) {
    recordsClassFilter.onchange = () => filterRecordsTable();
}
if (listClassFilter) {
    listClassFilter.onchange = () => filterStudentListTable();
}
if (recordsSearchInput) {
    recordsSearchInput.oninput = () => filterRecordsTable();
}
if (listSearchInput) {
    listSearchInput.oninput = () => filterStudentListTable();
}

/* --------------------------- STORAGE LINKS --------------------------- */
function populateStorageLinks() {
    const container = document.getElementById("storage-links-container");
    if (!container) return;
    
    const links = {
        [settings.lang === "KH" ? "សៀវភៅ" : "Sheets"]: {
            [settings.lang === "KH" ? "បញ្ជីនិស្សិត (DIList)" : "Student List (DIList)"]: "https://docs.google.com/spreadsheets/d/1eRyPoifzyvB4oBmruNyXcoKMKPRqjk6xDD6-bPNW6pc/edit",
            [settings.lang === "KH" ? "ព័ត៌មានដែលបានរក្សាទុក & អ្នកគ្រប់គ្រង (InfoUsers)" : "Saved Info & Admins (InfoUsers)"]: "https://docs.google.com/spreadsheets/d/1dleEg_Q5KV9IRGT4DpfHooZQ_p2bKLk-2yCGYootqPA/edit",
            [settings.lang === "KH" ? "បញ្ជីមួយទៀត (បញ្ជឺឈ្មោះរួម)" : "Secondary List (បញ្ជឺឈ្មោះរួម)"]: "https://docs.google.com/spreadsheets/d/1_Kgl8UQXRsVATt_BOHYQjVWYKkRIBA12R-qnsBoSUzc/edit",
        },
        [settings.lang === "KH" ? "ថត" : "Folders"]: {
            [settings.lang === "KH" ? "ឯកសារដែលបានបញ្ចូលលើកដំបូង" : "Default Uploads"]: "https://drive.google.com/drive/folders/10RyejYi9_J0c7gxrL5wgmODy4VfJZ6SA",
            [settings.lang === "KH" ? "ថ្នាក់ AD" : "AD Class"]: "https://drive.google.com/drive/folders/140JXHUU9FIKB7VNEXUsv9rPJ4i8S_SMY",
        },
    };
    container.innerHTML = "";
    for (const [category, items] of Object.entries(links)) {
        let html = `<div class="mb-6"><h3 class="text-xl font-semibold text-indigo-300 mb-3">${category}</h3><div class="space-y-2">`;
        for (const [title, url] of Object.entries(items)) {
            html += `<a href="${url}" target="_blank" rel="noopener noreferrer" class="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition"><span class="font-medium">${title}</span><i class="fas fa-external-link-alt text-slate-400"></i></a>`;
        }
        html += `</div></div>`;
        container.innerHTML += html;
    }
}

/* --------------------------- SETTINGS UI --------------------------- */
function setupSettingsUI() {
    // load saved settings
    try {
        const s = JSON.parse(
            localStorage.getItem("di_settings_v1") || "{}"
        );
        if (s.theme) settings.theme = s.theme;
        if (s.lang) settings.lang = s.lang;
        if (s.bgColor) settings.bgColor = s.bgColor;
    } catch (e) {}
    applySettings(); 
    
    // show face-scan toggle only if superadmin
    if (loggedInAdmin && (loggedInAdmin.role === "superadmin")) {
        if (faceScanToggleRow) faceScanToggleRow.classList.remove("hidden");
        if (navAdmin) navAdmin.classList.remove("hidden"); // Show Admin Panel link
        if (navSettingsBtn) navSettingsBtn.classList.remove("hidden"); // Show settings cog
        
        if (faceScanEnabledCheckbox) {
            faceScanEnabledCheckbox.checked = loggedInAdmin.faceScan !== false;
            faceScanEnabledCheckbox.onchange = () => {
                loggedInAdmin.faceScan = faceScanEnabledCheckbox.checked;
                // TODO: This should be saved to the backend
                // For now, just update self
                handleUpdateAdminDisabled(loggedInAdmin.name, !loggedInAdmin.faceScan);
                showModal("success", settings.lang === "KH" ? "បានធ្វើបច្ចុប្បន្នភាពចំណង់ចំណូលចិត្តការស្កេនមុខ" : "Updated face-scan preference.");
            };
        }
    }
    
    if (btnThemeToggle) {
        btnThemeToggle.onclick = () => {
            settings.theme = settings.theme === "dark" ? "light" : "dark";
            applySettings();
            localStorage.setItem("di_settings_v1", JSON.stringify(settings));
        };
    }
    if (btnLang) {
        btnLang.onclick = () => {
            settings.lang = settings.lang === "KH" ? "EN" : "KH";
            applySettings();
            localStorage.setItem("di_settings_v1", JSON.stringify(settings));
        };
    }
    if (bgColorPicker) {
        bgColorPicker.onchange = (e) => {
            settings.bgColor = e.target.value;
            document.body.style.background = settings.bgColor;
            localStorage.setItem("di_settings_v1", JSON.stringify(settings));
        };
    }
}

function applySettings() {
    if (document.body) {
        document.body.setAttribute(
            "data-theme",
            settings.theme === "dark" ? "dark" : "light"
        );
        document.body.style.background = settings.bgColor || "";
    }
    if (btnThemeToggle) {
        btnThemeToggle.textContent =
            settings.theme === "dark" ? (settings.lang === "KH" ? "ងងឹត" : "Dark") : (settings.lang === "KH" ? "ពន្លឺ" : "Light");
    }
    if (btnLang) {
        btnLang.textContent = settings.lang;
    }
    if (bgColorPicker) {
        bgColorPicker.value = settings.bgColor || "#0f172a";
    }
}

/* --------------------------- INITIAL LOAD --------------------------- */
document.addEventListener("DOMContentLoaded", async () => {
    // 1. Show loader immediately
    document.body.insertAdjacentHTML(
        "afterbegin",
        `<div id="initial-loading" class="fixed inset-0 flex flex-col items-center justify-center bg-slate-900 z-50"><img src="https://i.postimg.cc/FHBn0Fdf/di3-copy.png" alt="Logo" class="w-24 h-24 rounded-full mb-4 shadow-lg"><p class="text-slate-300 text-lg">${settings.lang === "KH" ? "កំពុងទាញយកម៉ូដែល..." : "Loading face models..."}</p></div>`
    );
    const loader = document.getElementById("initial-loading");

    // Check for sidebar preference
    if (localStorage.getItem('sidebar_collapsed') === 'true') {
        isSidebarCollapsed = true;
        if (sidebar) sidebar.classList.add('collapsed');
        if (contentWrapper) contentWrapper.classList.add('collapsed');
    }

    try {
        // 2. Load models first, this is essential for both paths
        await loadModels();

        // 3. Initialize new features
        initVoiceRecognition();
        initQRScanner();
        initBatchScan();
        initExportFunctions();
        initTourGuide();

        // 4. Fetch admin data for both login and session restore
        await fetchAdmins();

        // 5. Check for an existing session
        const session = loadAdminSession();

        if (session && session.name && session.imageUrl) {
            
            const sessionAdmin = adminData.find(a => a.name === session.name);
            
            if (sessionAdmin && sessionAdmin.disabled) {
                // Admin is disabled, clear session and force login
                clearAdminSession();
                loader.style.display = 'none';
                showModal('error', settings.lang === "KH" ? 'គណនីរបស់អ្នកត្រូវបានទប់ស្កាត់។ សូមទាក់ទង superadmin។' : 'Your account has been disabled. Please contact a superadmin.');
                return; // Stop execution
            } else if (sessionAdmin) {
                 // --- SESSION EXISTS: Go to App ---
                loggedInAdmin = sessionAdmin; // Use the full, fresh data
            } else {
                // No admin found, session is invalid
                clearAdminSession();
                loader.style.display = 'none';
                return; // Stop execution
            }

            // 4. Update UI immediately
            if (adminProfileImgHeader) {
                adminProfileImgHeader.crossOrigin = "anonymous";
                adminProfileImgHeader.src = loggedInAdmin.imageUrl;
                adminProfileImgHeader.classList.remove("hidden");
            }
            if (adminProfileSidebar) {
                adminProfileSidebar.crossOrigin = "anonymous";
                adminProfileSidebar.src = loggedInAdmin.imageUrl;
                adminProfileSidebar.classList.remove("hidden");
            }
            if (adminNameSidebar) adminNameSidebar.textContent = loggedInAdmin.name;
            if (adminRoleSidebar) adminRoleSidebar.textContent = loggedInAdmin.role || "admin";

            // 5. Show app, hide login
            if (loginScreen) {
                loginScreen.classList.add("hidden");
                if (loginScreen.parentNode)
                    loginScreen.parentNode.removeChild(loginScreen);
            }
            if (mainAppWrapper) mainAppWrapper.classList.remove("hidden");

            // 6. Setup settings (e.g., theme)
            setupSettingsUI();

            // 7. Asynchronously fetch data in the background
            Promise.all([
                fetchStudents(),
                displaySavedRecords(),
                fetchAllSavedRecordsForStats(),
            ]).then(updateProfileSummary);
        }
        // If no session, do nothing, just let the loader hide
        
    } catch (err) {
        // Handle critical errors (e.g., models failed to load, fetchAdmins failed)
        console.error("Initialization failed:", err);
        if (loader) {
            loader.innerHTML =
                `<p class="text-red-400 text-lg">${settings.lang === "KH" ? "បរាជ័យក្នុងការចាប់ផ្តើមកម្មវិធី" : "Failed to initialize the application"}.</p><p class="text-slate-400 mt-2">${settings.lang === "KH" ? "សូមព្យាយាមផ្ទុកទំព័រឡើងវិញ" : "Please try refreshing the page"}.</p>`;
        } else {
            showModal("error", settings.lang === "KH" ? "បរាជ័យក្នុងការចាប់ផ្តើមកម្មវិធី។ សូមព្យាយាមផ្ទុកទំព័រឡើងវិញ" : "Failed to initialize the application. Please try refreshing the page.");
        }
        return; // Stop execution
    } finally {
        // 8. Hide loader
        if (loader) {
            loader.parentNode.removeChild(loader);
        }
    }
});