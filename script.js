/* ===== States and Districts ===== */
const statesAndDistricts = {
  "Andhra Pradesh": ["Anantapur", "Chittoor", "East Godavari", "Guntur", "Krishna", "Kurnool", "Prakasam", "Srikakulam", "Visakhapatnam", "Vizianagaram", "West Godavari", "YSR Kadapa", "Alluri Sitharama Raju", "Anakapalli", "Annamayya", "Bapatla", "Eluru", "Kakinada", "Konaseema", "Nandyal", "Palnadu", "Sri Balaji", "Satyasai", "Tirupati"],
  "Arunachal Pradesh": ["Anjaw", "Changlang", "Dibang Valley", "East Kameng", "East Siang", "Kra Daadi", "Kurung Kumey", "Lohit", "Longding", "Lower Dibang Valley", "Lower Siang", "Lower Subansiri", "Namsai", "Pakke-Kessang", "Papum Pare", "Shi Yomi", "Siang", "Tawang", "Tirap", "Upper Siang", "Upper Subansiri", "West Kameng", "West Siang", "Kamle"],
  "Assam": ["Baksa", "Barpeta", "Biswanath", "Bongaigaon", "Cachar", "Charaideo", "Chirang", "Darrang", "Dhemaji", "Dhubri", "Dibrugarh", "Dima Hasao", "Goalpara", "Golaghat", "Hailakandi", "Hojai", "Jorhat", "Kamrup Metropolitan", "Kamrup", "Karbi Anglong", "Karimganj", "Kokrajhar", "Lakhimpur", "Majuli", "Morigaon", "Nagaon", "Nalbari", "Sivasagar", "Sonitpur", "South Salmara-Mankachar", "Tinsukia", "Udalguri", "West Karbi Anglong"],
  "Bihar": ["Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Bhojpur", "Buxar", "Darbhanga", "East Champaran", "Gaya", "Gopalganj", "Jamui", "Jehanabad", "Kaimur", "Katihar", "Khagaria", "Kishanganj", "Lakhisarai", "Madhepura", "Madhubani", "Munger", "Muzaffarpur", "Nalanda", "Nawada", "Patna", "Purnia", "Rohtas", "Saharsa", "Samastipur", "Saran", "Sheikhpura", "Sheohar", "Sitamarhi", "Siwan", "Supaul", "Vaishali", "West Champaran"],
  "Chhattisgarh": ["Balod", "Baloda Bazar", "Balrampur", "Bastar", "Bemetara", "Bijapur", "Bilaspur", "Dantewada", "Dhamtari", "Durg", "Gariaband", "Janjgir-Champa", "Jashpur", "Kabirdham", "Kanker", "Kondagaon", "Korba", "Koriya", "Mahasamund", "Mungeli", "Narayanpur", "Raigarh", "Raipur", "Rajnandgaon", "Sukma", "Surajpur", "Surguja", "Gorella-Pendra-Marwahi", "Khairagarh-Chhuikhadan-Gandai", "Manendragarh-Chirmiri-Bharatpur", "Sarangarh-Bilaigarh", "Mohla-Manpur-Ambagarh Chowki"],
  "Goa": ["North Goa", "South Goa"],
  "Gujarat": ["Ahmedabad", "Amreli", "Anand", "Aravalli", "Banaskantha", "Bharuch", "Bhavnagar", "Botad", "Chhota Udaipur", "Dahod", "Dang", "Devbhoomi Dwarka", "Gandhinagar", "Gir Somnath", "Jamnagar", "Junagadh", "Kheda", "Kutch", "Mahisagar", "Mehsana", "Morbi", "Narmada", "Navsari", "Panchmahal", "Patan", "Porbandar", "Rajkot", "Sabarkantha", "Surat", "Surendranagar", "Tapi", "Vadodara", "Valsad"],
  "Haryana": ["Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad", "Gurugram", "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh", "Nuh", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar"],
  "Himachal Pradesh": ["Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kinnaur", "Kullu", "Lahaul and Spiti", "Mandi", "Shimla", "Sirmaur", "Solan", "Una"],
  "Jharkhand": ["Bokaro", "Chatra", "Deoghar", "Dhanbad", "Dumka", "East Singhbhum", "Garhwa", "Giridih", "Godda", "Gumla", "Hazaribagh", "Jamtara", "Khunti", "Koderma", "Latehar", "Lohardaga", "Pakur", "Palamu", "Ramgarh", "Ranchi", "Sahebganj", "Saraikela Kharsawan", "Simdega", "West Singhbhum"],
  "Karnataka": ["Bagalkot", "Ballari", "Belagavi", "Bengaluru Rural", "Bengaluru Urban", "Bidar", "Chamarajanagar", "Chikkaballapur", "Chikkamagaluru", "Chitradurga", "Dakshina Kannada", "Davanagere", "Dharwad", "Gadag", "Kalaburagi", "Hassan", "Haveri", "Kodagu", "Kolar", "Koppal", "Mandya", "Mysuru", "Raichur", "Ramanagara", "Shivamogga", "Tumakuru", "Udupi", "Uttara Kannada", "Vijayapura", "Yadgir"],
  "Kerala": ["Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta", "Thiruvananthapuram", "Thrissur", "Wayanad"],
  "Madhya Pradesh": ["Agar Malwa", "Alirajpur", "Anuppur", "Ashoknagar", "Balaghat", "Barwani", "Betul", "Bhind", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", "Harda", "Hoshangabad", "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa", "Khargone", "Mandla", "Mandsaur", "Morena", "Narsinghpur", "Neemuch", "Panna", "Raisen", "Rajgarh", "Ratlam", "Rewa", "Sagar", "Satna", "Sehore", "Seoni", "Shahdol", "Shajapur", "Sheopur", "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh", "Ujjain", "Umaria", "Vidisha", "Niwari"],
  "Maharashtra": ["Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhandara", "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban", "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Palghar", "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal"],
  "Manipur": ["Bishnupur", "Chandel", "Churachandpur", "Imphal East", "Imphal West", "Jiribam", "Kakching", "Kamjong", "Kangpokpi", "Noney", "Pherzawl", "Senapati", "Tamenglong", "Tengnoupal", "Thoubal", "Ukhrul"],
  "Meghalaya": ["East Garo Hills", "East Jaintia Hills", "East Khasi Hills", "North Garo Hills", "Ri Bhoi", "South Garo Hills", "South West Garo Hills", "South West Khasi Hills", "West Garo Hills", "West Jaintia Hills", "West Khasi Hills", "Eastern West Khasi Hills"],
  "Mizoram": ["Aizawl", "Champhai", "Hnahthial", "Kolasib", "Lawngtlai", "Lunglei", "Mamit", "Saiha", "Serchhip", "Saitual", "Khawzawl"],
  "Nagaland": ["Dimapur", "Kiphire", "Kohima", "Longleng", "Mokokchung", "Mon", "Peren", "Phek", "Tuensang", "Wokha", "Zunheboto", "Chümoukedima", "Niuland", "Noklak", "Shamator", "Tseminyü"],
  "Odisha": ["Angul", "Balangir", "Balasore", "Bargarh", "Bhadrak", "Boudh", "Cuttack", "Deogarh", "Dhenkanal", "Gajapati", "Ganjam", "Jagatsinghpur", "Jajpur", "Jharsuguda", "Kalahandi", "Kandhamal", "Kendrapara", "Keonjhar", "Khordha", "Koraput", "Malkangiri", "Mayurbhanj", "Nabarangpur", "Nayagarh", "Nuapada", "Puri", "Rayagada", "Sambalpur", "Subarnapur", "Sundergarh"],
  "Punjab": ["Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Ferozepur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Mansa", "Moga", "Sri Muktsar Sahib", "Pathankot", "Patiala", "Rupnagar", "Sahibzada Ajit Singh Nagar", "Sangrur", "Shahid Bhagat Singh Nagar", "Tarn Taran", "Malerkotla"],
  "Rajasthan": ["Ajmer", "Alwar", "Balotra", "Banswara", "Baran", "Barmer", "Beawar", "Bharatpur", "Bhilwara", "Bikaner", "Bundi", "Chittorgarh", "Churu", "Dausa", "Deeg", "Dungarpur", "Dudu", "Jaipur", "Jaipur Rural", "Jaisalmer", "Jalore", "Jhalawar", "Jhunjhunu", "Jodhpur", "Jodhpur Rural", "Karauli", "Kota", "Kekri", "Khairthal-Tijara", "Kotputli-Behror", "Nagaur", "Pali", "Phalodi", "Pratapgarh", "Rajsamand", "Salumbar", "Sanchore", "Sawai Madhopur", "Shahpura", "Sikar", "Sirohi", "Sri Ganganagar", "Tonk", "Udaipur"],
  "Sikkim": ["Gangtok", "Gyalshing", "Mangan", "Namchi", "Pakyong", "Soreng"],
  "Tamil Nadu": ["Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kallakurichi", "Kanchipuram", "Kanyakumari", "Karur", "Krishnagiri", "Madurai", "Mayiladuthurai", "Nagapattinam", "Namakkal", "Nilgiris", "Perambalur", "Pudukkottai", "Ramanathapuram", "Ranipet", "Salem", "Sivaganga", "Tenkasi", "Thanjavur", "Theni", "Thoothukudi", "Tiruchirappalli", "Tirunelveli", "Tirupattur", "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore", "Viluppuram", "Virudhunagar"],
  "Telangana": ["Adilabad", "Bhadradri Kothagudem", "Hyderabad", "Jagtial", "Jangaon", "Jayashankar Bhupalpally", "Jogulamba Gadwal", "Kamareddy", "Karimnagar", "Khammam", "Komaram Bheem", "Mahabubabad", "Mahabubnagar", "Mancherial", "Medak", "Medchal–Malkajgiri", "Mulugu", "Nagarkurnool", "Nalgonda", "Narayanpet", "Nirmal", "Nizamabad", "Peddapalli", "Rajanna Sircilla", "Ranga Reddy", "Sangareddy", "Siddipet", "Suryapet", "Vikarabad", "Wanaparthy", "Warangal Rural", "Warangal Urban", "Yadadri Bhuvanagiri"],
  "Tripura": ["Dhalai", "Gomati", "Khowai", "North Tripura", "Sepahijala", "South Tripura", "Unakoti", "West Tripura"],
  "Uttar Pradesh": ["Agra", "Aligarh", "Ambedkar Nagar", "Amethi", "Amroha", "Auraiya", "Ayodhya", "Azamgarh", "Badaun", "Baghpat", "Bahraich", "Ballia", "Balrampur", "Banda", "Barabanki", "Bareilly", "Basti", "Bijnor", "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", "Etah", "Etawah", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar", "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hapur", "Hardoi", "Hathras", "Jalaun", "Jaunpur", "Jhansi", "Kannauj", "Kanpur Dehat", "Kanpur Nagar", "Kasganj", "Kaushambi", "Kheri", "Kushinagar", "Lalitpur", "Lucknow", "Maharajganj", "Mahoba", "Mainpuri", "Mathura", "Mau", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh", "Prayagraj", "Raebareli", "Rampur", "Saharanpur", "Sambhal", "Sant Kabir Nagar", "Shahjahanpur", "Shamli", "Shrawasti", "Siddharthnagar", "Sitapur", "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"],
  "Uttarakhand": ["Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun", "Haridwar", "Nainital", "Pauri Garhwal", "Pithoragarh", "Rudraprayag", "Tehri Garhwal", "Udham Singh Nagar", "Uttarkashi"],
  "West Bengal": ["Alipurduar", "Bankura", "Birbhum", "Cooch Behar", "Dakshin Dinajpur", "Darjeeling", "Hooghly", "Howrah", "Jalpaiguri", "Jhargram", "Kalimpong", "Kolkata", "Malda", "Murshidabad", "Nadia", "North 24 Parganas", "Paschim Bardhaman", "Paschim Medinipur", "Purba Bardhaman", "Purba Medinipur", "Purulia", "South 24 Parganas", "Uttar Dinajpur"],
  "Andaman and Nicobar Islands": ["Nicobar", "North and Middle Andaman", "South Andaman"],
  "Chandigarh": ["Chandigarh"],
  "Dadra and Nagar Haveli and Daman and Diu": ["Dadra and Nagar Haveli", "Daman", "Diu"],
  "Delhi": ["Central Delhi", "East Delhi", "New Delhi", "North Delhi", "North East Delhi", "North West Delhi", "Shahdara", "South Delhi", "South East Delhi", "South West Delhi", "West Delhi"],
  "Jammu and Kashmir": ["Anantnag", "Bandipora", "Baramulla", "Budgam", "Doda", "Ganderbal", "Jammu", "Kathua", "Kishtwar", "Kulgam", "Kupwara", "Poonch", "Pulwama", "Rajouri", "Ramban", "Reasi", "Samba", "Shopian", "Srinagar", "Udhampur"],
  "Ladakh": ["Kargil", "Leh"],
  "Lakshadweep": ["Lakshadweep"],
  "Puducherry": ["Karaikal", "Mahe", "Puducherry", "Yanam"]
};

// You can now use this object directly in your JavaScript code
const stateSelect = document.getElementById("regState");
const districtSelect = document.getElementById("regDistrict");

Object.keys(statesAndDistricts).forEach(st => {
  let o = document.createElement("option");
  o.value = st;
  o.textContent = st;
  stateSelect.appendChild(o);
});

stateSelect.addEventListener("change", () => {
  districtSelect.innerHTML = "<option value=''>Select District</option>";
  (statesAndDistricts[stateSelect.value] || []).forEach(d => {
    let o = document.createElement("option");
    o.value = d;
    o.textContent = d;
    districtSelect.appendChild(o);
  });
});

/* ===== Page switching ===== */
function showPage(id) {
  document.querySelectorAll("body > div").forEach(d => d.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

/* ===== Registration ===== */
document.getElementById("registerForm").addEventListener("submit", e => {
  e.preventDefault();
  if (regPassword.value !== regConfirmPassword.value) {
    alert("Passwords do not match!");
    return;
  }
  if (!/^[1-9][0-9]{9}$/.test(regPhone.value)) {
    alert("Enter a valid 10-digit phone number (not starting with 0)");
    return;
  }
  const profile = {
    name: regName.value,
    username: regUsername.value,
    password: regPassword.value,
    state: regState.value,
    district: regDistrict.value,
    village: regVillage.value,
    water: regWater.value,
    area: regArea.value + " ha",
    phone: regPhone.value,
    email: regEmail.value,
    locationName: (document.getElementById('regLocationName').value || '')
  };
  localStorage.setItem("farmerProfile", JSON.stringify(profile));
  loadProfile();
  showPage("appPage");
  setActiveView("dashboard");
  // default assistant visible
  toggleAssistant(true);
});

/* ===== Login ===== */
document.getElementById("loginForm").addEventListener("submit", e => {
  e.preventDefault();
  const stored = JSON.parse(localStorage.getItem("farmerProfile") || "{}");
  if (loginUsername.value === stored.username && loginPassword.value === stored.password) {
    loadProfile();
    showPage("appPage");
    setActiveView("dashboard");
    toggleAssistant(false);
  } else {
    alert("Invalid username or password!");
  }
});

/* ===== Nav handling ===== */
const views = ["dashboard", "profile", "soil", "recommendation", "fertilizers", "pesticides", "weather", "mandi", "farmhistory", "learning", "settings"];
function setActiveView(v) {
  document.querySelectorAll(".nav-item").forEach(b => b.classList.remove("active"));
  document.querySelectorAll(".view").forEach(s => s.style.display = "none");
  const btn = document.querySelector(`.nav-item[data-view='${v}']`);
  if (btn) btn.classList.add("active");
  const view = document.getElementById("view-" + v) || document.getElementById("view-" + v);
  if (view) view.style.display = "block";
  if (v === "profile") loadProfile();
  if (v === "weather") loadWeather();
  if (v === "recommendation") loadRecommendation();
  if (v === "mandi") loadMandi();
  if (v === "farmhistory") loadFarmHistory();
}
document.querySelectorAll(".nav-item").forEach(b => b.addEventListener("click", () => setActiveView(b.dataset.view)));

/* ===== Profile Load ===== */
function loadProfile() {
  const p = JSON.parse(localStorage.getItem("farmerProfile") || "{}");
  
  // Account Details
  document.getElementById("profileName").textContent = p.name || "-";
  document.getElementById("profileUsername").textContent = p.username || "-";
  document.getElementById("profileEmail").textContent = p.email || "-";
  document.getElementById("profilePhone").textContent = p.phone || "-";
  
  // Farm Information
  document.getElementById("profileLocationSmall").textContent = p.locationName || "";
  document.getElementById("profileStateDistrict").textContent = (p.state ? p.state + ' / ' + (p.district || '') : '-');
  document.getElementById("profileArea").textContent = p.area || "-";
  document.getElementById("profileVillage").textContent = p.village || "-";
  document.getElementById("profileWater").textContent = p.water || "-";
}

function editProfile() {
  const p = JSON.parse(localStorage.getItem("farmerProfile") || "{}");
  const updatedName = prompt("Name:", p.name || '');
  if (updatedName !== null) p.name = updatedName;
  const updatedEmail = prompt("Email:", p.email || '');
  if (updatedEmail !== null) p.email = updatedEmail;
  localStorage.setItem("farmerProfile", JSON.stringify(p));
  loadProfile();
  alert('Profile updated');
}

function exportProfile() {
  const p = JSON.parse(localStorage.getItem("farmerProfile") || "{}");
  const blob = new Blob([JSON.stringify(p, null, 2)], {
    type: 'application/json'
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'farmer_profile.json';
  a.click();
  URL.revokeObjectURL(url);
}
/* ===== Soil Form ===== */
document.getElementById("soilForm").addEventListener("submit", e => {
  e.preventDefault();
  const soil = {
    N: soilN.value,
    P: soilP.value,
    K: soilK.value,
    PH: soilPH.value,
    OC: soilOC.value,
    type: soilType.value,
    file: soilFile.value
  };
  localStorage.setItem("soilReport", JSON.stringify(soil));
  
  // Clear old recommendations so a new set can be generated
  localStorage.removeItem("currentRecommendations");
  
  alert("Soil Report Submitted! Go to Recommendations.");
  setActiveView("recommendation");
});
/* ===== Mock Weather (shows user 'locationName' if provided) ===== */
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function loadWeather() {
  const p = JSON.parse(localStorage.getItem("farmerProfile") || "{}");
  const locDisplay = p.locationName || (p.village || 'Your Location');

  document.getElementById("weatherLocation").textContent = locDisplay;
  
  const weatherIcons = {
    'Sunny': '☀️',
    'Partly Cloudy': '⛅',
    'Cloudy': '☁️',
    'Light Rain': '🌧️',
    'Clear': '✨'
  };
  
  const weatherData = [];
  const today = new Date();
  
  for (let i = -8; i <= 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    const temp = randomInt(20, 38);
    const hum = randomInt(40, 90);
    const conditions = ['Sunny', 'Partly Cloudy', 'Cloudy', 'Light Rain', 'Clear'];
    const cond = conditions[randomInt(0, conditions.length - 1)];
    const icon = weatherIcons[cond];
    
    weatherData.push({
      day: i === 0 ? "Today" : date.toLocaleDateString('en-US', { weekday: 'short' }),
      date: date.toLocaleDateString('en-US', { day: 'numeric', month: 'short' }),
      temp: `${temp}°C`,
      hum: `${hum}%`,
      cond: cond,
      icon: icon
    });
  }
  
  // Populate today's weather card
  const todayData = weatherData.find(day => day.day === "Today");
  document.getElementById("todayCondition").textContent = todayData.icon;
  document.getElementById("todayTemp").textContent = todayData.temp;
  document.getElementById("todayHum").textContent = `Humidity: ${todayData.hum}`;
  
  // Populate the 16-day forecast grid
  const forecastDiv = document.getElementById("weatherForecast");
  forecastDiv.innerHTML = ''; // Clear previous data
  
  weatherData.forEach((dayData, index) => {
    // Skip today in the forecast grid
    if (index !== 8) {
      forecastDiv.innerHTML += `
        <div class="flex flex-col items-center p-3 rounded-lg border border-slate-200">
          <div class="text-xs font-semibold text-slate-500">${dayData.day}</div>
          <div class="text-xs text-slate-400 mt-1">${dayData.date}</div>
          <div class="text-2xl mt-2">${dayData.icon}</div>
          <div class="text-sm font-medium mt-1">${dayData.temp}</div>
          <div class="text-xs text-slate-500">${dayData.hum}</div>
        </div>
      `;
    }
  });
}
/* ===== Recommendations (random pick) ===== */
const cropData = [{
    crop: "Wheat",
    production: "3.5 tons/acre",
    fertilizers: ["Urea", "DAP", "SSP"],
    pesticides: ["Neem Oil", "Chlorpyrifos"]
  }, {
    crop: "Rice",
    production: "4.2 tons/acre",
    fertilizers: ["Potash", "Ammonium Sulphate", "Urea"],
    pesticides: ["Malathion", "Carbofuran"]
  }, {
    crop: "Maize",
    production: "3 tons/acre",
    fertilizers: ["NPK 20:20:0", "Zinc Sulphate", "MOP"],
    pesticides: ["Atrazine", "Cypermethrin"]
  }, {
    crop: "Cotton",
    production: "2.5 tons/acre",
    fertilizers: ["Superphosphate", "Urea", "Potash"],
    pesticides: ["Imidacloprid", "Acetamiprid"]
  }, {
    crop: "Sugarcane",
    production: "6 tons/acre",
    fertilizers: ["Nitrogen Urea", "DAP", "Potash"],
    pesticides: ["Glyphosate", "2,4-D"]
  }, {
    crop: "Potato",
    production: "25 tons/acre",
    fertilizers: ["DAP", "SSP", "Potash"],
    pesticides: ["Mancozeb", "Carbaryl"]
  }, {
    crop: "Soybean",
    production: "1.5 tons/acre",
    fertilizers: ["SSP", "MOP"],
    pesticides: ["Thiamethoxam", "Lambda-cyhalothrin"]
  }, {
    crop: "Groundnut",
    production: "2.2 tons/acre",
    fertilizers: ["Gypsum", "Urea"],
    pesticides: ["Dichlorvos", "Endosulfan"]
  }, {
    crop: "Chickpea",
    production: "1.8 tons/acre",
    fertilizers: ["DAP", "Urea"],
    pesticides: ["Emamectin benzoate", "Lambda-cyhalothrin"]
  }, {
    crop: "Mustard",
    production: "1.2 tons/acre",
    fertilizers: ["SSP", "Urea", "Zinc Sulphate"],
    pesticides: ["Imidacloprid", "Chlorpyrifos"]
  }, {
    crop: "Tomato",
    production: "20 tons/acre",
    fertilizers: ["NPK 19:19:19", "Calcium Nitrate"],
    pesticides: ["Mancozeb", "Azoxystrobin"]
  }, {
    crop: "Onion",
    production: "18 tons/acre",
    fertilizers: ["Urea", "DAP", "Potash"],
    pesticides: ["Carbofuran", "Thiophanate-methyl"]
  }, {
    crop: "Cabbage",
    production: "15 tons/acre",
    fertilizers: ["NPK 10:26:26", "Calcium Nitrate"],
    pesticides: ["Chlorpyrifos", "Lambda-cyhalothrin"]
  }, {
    crop: "Lentil",
    production: "1.0 tons/acre",
    fertilizers: ["DAP", "SSP"],
    pesticides: ["Dimethoate", "Chlorpyrifos"]
  }, {
    crop: "Pigeon Pea",
    production: "1.5 tons/acre",
    fertilizers: ["Urea", "MOP"],
    pesticides: ["Imidacloprid", "Spinosad"]
  }
];

function loadRecommendation() {
  // Check if recommendations already exist in local storage
  let recommendations = JSON.parse(localStorage.getItem("currentRecommendations"));

  if (!recommendations) {
    // If not, generate a new random set
    recommendations = [];
    const selectedIndices = new Set();
    
    // Select 3 random unique crops
    while (selectedIndices.size < 3 && selectedIndices.size < cropData.length) {
      const randomIndex = Math.floor(Math.random() * cropData.length);
      if (!selectedIndices.has(randomIndex)) {
        selectedIndices.add(randomIndex);
        recommendations.push(cropData[randomIndex]);
      }
    }
    
    // Save the new recommendations to local storage
    localStorage.setItem("currentRecommendations", JSON.stringify(recommendations));
  }

  // Clear previous UI content
  const recDiv = document.getElementById("recommendationData");
  const fertDiv = document.getElementById("fertilizerData");
  const pestDiv = document.getElementById("pesticideData");
  
  recDiv.innerHTML = '';
  fertDiv.innerHTML = '';
  pestDiv.innerHTML = '';

  // Populate UI with recommendations
  recommendations.forEach(rec => {
    // Crop Card
    recDiv.innerHTML += `
      <div class="bg-slate-50 p-6 rounded-xl shadow-inner border border-slate-200">
        <h3 class="text-xl font-bold text-green-700">${rec.crop}</h3>
        <p class="text-sm text-slate-500 mt-2">Expected Production: ${rec.production}</p>
      </div>
    `;

    // Fertilizer Card
    fertDiv.innerHTML += `
      <div class="bg-slate-50 p-6 rounded-xl shadow-inner border border-slate-200">
        <h3 class="text-xl font-bold text-green-700">${rec.crop}</h3>
        <ul class="list-disc list-inside text-sm text-slate-600 mt-2">
          ${rec.fertilizers.map(f => `<li>${f}</li>`).join('')}
        </ul>
      </div>
    `;

    // Pesticide Card
    pestDiv.innerHTML += `
      <div class="bg-slate-50 p-6 rounded-xl shadow-inner border border-slate-200">
        <h3 class="text-xl font-bold text-green-700">${rec.crop}</h3>
        <ul class="list-disc list-inside text-sm text-slate-600 mt-2">
          ${rec.pesticides.map(p => `<li>${p}</li>`).join('')}
        </ul>
      </div>
    `;
  });
}

/* ===== Mandi (mock random prices) ===== */
/* ===== Mandi (random prices for all crops) ===== */
const cropDat = [{
    crop: "Wheat"
  }, {
    crop: "Rice"
  }, {
    crop: "Maize"
  }, {
    crop: "Cotton"
  }, {
    crop: "Sugarcane"
  }, {
    crop: "Potato"
  }, {
    crop: "Soybean"
  }, {
    crop: "Groundnut"
  }, {
    crop: "Chickpea"
  }, {
    crop: "Mustard"
  }, {
    crop: "Tomato"
  }, {
    crop: "Onion"
  }, {
    crop: "Cabbage"
  }, {
    crop: "Lentil"
  }, {
    crop: "Pigeon Pea"
  }
];

// This is the function that was missing
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function loadMandi() {
  const mandiLocations = ['Azamgarh', 'Yavatmal', 'Ludhiana', 'Vijayawada', 'Indore', 'Bhopal', 'Jaipur', 'Varanasi', 'Patna', 'Bengaluru'];
  
  let html = '';
  cropData.forEach(item => {
    const rate = randomInt(1800, 4200);
    const mandi = mandiLocations[randomInt(0, mandiLocations.length - 1)];
    
    html += `
      <tr>
        <td class="p-3">${item.crop}</td>
        <td class="p-3">₹${rate}</td>
        <td class="p-3">${mandi}</td>
      </tr>
    `;
  });
  
  document.getElementById('mandiData').innerHTML = html;
}




// Function to generate a random response
const responses = {
  greetings: [
    "Hello! How can I assist you with your farming needs today?",
    "Hi there! What farming questions do you have?",
    "Greetings! I'm ready to help. What's on your mind?"
  ],
  weather: [
    "The weather forecast is for clear skies and a temperature of 30°C. Perfect for field work!",
    "Expect some light rainfall in the coming days. Make sure your drainage is good.",
    "It's going to be a sunny week. Consider timely irrigation to keep your crops healthy."
  ],
  mandi: [
    "Mandi prices for wheat are currently stable. It might be a good time to sell.",
    "The price of rice has slightly increased. Monitor the market for a few more days.",
    "We've seen a dip in maize prices this week. It's best to check with your local mandi."
  ],
  soil: [
    "A soil report helps you understand what nutrients your soil is missing. It's a great first step.",
    "Based on your report, your soil needs more nitrogen for better crop yield.",
    "Remember to do a soil test every season to keep your crops healthy."
  ],
  sowing: [
    "The best time to sow wheat is after the monsoon season, when the soil is cool.",
    "For rice, the best sowing time depends on the monsoon arrival. Consult the weather forecast.",
    "Maize can be sown at different times depending on the variety. Make sure your field is well-prepared."
  ],
  pests: [
    "Regular scouting is the best way to catch pests early. Keep an eye on the underside of leaves.",
    "Neem oil is a great natural pesticide for many common pests. Apply it in the evening.",
    "For serious infestations, it's best to consult a local agricultural expert."
  ],
  default: [
    "I'm sorry, I don't have information on that topic. Can you please rephrase your question?",
    "I'm still learning! Can you ask about crops, soil, or weather?",
    "That's a great question! I'm unable to answer it right now, but I'll make a note of it."
  ]
};

function getRandomResponse(query) {
  const q = query.toLowerCase();

  if (q.includes("hi") || q.includes("hello") || q.includes("hey") || q.includes("greetings")) {
    return responses.greetings[Math.floor(Math.random() * responses.greetings.length)];
  }
  if (q.includes("weather") || q.includes("rain") || q.includes("sun")) {
    return responses.weather[Math.floor(Math.random() * responses.weather.length)];
  }
  if (q.includes("mandi") || q.includes("price") || q.includes("sell")) {
    return responses.mandi[Math.floor(Math.random() * responses.mandi.length)];
  }
  if (q.includes("soil") || q.includes("nutrients") || q.includes("report")) {
    return responses.soil[Math.floor(Math.random() * responses.soil.length)];
  }
  if (q.includes("sow") || q.includes("planting") || q.includes("seed")) {
    return responses.sowing[Math.floor(Math.random() * responses.sowing.length)];
  }
  if (q.includes("pests") || q.includes("insects") || q.includes("disease")) {
    return responses.pests[Math.floor(Math.random() * responses.pests.length)];
  }

  return responses.default[Math.floor(Math.random() * responses.default.length)];
}

function processAssistantInput(input) {
  const q = input.trim();
  if (!q) return;

  const chatHistoryDiv = document.getElementById('chat-history');
  const assistantInput = document.getElementById('assistantInput');

  // Display user's message in a chat-like format
  const userMessage = document.createElement('div');
  userMessage.className = 'text-sm text-right text-green-700 mt-2';
  userMessage.textContent = `You: ${q}`;
  chatHistoryDiv.appendChild(userMessage);

  // Display "Thinking..." message
  const thinkingMessage = document.createElement('div');
  thinkingMessage.className = 'text-sm text-left text-slate-500 mt-2';
  thinkingMessage.textContent = 'Assistant: Thinking...';
  chatHistoryDiv.appendChild(thinkingMessage);

  // Clear the input field
  assistantInput.value = '';

  // Scroll to the bottom of the chat window
  chatHistoryDiv.scrollTop = chatHistoryDiv.scrollHeight;

  setTimeout(() => {
    const response = getRandomResponse(q);

    // Remove "Thinking..." message and add the response
    thinkingMessage.textContent = `Assistant: ${response}`;
    chatHistoryDiv.scrollTop = chatHistoryDiv.scrollHeight;
  }, 700);
}

// Event Listeners
document.getElementById('assistantSend').addEventListener('click', () => {
  const input = document.getElementById('assistantInput').value;
  processAssistantInput(input);
});

document.getElementById('assistantInput').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const input = document.getElementById('assistantInput').value;
    processAssistantInput(input);
  }
});

// Speech Recognition for Mic
const micBtn = document.getElementById('micBtn');
const assistantInput = document.getElementById('assistantInput');

if (window.SpeechRecognition || window.webkitSpeechRecognition) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.lang = 'en-IN'; // Set language to Indian English

  micBtn.addEventListener('click', () => {
    micBtn.textContent = '🔴';
    assistantInput.placeholder = 'Listening...';
    recognition.start();
  });

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    assistantInput.value = transcript;
    micBtn.textContent = '🎤';
    assistantInput.placeholder = 'e.g. When to sow wheat?';
    processAssistantInput(transcript);
  };

  recognition.onend = () => {
    micBtn.textContent = '🎤';
    assistantInput.placeholder = 'e.g. When to sow wheat?';
  };

  recognition.onerror = (event) => {
    console.error('Speech recognition error:', event.error);
    micBtn.textContent = '🎤';
    assistantInput.placeholder = 'e.g. When to sow wheat?';
    alert('Speech recognition failed. Please type your query.');
  };
} else {
  // Hide the mic button if the API is not supported
  micBtn.style.display = 'none';
  console.warn('Speech Recognition not supported in this browser.');
}

// Existing toggle functions
function toggleAssistant(open) {
  const a = document.getElementById('assistant');
  const openBtn = document.getElementById('openAssistant');
  if (open) {
    a.classList.remove('hidden');
    a.classList.remove('min');
    openBtn.classList.add('hidden');
  } else {
    a.classList.add('hidden');
    openBtn.classList.remove('hidden');
  }
}
document.getElementById('assistantMinBtn').addEventListener('click', () => {
  const a = document.getElementById('assistant');
  a.classList.toggle('min');
  if (a.classList.contains('min')) {
    document.getElementById('assistantContent').style.display = 'none';
  } else {
    document.getElementById('assistantContent').style.display = 'block';
  }
});
document.getElementById('assistantCloseBtn').addEventListener('click', () => {
  toggleAssistant(false);
});

// Call this at the end of the script to ensure assistant is initially hidden
toggleAssistant(false);










/* ===== Farm History (mock & stored soil reports) ===== */
function loadFarmHistory() {
  const soil = JSON.parse(localStorage.getItem('soilReport') || '{}');
  let html = '';

  if (Object.keys(soil).length) {
    // If a soil report exists, display it in a clean card
    html = `
      <div class="bg-slate-50 p-6 rounded-xl shadow-inner border border-slate-200 space-y-4">
        <h3 class="text-xl font-semibold text-slate-800">Recent Soil Report</h3>
        <div class="grid grid-cols-2 gap-4 text-sm">
          <div>
            <label class="font-medium text-slate-600">Soil Type</label>
            <div class="mt-1 text-slate-800">${soil.type || 'N/A'}</div>
          </div>
          <div>
            <label class="font-medium text-slate-600">N-P-K</label>
            <div class="mt-1 text-slate-800">${soil.N} / ${soil.P} / ${soil.K}</div>
          </div>
          <div>
            <label class="font-medium text-slate-600">pH Value</label>
            <div class="mt-1 text-slate-800">${soil.PH || 'N/A'}</div>
          </div>
          <div>
            <label class="font-medium text-slate-600">Organic Carbon</label>
            <div class="mt-1 text-slate-800">${soil.OC || 'N/A'}%</div>
          </div>
        </div>
      </div>
    `;
  } else {
    // Display a message if no soil report is found
    html = `
      <div class="p-6 text-center text-slate-500 bg-white rounded-xl shadow-md border border-slate-200">
        <p>No recent soil report available. Please submit one via the Soil Report page.</p>
      </div>
    `;
  }

  document.getElementById('farmHistoryData').innerHTML = html;
}

/* ===== Logout ===== */
function logout() {
  localStorage.removeItem("farmerProfile");
  localStorage.removeItem("soilReport");
  showPage("welcomePage");
  document.getElementById('assistant').classList.add('hidden');
}

/* ===== Assistant controls ===== */
function loadDashboard() {
  const p = JSON.parse(localStorage.getItem("farmerProfile") || "{}");
  const soil = JSON.parse(localStorage.getItem("soilReport") || "{}");
  const recommendations = JSON.parse(localStorage.getItem("currentRecommendations") || "[]");

  // --- Populate Quick Insights ---
  // Weather Insight
  const temp = randomInt(20, 38);
  const cond = ['Sunny', 'Partly Cloudy', 'Cloudy', 'Light Rain', 'Clear'][randomInt(0, 4)];
  const weatherText = `<span class="font-bold">${temp}°C</span> | ${cond} in ${p.locationName || p.district || 'your area'}.`;
  document.getElementById("quickWeather").innerHTML = weatherText;

  // Mandi Price Insight
  // We need to access the cropData array used in loadMandi()
  const cropDataForMandi = [{
    crop: "Wheat"
  }, {
    crop: "Rice"
  }, {
    crop: "Maize"
  }, {
    crop: "Cotton"
  }, {
    crop: "Sugarcane"
  }, {
    crop: "Potato"
  }, {
    crop: "Soybean"
  }, {
    crop: "Groundnut"
  }, {
    crop: "Chickpea"
  }, {
    crop: "Mustard"
  }, {
    crop: "Tomato"
  }, {
    crop: "Onion"
  }, {
    crop: "Cabbage"
  }, {
    crop: "Lentil"
  }, {
    crop: "Pigeon Pea"
  }];

  const quickMandiItem = cropDataForMandi[randomInt(0, cropDataForMandi.length - 1)];
  const quickMandiRate = randomInt(1800, 4200);
  const mandiText = `<span class="font-bold">₹${quickMandiRate}</span> per quintal for ${quickMandiItem.crop}.`;
  document.getElementById("quickMandi").innerHTML = mandiText;


  // Recommendation Insight
  if (recommendations.length > 0) {
    const recText = `Your top recommended crop is <span class="font-bold">${recommendations[0].crop}</span>.`;
    document.getElementById("quickRecommendation").innerHTML = recText;
  } else {
    document.getElementById("quickRecommendation").innerHTML = `
      Please submit a soil report to get your first recommendation.
    `;
  }

  // --- Populate Recent Activity & Recommendations ---
  const activityDiv = document.getElementById("recentActivity");
  activityDiv.innerHTML = ''; // Clear previous content

  // Example: Recent Soil Report
  if (Object.keys(soil).length) {
    activityDiv.innerHTML += `
      <div class="flex items-center space-x-3">
        <span class="text-xl">🧪</span>
        <div>
          <div class="font-semibold text-slate-800">Soil Report Submitted</div>
          <p class="text-sm text-slate-500">Your soil has been analyzed for N-P-K, pH, and organic carbon.</p>
        </div>
      </div>
    `;
  }

  // Example: Recommendation generated
  if (recommendations.length > 0) {
    activityDiv.innerHTML += `
      <div class="flex items-center space-x-3">
        <span class="text-xl">🌾</span>
        <div>
          <div class="font-semibold text-slate-800">New Crop Recommendations</div>
          <p class="text-sm text-slate-500">Based on your soil report, we recommend crops like ${recommendations[0].crop}, ${recommendations[1].crop}, and more.</p>
        </div>
      </div>
    `;
  }

  // Default message if no activity
  if (activityDiv.innerHTML === '') {
    activityDiv.innerHTML = `
      <div class="text-center text-slate-500 py-4">
        No recent activity. Start by submitting your soil report!
      </div>
    `;
  }
}
/* ===== Init default view on load ===== */
// show welcome by default
showPage('welcomePage');