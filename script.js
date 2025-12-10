// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Expand tutorial details
function expandTutorial(index) {
    const tutorialDetails = document.getElementById(`tutorial-${index}`);
    if (tutorialDetails) {
        tutorialDetails.classList.toggle('hidden');
    }
}

// Toggle component guide
function toggleComponentGuide() {
    const guide = document.getElementById('component-guide');
    if (guide) {
        guide.classList.toggle('hidden');
    }
}

// Toggle pinout guide
function togglePinout() {
    const pinout = document.getElementById('pinout-guide');
    if (pinout) {
        pinout.classList.toggle('hidden');
    }
}

// Toggle common mistakes
function toggleMistakes() {
    const mistakes = document.getElementById('mistakes-guide');
    if (mistakes) {
        mistakes.classList.toggle('hidden');
    }
}

// Project data
const projects = {
    traffic: {
        title: 'Traffic Light System',
        description: 'Build a working traffic light using LEDs and Arduino.',
        difficulty: 'Beginner',
        components: [
            'Arduino Uno',
            'Red LED',
            'Yellow LED',
            'Green LED',
            '3x 220Ω Resistors',
            'Jumper wires',
            'Breadboard'
        ],
        code: `// Traffic Light System
const int redPin = 13;
const int yellowPin = 12;
const int greenPin = 11;

void setup() {
  pinMode(redPin, OUTPUT);
  pinMode(yellowPin, OUTPUT);
  pinMode(greenPin, OUTPUT);
}

void loop() {
  // Red light
  digitalWrite(redPin, HIGH);
  delay(5000);
  digitalWrite(redPin, LOW);

  // Yellow light
  digitalWrite(yellowPin, HIGH);
  delay(2000);
  digitalWrite(yellowPin, LOW);

  // Green light
  digitalWrite(greenPin, HIGH);
  delay(5000);
  digitalWrite(greenPin, LOW);
}`,
        steps: [
            'Connect RED LED to pin 13 (with 220Ω resistor)',
            'Connect YELLOW LED to pin 12 (with 220Ω resistor)',
            'Connect GREEN LED to pin 11 (with 220Ω resistor)',
            'Connect all resistor other ends and LED cathodes to GND',
            'Upload the code and watch the traffic light cycle'
        ]
    },
    temp: {
        title: 'Temperature Monitor',
        description: 'Read temperature and display on LCD screen.',
        difficulty: 'Intermediate',
        components: [
            'Arduino Uno',
            'LM35 Temperature Sensor',
            '16x2 LCD Display',
            '10kΩ Potentiometer',
            'Jumper wires',
            'Breadboard'
        ],
        code: `// Temperature Monitor with LCD
#include <LiquidCrystal.h>

LiquidCrystal lcd(12, 11, 5, 4, 3, 2);
const int tempSensor = A0;

void setup() {
  lcd.begin(16, 2);
  lcd.print("Temp Monitor");
  delay(2000);
  lcd.clear();
}

void loop() {
  int rawValue = analogRead(tempSensor);
  float voltage = rawValue * (5.0 / 1023.0);
  float temperature = voltage * 100;

  lcd.setCursor(0, 0);
  lcd.print("Temp: ");
  lcd.print(temperature);
  lcd.print("C");
  
  delay(1000);
}`,
        steps: [
            'Connect LM35 sensor: GND, A0, 5V',
            'Connect LCD pins: RS=12, E=11, D4=5, D5=4, D6=3, D7=2',
            'Connect LCD: VSS to GND, VDD to 5V, V0 to pot, A to 5V, K to GND',
            'Upload the temperature monitoring code',
            'View real-time temperature on LCD display'
        ]
    },
    motion: {
        title: 'Motion Detector Alarm',
        description: 'Create a motion detection system with buzzer alert.',
        difficulty: 'Intermediate',
        components: [
            'Arduino Uno',
            'PIR Motion Sensor',
            'Buzzer (5V)',
            'Red LED',
            '220Ω Resistor',
            'Jumper wires',
            'Breadboard'
        ],
        code: `// Motion Detector with Alarm
const int pirPin = 7;
const int buzzerPin = 9;
const int ledPin = 13;
const int delayTime = 5000; // 5 seconds

int motionDetected = 0;

void setup() {
  pinMode(pirPin, INPUT);
  pinMode(buzzerPin, OUTPUT);
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
  Serial.println("Motion detector started");
}

void loop() {
  motionDetected = digitalRead(pirPin);

  if (motionDetected) {
    Serial.println("Motion detected!");
    digitalWrite(ledPin, HIGH);
    digitalWrite(buzzerPin, HIGH);
    delay(500);
    digitalWrite(buzzerPin, LOW);
    delay(500);
  } else {
    digitalWrite(ledPin, LOW);
    digitalWrite(buzzerPin, LOW);
  }

  delay(100);
}`,
        steps: [
            'Connect PIR sensor: GND, pin 7, 5V',
            'Connect Buzzer: pin 9 to positive, GND to negative',
            'Connect LED: pin 13 with 220Ω resistor',
            'Allow PIR sensor 30-60 seconds to calibrate',
            'Test by moving in front of the PIR sensor'
        ]
    },
    watering: {
        title: 'Plant Watering System',
        description: 'Automatic plant watering based on soil moisture.',
        difficulty: 'Advanced',
        components: [
            'Arduino Uno',
            'Soil Moisture Sensor',
            'Water Pump (12V with relay)',
            'Relay Module',
            'Jumper wires',
            'Breadboard'
        ],
        code: `// Automatic Plant Watering System
const int soilPin = A0;
const int relayPin = 8;
const int ledPin = 13;
const int threshold = 400; // Adjust based on your sensor

void setup() {
  pinMode(relayPin, OUTPUT);
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
  digitalWrite(relayPin, LOW); // Pump off initially
}

void loop() {
  int soilMoisture = analogRead(soilPin);
  
  Serial.print("Soil Moisture: ");
  Serial.println(soilMoisture);

  // If soil is dry
  if (soilMoisture < threshold) {
    Serial.println("Soil dry - Starting watering");
    digitalWrite(ledPin, HIGH);
    digitalWrite(relayPin, HIGH); // Turn on pump
    delay(5000); // Water for 5 seconds
    digitalWrite(relayPin, LOW); // Turn off pump
    digitalWrite(ledPin, LOW);
    delay(30000); // Wait 30 seconds before next check
  } else {
    Serial.println("Soil moist");
    digitalWrite(ledPin, LOW);
  }

  delay(10000); // Check every 10 seconds
}`,
        steps: [
            'Connect Soil Moisture Sensor: GND, A0, 5V',
            'Connect Relay: GND, pin 8, 5V',
            'Connect pump to relay (check relay documentation)',
            'Calibrate threshold value for your soil and sensor',
            'Test in a pot with soil and plant'
        ]
    }
};

// Show project details
function showProject(projectKey) {
    const project = projects[projectKey];
    if (!project) return;

    const projectDetails = document.getElementById('project-details');
    const html = `
        <h3>${project.title}</h3>
        <p><strong>Difficulty:</strong> ${project.difficulty}</p>
        
        <h4>Components Needed:</h4>
        <ul>
            ${project.components.map(comp => `<li>${comp}</li>`).join('')}
        </ul>
        
        <h4>Code:</h4>
        <pre><code>${escapeHtml(project.code)}</code></pre>
        
        <h4>Assembly Steps:</h4>
        <ol>
            ${project.steps.map(step => `<li>${step}</li>`).join('')}
        </ol>
        
        <button onclick="printProject('${projectKey}')" style="background-color: #007BFF; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin-top: 1rem;">
            Print Project
        </button>
    `;
    
    projectDetails.innerHTML = html;
    projectDetails.classList.remove('hidden');
    
    // Scroll to project details
    projectDetails.scrollIntoView({ behavior: 'smooth' });
}

// Print project details
function printProject(projectKey) {
    window.print();
}

// Escape HTML for safe display
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// Modal functions
function openModal(type) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');

    let content = '';

    switch(type) {
        case 'subscribe':
            content = `
                <h3>Subscribe to Newsletter</h3>
                <p>Get weekly Arduino tips and project ideas!</p>
                <div class="form-group">
                    <label>Email Address:</label>
                    <input type="email" placeholder="your@email.com" id="email">
                </div>
                <div class="form-group">
                    <label>Interest Level:</label>
                    <select style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 5px;">
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                    </select>
                </div>
                <button class="submit-btn" onclick="submitSubscribe()">Subscribe</button>
            `;
            break;
        case 'feedback':
            content = `
                <h3>Send Your Feedback</h3>
                <p>Help us improve the learning experience!</p>
                <div class="form-group">
                    <label>Your Name:</label>
                    <input type="text" placeholder="Your name" id="name">
                </div>
                <div class="form-group">
                    <label>Your Feedback:</label>
                    <textarea placeholder="Tell us what you think..." id="feedback"></textarea>
                </div>
                <button class="submit-btn" onclick="submitFeedback()">Send Feedback</button>
            `;
            break;
        case 'share':
            content = `
                <h3>Share Your Project</h3>
                <p>Tell us about your Arduino project!</p>
                <div class="form-group">
                    <label>Project Name:</label>
                    <input type="text" placeholder="Project name" id="projectName">
                </div>
                <div class="form-group">
                    <label>Description:</label>
                    <textarea placeholder="Describe your project..." id="projectDesc"></textarea>
                </div>
                <div class="form-group">
                    <label>Code/Link:</label>
                    <input type="text" placeholder="GitHub link or code snippet" id="projectCode">
                </div>
                <button class="submit-btn" onclick="submitProject()">Share Project</button>
            `;
            break;
    }

    modalBody.innerHTML = content;
    modal.classList.remove('hidden');
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');
    modal.style.display = 'none';
}

// Form submission functions
function submitSubscribe() {
    const email = document.getElementById('email').value;
    if (email) {
        alert(`Thank you for subscribing! We'll send updates to ${email}`);
        closeModal();
    } else {
        alert('Please enter your email address');
    }
}

function submitFeedback() {
    const name = document.getElementById('name').value;
    const feedback = document.getElementById('feedback').value;
    if (name && feedback) {
        alert(`Thank you ${name}! Your feedback has been received.`);
        closeModal();
    } else {
        alert('Please fill in all fields');
    }
}

function submitProject() {
    const name = document.getElementById('projectName').value;
    const desc = document.getElementById('projectDesc').value;
    if (name && desc) {
        alert(`Thank you for sharing "${name}"! We'll review your project soon.`);
        closeModal();
    } else {
        alert('Please fill in all fields');
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}

// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('Arduino Learning Hub loaded successfully!');
    
    // Initialize all charts with default data
    initializeTemperatureChart();
    initializeHumidityChart();
    initializeVoltageChart();
    initializeLightChart();
    initializeMultiSensorChart();
    initializeComparisonChart();
});

// Chart configuration
let temperatureChart, humidityChart, voltageChart, lightChart, multiSensorChart, comparisonChart;

// Temperature Chart
function initializeTemperatureChart() {
    const ctx = document.getElementById('temperatureChart').getContext('2d');
    temperatureChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '23:59'],
            datasets: [{
                label: 'Temperature (°C)',
                data: [20, 22, 25, 28, 26, 23, 21],
                borderColor: '#FF6384',
                backgroundColor: 'rgba(255, 99, 132, 0.1)',
                borderWidth: 2,
                tension: 0.4,
                fill: true,
                pointRadius: 5,
                pointBackgroundColor: '#FF6384',
                pointBorderColor: '#fff',
                pointBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    labels: { font: { size: 12 } }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 15,
                    max: 35,
                    title: { display: true, text: 'Temperature (°C)' }
                }
            }
        }
    });
}

function generateTemperatureData() {
    const newData = Array.from({ length: 7 }, () => Math.floor(Math.random() * 15) + 20);
    temperatureChart.data.datasets[0].data = newData;
    temperatureChart.update();
}

// Humidity Chart
function initializeHumidityChart() {
    const ctx = document.getElementById('humidityChart').getContext('2d');
    humidityChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '23:59'],
            datasets: [{
                label: 'Humidity (%)',
                data: [45, 48, 52, 60, 58, 50, 46],
                borderColor: '#36A2EB',
                backgroundColor: 'rgba(54, 162, 235, 0.1)',
                borderWidth: 2,
                tension: 0.4,
                fill: true,
                pointRadius: 5,
                pointBackgroundColor: '#36A2EB',
                pointBorderColor: '#fff',
                pointBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    labels: { font: { size: 12 } }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    min: 0,
                    max: 100,
                    title: { display: true, text: 'Humidity (%)' }
                }
            }
        }
    });
}

function generateHumidityData() {
    const newData = Array.from({ length: 7 }, () => Math.floor(Math.random() * 60) + 30);
    humidityChart.data.datasets[0].data = newData;
    humidityChart.update();
}

// Voltage Chart
function initializeVoltageChart() {
    const ctx = document.getElementById('voltageChart').getContext('2d');
    voltageChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Pin A0', 'Pin A1', 'Pin A2', 'Pin A3', 'Pin A4', 'Pin A5'],
            datasets: [{
                label: 'Voltage (V)',
                data: [2.5, 3.2, 1.8, 4.1, 2.9, 3.5],
                backgroundColor: [
                    '#FFCE56',
                    '#FF9F40',
                    '#FF6384',
                    '#36A2EB',
                    '#4BC0C0',
                    '#9966FF'
                ],
                borderColor: '#333',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    labels: { font: { size: 12 } }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    min: 0,
                    max: 5,
                    title: { display: true, text: 'Voltage (V)' }
                }
            }
        }
    });
}

function generateVoltageData() {
    const newData = Array.from({ length: 6 }, () => (Math.random() * 5).toFixed(2));
    voltageChart.data.datasets[0].data = newData;
    voltageChart.update();
}

// Light Chart
function initializeLightChart() {
    const ctx = document.getElementById('lightChart').getContext('2d');
    lightChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Bright', 'Medium', 'Dim', 'Very Dim'],
            datasets: [{
                data: [300, 250, 150, 100],
                backgroundColor: [
                    '#FFD93D',
                    '#FFA600',
                    '#FF6B35',
                    '#004E89'
                ],
                borderColor: '#fff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    labels: { font: { size: 12 } }
                }
            }
        }
    });
}

function generateLightData() {
    const newData = [
        Math.floor(Math.random() * 400),
        Math.floor(Math.random() * 300),
        Math.floor(Math.random() * 200),
        Math.floor(Math.random() * 150)
    ];
    lightChart.data.datasets[0].data = newData;
    lightChart.update();
}

// Multi-Sensor Chart
function initializeMultiSensorChart() {
    const ctx = document.getElementById('multiSensorChart').getContext('2d');
    multiSensorChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '23:59'],
            datasets: [
                {
                    label: 'Temperature (°C)',
                    data: [20, 22, 25, 28, 26, 23, 21],
                    borderColor: '#FF6384',
                    backgroundColor: 'rgba(255, 99, 132, 0.1)',
                    borderWidth: 2,
                    tension: 0.4,
                    yAxisID: 'y'
                },
                {
                    label: 'Humidity (%)',
                    data: [45, 48, 52, 60, 58, 50, 46],
                    borderColor: '#36A2EB',
                    backgroundColor: 'rgba(54, 162, 235, 0.1)',
                    borderWidth: 2,
                    tension: 0.4,
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            plugins: {
                legend: {
                    display: true,
                    labels: { font: { size: 12 } }
                }
            },
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    min: 15,
                    max: 35,
                    title: { display: true, text: 'Temperature (°C)' }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    min: 0,
                    max: 100,
                    title: { display: true, text: 'Humidity (%)' },
                    grid: {
                        drawOnChartArea: false,
                    },
                }
            }
        }
    });
}

function generateMultiSensorData() {
    const tempData = Array.from({ length: 7 }, () => Math.floor(Math.random() * 15) + 20);
    const humidData = Array.from({ length: 7 }, () => Math.floor(Math.random() * 60) + 30);
    multiSensorChart.data.datasets[0].data = tempData;
    multiSensorChart.data.datasets[1].data = humidData;
    multiSensorChart.update();
}

// Comparison Chart
function initializeComparisonChart() {
    const ctx = document.getElementById('comparisonChart').getContext('2d');
    comparisonChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Temperature', 'Humidity', 'Light', 'Pressure', 'Motion', 'Distance'],
            datasets: [{
                label: 'Current Readings',
                data: [28, 60, 75, 65, 45, 55],
                borderColor: '#007BFF',
                backgroundColor: 'rgba(0, 123, 255, 0.2)',
                borderWidth: 2,
                pointRadius: 5,
                pointBackgroundColor: '#007BFF',
                pointBorderColor: '#fff',
                pointBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    labels: { font: { size: 12 } }
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    min: 0,
                    max: 100
                }
            }
        }
    });
}

function generateComparisonData() {
    const newData = Array.from({ length: 6 }, () => Math.floor(Math.random() * 100));
    comparisonChart.data.datasets[0].data = newData;
    comparisonChart.update();
}

// Pinout Tab Switching
function showPinoutBoard(boardType) {
    // Hide all pinout contents
    document.querySelectorAll('.pinout-content').forEach(el => {
        el.classList.remove('active');
    });
    
    // Remove active class from all tabs
    document.querySelectorAll('.pinout-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show selected pinout
    const selectedId = boardType + '-pinout';
    const selectedContent = document.getElementById(selectedId);
    if (selectedContent) {
        selectedContent.classList.add('active');
    }
    
    // Add active class to clicked tab
    if (event && event.target) {
        event.target.classList.add('active');
    }
}
