// Application Data from JSON
const appData = {
  harsh_reality_checks: [
    "🛑 STOP! You're about to waste your life again!",
    "🚨 Here you are, running to distractions instead of facing reality",
    "⚠️ This is exactly why you're stuck where you are",
    "👁️ Your future self is watching you make this choice",
    "⏰ Every minute here is a minute stolen from your dreams", 
    "🎯 You know better, but you're doing it anyway",
    "🔄 This is your pattern: avoid, escape, repeat",
    "🌐 Are you really going to let a website control your destiny?",
    "🤥 Stop lying to yourself - you came here to waste time",
    "💀 Your goals are dying while you scroll",
    "🔥 Reality check: You're procrastinating AGAIN",
    "⚡ This moment is your choice point - what will you choose?",
    "🎪 Welcome to the distraction circus - starring YOU",
    "🧠 Your brain is hijacked and you're letting it happen",
    "📱 Another day, another distraction. Same old you.",
    "🚪 You're standing at the door to nowhere",
    "💔 Dreams don't die dramatically - they die from neglect like this",
    "🎮 Playing games with your life while life plays games with you",
    "🕳️ You're digging your own grave, one click at a time",
    "⛔ This is what giving up looks like"
  ],
  tough_love_quotes: [
    "Most men would rather deny a hard truth than face it. — George R.R. Martin",
    "The price of anything is the amount of life you exchange for it. — Thoreau",
    "You are not your thoughts. You are your actions. — James Clear",
    "Comfort is a slow death. Prefer pain that awakens. — Unknown",
    "We suffer more in imagination than in reality. — Seneca",
    "You become what you tolerate. — Jordan Peterson",
    "Hell is when the person you are meets the person you could have been. — Anonymous",
    "Every action you take is a vote for the type of person you wish to become. — James Clear",
    "Discipline is choosing between what you want now and what you want most. — Abraham Lincoln",
    "The cave you fear to enter holds the treasure you seek. — Joseph Campbell",
    "Your future is created by what you do today, not tomorrow. — Robert Kiyosaki",
    "Man is not worried by real problems so much as by his imagined anxieties about real problems. — Epictetus",
    "We are what we repeatedly do. Excellence, then, is not an act but a habit. — Aristotle",
    "Nothing will work unless you do. — Maya Angelou",
    "Do not pray for an easy life. Pray for the strength to endure a difficult one. — Bruce Lee",
    "It is not that we have a short time to live, but that we waste a lot of it. — Seneca",
    "The chains of habit are too light to be felt until they are too heavy to be broken. — Warren Buffett",
    "What would you attempt to do if you knew you could not fail? — Robert H. Schuller",
    "Success is nothing more than a few simple disciplines, practiced every day. — Jim Rohn"
  ],
  mindful_quotes: [
    "Be present in all things and thankful for all things. — Maya Angelou",
    "Peace comes from within. Do not seek it without. — Buddha", 
    "The present moment is the only time over which we have dominion. — Thich Nhat Hanh",
    "Mindfulness is about being fully awake in our lives. — Jon Kabat-Zinn",
    "Wherever you are, be there totally. — Eckhart Tolle",
    "The best way to take care of the future is to take care of the present moment. — Thich Nhat Hanh",
    "In today's rush, we all think too much — seek too much — want too much — and forget about the joy of just being. — Eckhart Tolle",
    "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. — Buddha",
    "The little things? The little moments? They aren't little. — Jon Kabat-Zinn",
    "Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor. — Thich Nhat Hanh"
  ],
  accountability_questions: [
    "What would you tell your 10-year-old self about this moment?",
    "How will you feel about this choice in 5 years?",
    "What is this distraction helping you avoid?",
    "If someone was watching your every move today, would you be proud?",
    "What would your hero think of this choice?",
    "Are you becoming who you want to be right now?",
    "What problem are you not solving by being here?",
    "How many times have you made this same choice this week?",
    "What would happen if you faced your task instead?",
    "Is this how winners spend their time?"
  ],
  consequences_messages: [
    "🏆 Every champion you admire got there by saying no to this exact moment",
    "📈 While you scroll, others are building the life you want",
    "🎯 Success isn't about perfection - it's about choosing better in moments like this",
    "💪 Your discipline muscle is either growing or shrinking right now",
    "🚀 The gap between you and your goals just got wider",
    "🔥 This is how mediocrity is built - one wasted moment at a time",
    "⚖️ You're choosing temporary pleasure over permanent progress",
    "🎪 Congratulations, you're now part of the 99% who give up"
  ],
  focus_mode_messages: [
    "🎯 FOCUS MODE ACTIVATED - Your future self thanks you",
    "💚 This is what choosing yourself looks like",
    "🚀 You just made a champion's choice",
    "⚡ Feel that? That's the power of self-discipline",
    "🏆 You're in the minority now - the ones who actually do the work",
    "💪 Your discipline muscle just got stronger",
    "🔥 This is how legends are made - one right choice at a time",
    "✨ You just broke your own pattern - that's growth"
  ],
  emergency_motivation: [
    "Your dreams are NOT negotiable!",
    "Mediocrity is a choice - choose again!",
    "You're stronger than your excuses!",
    "This moment defines your day!",
    "Champions are built in moments like this!",
    "Your goals are waiting for you to show up!",
    "Stop betraying your potential!",
    "You know what you need to do - DO IT!"
  ]
};

// Breathing exercises data
const breathingExercises = {
  '478': { name: '4-7-8 Breathing', inhale: 4, hold: 7, exhale: 8 },
  'box': { name: 'Box Breathing', inhale: 4, hold: 4, exhale: 4, pause: 4 },
  'simple': { name: 'Simple Breathing', inhale: 3, exhale: 6 }
};

// Application State Management
class DistractionBlocker {
  constructor() {
    this.currentScreen = 'blockScreen';
    this.timer = null;
    this.timerState = 'stopped';
    this.timeRemaining = 0;
    this.currentTimerMinutes = 25;
    this.countdownTimer = null;
    this.userData = this.loadUserData();
    this.breathingTimer = null;
    this.currentBreathingExercise = null;
    this.meditationTimer = null;
    this.meditationTimeRemaining = 0;
    
    this.init();
  }

  init() {
    this.detectBlockedSite();
    this.displayRandomContent();
    this.updateStats();
    this.bindEvents();
    this.trackTimeOfDay();
  }

  loadUserData() {
    const defaultData = {
      todayBlocks: 0,
      totalBlocks: 0,
      focusStreak: 0,
      todayFocusTime: 0,
      blocksAvoided: 0,
      lastActiveDate: new Date().toDateString(),
      reflections: [],
      journalEntries: []
    };

    try {
      const stored = localStorage.getItem('distractionBlockerData');
      if (stored) {
        const parsed = JSON.parse(stored);
        // Reset daily stats if new day
        if (parsed.lastActiveDate !== new Date().toDateString()) {
          parsed.todayBlocks = 0;
          parsed.todayFocusTime = 0;
          parsed.lastActiveDate = new Date().toDateString();
        }
        return { ...defaultData, ...parsed };
      }
    } catch (e) {
      console.error('Error loading user data:', e);
    }
    
    return defaultData;
  }

  saveUserData() {
    try {
      localStorage.setItem('distractionBlockerData', JSON.stringify(this.userData));
    } catch (e) {
      console.error('Error saving user data:', e);
    }
  }

  detectBlockedSite() {
    // Try to get blocked site from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const blockedSite = urlParams.get('site') || urlParams.get('url') || 'Unknown Site';
    
    // Also try to get from document referrer
    const referrer = document.referrer;
    let siteName = blockedSite;
    
    if (referrer && referrer !== window.location.href) {
      try {
        const url = new URL(referrer);
        siteName = url.hostname.replace('www.', '');
      } catch (e) {
        // Keep the original blocked site name
      }
    }
    
    // Common site mappings
    const siteMap = {
      'youtube.com': 'YouTube',
      'facebook.com': 'Facebook', 
      'twitter.com': 'Twitter',
      'instagram.com': 'Instagram',
      'reddit.com': 'Reddit',
      'tiktok.com': 'TikTok',
      'netflix.com': 'Netflix',
      'twitch.tv': 'Twitch'
    };
    
    const displayName = siteMap[siteName] || siteName;
    
    const blockedSiteEl = document.getElementById('blockedSite');
    if (blockedSiteEl) {
      blockedSiteEl.textContent = displayName;
    }
    
    // Track the block
    this.userData.todayBlocks++;
    this.userData.totalBlocks++;
    this.saveUserData();
  }

  displayRandomContent() {
    // Display random reality check
    const randomReality = this.getRandomItem(appData.harsh_reality_checks);
    const realityEl = document.getElementById('realityMessage');
    if (realityEl) {
      realityEl.textContent = randomReality;
    }
    
    // Display random tough love quote
    const randomQuote = this.getRandomItem(appData.tough_love_quotes);
    const quoteEl = document.getElementById('toughLoveQuote');
    if (quoteEl) {
      quoteEl.textContent = `"${randomQuote}"`;
    }
    
    // Display random accountability question
    const randomQuestion = this.getRandomItem(appData.accountability_questions);
    const questionEl = document.getElementById('accountabilityQuestion');
    if (questionEl) {
      questionEl.textContent = randomQuestion;
    }
  }

  trackTimeOfDay() {
    const hour = new Date().getHours();
    let timeMessage = '';
    
    if (hour < 6) {
      timeMessage = "It's late night - your willpower is at its weakest!";
    } else if (hour < 12) {
      timeMessage = "Morning energy wasted on distractions!";
    } else if (hour < 17) {
      timeMessage = "Prime productive hours slipping away!";
    } else if (hour < 21) {
      timeMessage = "Evening - time to wind down, not zone out!";
    } else {
      timeMessage = "Late evening procrastination strikes again!";
    }
    
    console.log('Time context:', timeMessage);
  }

  getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  updateStats() {
    const todayBlocksEl = document.getElementById('todayBlocks');
    const focusStreakEl = document.getElementById('focusStreak');
    const todayFocusTimeEl = document.getElementById('todayFocusTime');
    const blocksAvoidedEl = document.getElementById('blocksAvoided');
    
    if (todayBlocksEl) todayBlocksEl.textContent = this.userData.todayBlocks;
    if (focusStreakEl) focusStreakEl.textContent = this.userData.focusStreak;
    if (todayFocusTimeEl) todayFocusTimeEl.textContent = this.userData.todayFocusTime;
    if (blocksAvoidedEl) blocksAvoidedEl.textContent = this.userData.blocksAvoided;
  }

  bindEvents() {
    // Navigation buttons
    this.bindNavigationEvents();
    
    // Main choice buttons
    const faceRealityBtn = document.getElementById('faceRealityBtn');
    const wasteTimeBtn = document.getElementById('wasteTimeBtn');
    
    if (faceRealityBtn) {
      faceRealityBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.chooseFaceReality();
      });
    }
    if (wasteTimeBtn) {
      wasteTimeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.chooseWasteTime();
      });
    }
    
    // Tool buttons
    const realityGeneratorBtn = document.getElementById('realityGeneratorBtn');
    const emergencyMotivationBtn = document.getElementById('emergencyMotivationBtn');
    const reflectionBtn = document.getElementById('reflectionBtn');
    
    if (realityGeneratorBtn) {
      realityGeneratorBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.showModal('realityModal');
      });
    }
    if (emergencyMotivationBtn) {
      emergencyMotivationBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.showModal('emergencyModal');
      });
    }
    if (reflectionBtn) {
      reflectionBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.showModal('reflectionModal');
      });
    }
    
    // Focus mode actions
    this.bindFocusModeEvents();
    
    // Consequences screen
    const lastChanceBtn = document.getElementById('lastChanceBtn');
    if (lastChanceBtn) {
      lastChanceBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.chooseFaceReality();
      });
    }
    
    // Modal events
    this.bindModalEvents();
    
    // Timer controls
    this.bindTimerEvents();
    
    // Mindfulness events
    this.bindMindfulnessEvents();
    
    // Overlay close events
    this.bindOverlayEvents();
  }

  bindNavigationEvents() {
    const viewAllThoughtsBtn = document.getElementById('viewAllThoughtsBtn');
    const mindfulCenterBtn = document.getElementById('mindfulCenterBtn');
    const clearMindBtn = document.getElementById('clearMindBtn');
    
    if (viewAllThoughtsBtn) {
      viewAllThoughtsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.showAllQuotes();
      });
    }
    if (mindfulCenterBtn) {
      mindfulCenterBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.showMindfulnessCenter();
      });
    }
    if (clearMindBtn) {
      clearMindBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.showJournal();
      });
    }
  }

  bindOverlayEvents() {
    // Close overlay buttons
    const closeAllQuotes = document.getElementById('closeAllQuotes');
    const closeMindfulness = document.getElementById('closeMindfulness');
    const closeJournal = document.getElementById('closeJournal');
    
    if (closeAllQuotes) {
      closeAllQuotes.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.hideOverlay('allQuotesOverlay');
      });
    }
    if (closeMindfulness) {
      closeMindfulness.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.hideOverlay('mindfulnessOverlay');
      });
    }
    if (closeJournal) {
      closeJournal.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.hideOverlay('journalOverlay');
      });
    }

    // Overlay backdrop clicks
    const allQuotesOverlay = document.getElementById('allQuotesOverlay');
    const mindfulnessOverlay = document.getElementById('mindfulnessOverlay');
    const journalOverlay = document.getElementById('journalOverlay');
    
    if (allQuotesOverlay) {
      allQuotesOverlay.addEventListener('click', (e) => {
        if (e.target === allQuotesOverlay) {
          this.hideOverlay('allQuotesOverlay');
        }
      });
    }
    if (mindfulnessOverlay) {
      mindfulnessOverlay.addEventListener('click', (e) => {
        if (e.target === mindfulnessOverlay) {
          this.hideOverlay('mindfulnessOverlay');
        }
      });
    }
    if (journalOverlay) {
      journalOverlay.addEventListener('click', (e) => {
        if (e.target === journalOverlay) {
          this.hideOverlay('journalOverlay');
        }
      });
    }
  }

  bindFocusModeEvents() {
    const startTimerBtn = document.getElementById('startTimerBtn');
    const deepWorkBtn = document.getElementById('deepWorkBtn');
    const quickTaskBtn = document.getElementById('quickTaskBtn');
    const backToRealityBtn = document.getElementById('backToRealityBtn');
    
    if (startTimerBtn) {
      startTimerBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.startTimer(25);
      });
    }
    if (deepWorkBtn) {
      deepWorkBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.startTimer(90);
      });
    }
    if (quickTaskBtn) {
      quickTaskBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.startTimer(15);
      });
    }
    if (backToRealityBtn) {
      backToRealityBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.showScreen('blockScreen');
      });
    }
  }

  bindTimerEvents() {
    const pauseTimerBtn = document.getElementById('pauseTimerBtn');
    const stopTimerBtn = document.getElementById('stopTimerBtn');
    
    if (pauseTimerBtn) {
      pauseTimerBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleTimer();
      });
    }
    if (stopTimerBtn) {
      stopTimerBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.stopTimer();
      });
    }
  }

  bindMindfulnessEvents() {
    // Breathing exercise buttons
    document.querySelectorAll('.breathing-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const type = btn.dataset.type;
        this.startBreathingExercise(type);
      });
    });
    
    // Stop breathing button
    const stopBreathingBtn = document.getElementById('stopBreathingBtn');
    if (stopBreathingBtn) {
      stopBreathingBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.stopBreathingExercise();
      });
    }
    
    // New mindful quote button
    const newMindfulQuoteBtn = document.getElementById('newMindfulQuoteBtn');
    if (newMindfulQuoteBtn) {
      newMindfulQuoteBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.showNewMindfulQuote();
      });
    }
    
    // Meditation timer buttons
    document.querySelectorAll('.meditation-timer-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const duration = parseInt(btn.dataset.duration);
        this.startMeditationTimer(duration);
      });
    });
    
    // Journal actions
    const saveJournalBtn = document.getElementById('saveJournalBtn');
    const clearJournalBtn = document.getElementById('clearJournalBtn');
    
    if (saveJournalBtn) {
      saveJournalBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.saveJournalEntry();
      });
    }
    if (clearJournalBtn) {
      clearJournalBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.clearJournalInput();
      });
    }
  }

  bindModalEvents() {
    // Close modal buttons
    document.querySelectorAll('.modal-close').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const modal = e.target.closest('.modal');
        if (modal) {
          this.hideModal(modal.id);
        }
      });
    });

    // Modal backdrop clicks
    document.querySelectorAll('.modal').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          this.hideModal(modal.id);
        }
      });
    });

    // Reality generator actions
    const newRealityBtn = document.getElementById('newRealityBtn');
    const closeRealityBtn = document.getElementById('closeRealityBtn');
    
    if (newRealityBtn) {
      newRealityBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.generateNewReality();
      });
    }
    if (closeRealityBtn) {
      closeRealityBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.hideModal('realityModal');
      });
    }
    
    // Emergency motivation actions
    const newEmergencyBtn = document.getElementById('newEmergencyBtn');
    const backToFocusBtn = document.getElementById('backToFocusBtn');
    
    if (newEmergencyBtn) {
      newEmergencyBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.generateEmergencyMotivation();
      });
    }
    if (backToFocusBtn) {
      backToFocusBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.hideModal('emergencyModal');
        this.chooseFaceReality();
      });
    }
    
    // Reflection actions
    const saveReflectionBtn = document.getElementById('saveReflectionBtn');
    const skipReflectionBtn = document.getElementById('skipReflectionBtn');
    
    if (saveReflectionBtn) {
      saveReflectionBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.saveReflection();
      });
    }
    if (skipReflectionBtn) {
      skipReflectionBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.hideModal('reflectionModal');
      });
    }
  }

  showAllQuotes() {
    const overlay = document.getElementById('allQuotesOverlay');
    const container = document.getElementById('allQuotesContainer');
    
    if (overlay && container) {
      // Populate quotes
      container.innerHTML = '';
      appData.tough_love_quotes.forEach(quote => {
        const quoteDiv = document.createElement('div');
        quoteDiv.className = 'quote-item';
        quoteDiv.textContent = `"${quote}"`;
        container.appendChild(quoteDiv);
      });
      
      overlay.classList.remove('hidden');
    }
  }

  showMindfulnessCenter() {
    const overlay = document.getElementById('mindfulnessOverlay');
    if (overlay) {
      overlay.classList.remove('hidden');
      this.showNewMindfulQuote(); // Show a random quote on open
    }
  }

  showJournal() {
    const overlay = document.getElementById('journalOverlay');
    if (overlay) {
      overlay.classList.remove('hidden');
    }
  }

  hideOverlay(overlayId) {
    const overlay = document.getElementById(overlayId);
    if (overlay) {
      overlay.classList.add('hidden');
      
      // Stop any active breathing exercises
      if (overlayId === 'mindfulnessOverlay') {
        this.stopBreathingExercise();
      }
    }
  }

  startBreathingExercise(type) {
    const exercise = breathingExercises[type];
    if (!exercise) return;
    
    this.currentBreathingExercise = exercise;
    
    // Show animation container
    const animationContainer = document.getElementById('breathingAnimation');
    const breathingOptions = document.querySelector('.breathing-options');
    
    if (animationContainer && breathingOptions) {
      breathingOptions.style.display = 'none';
      animationContainer.classList.remove('hidden');
    }
    
    this.runBreathingCycle();
  }

  runBreathingCycle() {
    if (!this.currentBreathingExercise) return;
    
    const circle = document.getElementById('breathingCircle');
    const instruction = document.getElementById('breathingInstruction');
    const exercise = this.currentBreathingExercise;
    
    let phase = 'inhale';
    let phaseTime = 0;
    
    const updateBreathing = () => {
      if (!this.currentBreathingExercise) return;
      
      switch (phase) {
        case 'inhale':
          if (phaseTime === 0) {
            instruction.textContent = 'Inhale';
            circle.className = 'breathing-circle inhale';
          }
          phaseTime++;
          if (phaseTime >= exercise.inhale) {
            phase = exercise.hold ? 'hold' : 'exhale';
            phaseTime = 0;
          }
          break;
          
        case 'hold':
          if (phaseTime === 0) {
            instruction.textContent = 'Hold';
            circle.className = 'breathing-circle inhale';
          }
          phaseTime++;
          if (phaseTime >= exercise.hold) {
            phase = 'exhale';
            phaseTime = 0;
          }
          break;
          
        case 'exhale':
          if (phaseTime === 0) {
            instruction.textContent = 'Exhale';
            circle.className = 'breathing-circle exhale';
          }
          phaseTime++;
          if (phaseTime >= exercise.exhale) {
            phase = exercise.pause ? 'pause' : 'inhale';
            phaseTime = 0;
          }
          break;
          
        case 'pause':
          if (phaseTime === 0) {
            instruction.textContent = 'Pause';
            circle.className = 'breathing-circle exhale';
          }
          phaseTime++;
          if (phaseTime >= exercise.pause) {
            phase = 'inhale';
            phaseTime = 0;
          }
          break;
      }
    };
    
    updateBreathing();
    this.breathingTimer = setInterval(updateBreathing, 1000);
  }

  stopBreathingExercise() {
    this.currentBreathingExercise = null;
    
    if (this.breathingTimer) {
      clearInterval(this.breathingTimer);
      this.breathingTimer = null;
    }
    
    // Reset UI
    const animationContainer = document.getElementById('breathingAnimation');
    const breathingOptions = document.querySelector('.breathing-options');
    const circle = document.getElementById('breathingCircle');
    
    if (animationContainer && breathingOptions) {
      animationContainer.classList.add('hidden');
      breathingOptions.style.display = 'grid';
    }
    
    if (circle) {
      circle.className = 'breathing-circle';
    }
  }

  showNewMindfulQuote() {
    const randomQuote = this.getRandomItem(appData.mindful_quotes);
    const quoteEl = document.getElementById('mindfulQuote');
    if (quoteEl) {
      quoteEl.textContent = randomQuote;
    }
  }

  startMeditationTimer(seconds) {
    this.meditationTimeRemaining = seconds;
    
    // Create a simple meditation timer alert
    alert(`🧘 Starting ${Math.floor(seconds/60)} minute meditation. Find a comfortable position and close your eyes. You'll be notified when complete.`);
    
    this.meditationTimer = setInterval(() => {
      this.meditationTimeRemaining--;
      
      if (this.meditationTimeRemaining <= 0) {
        clearInterval(this.meditationTimer);
        this.meditationTimer = null;
        
        // Meditation complete
        alert('🔔 Meditation complete! Take a moment to notice how you feel. Your mind is clearer now.');
      }
    }, 1000);
  }

  saveJournalEntry() {
    const journalInput = document.getElementById('journalInput');
    if (!journalInput) return;
    
    const entry = journalInput.value.trim();
    if (entry) {
      this.userData.journalEntries.push({
        text: entry,
        timestamp: new Date().toISOString(),
        date: new Date().toDateString()
      });
      this.saveUserData();
      
      alert('📝 Your thoughts have been saved. Your mind feels clearer now.');
      journalInput.value = '';
      this.hideOverlay('journalOverlay');
    }
  }

  clearJournalInput() {
    const journalInput = document.getElementById('journalInput');
    if (journalInput) {
      journalInput.value = '';
    }
  }

  chooseFaceReality() {
    this.userData.blocksAvoided++;
    this.userData.focusStreak++;
    this.saveUserData();
    
    // Display random focus celebration message
    const randomCelebration = this.getRandomItem(appData.focus_mode_messages);
    const celebrationEl = document.getElementById('focusCelebration');
    if (celebrationEl) {
      celebrationEl.textContent = randomCelebration;
    }
    
    // Display random motivational reminder
    const randomReminder = this.getRandomItem(appData.emergency_motivation);
    const reminderEl = document.getElementById('motivationalReminder');
    if (reminderEl) {
      reminderEl.textContent = randomReminder;
    }
    
    this.updateStats();
    this.showScreen('focusMode');
  }

  chooseWasteTime() {
    // Display random consequences message
    const randomConsequence = this.getRandomItem(appData.consequences_messages);
    const consequenceEl = document.getElementById('consequencesMessage');
    if (consequenceEl) {
      consequenceEl.textContent = randomConsequence;
    }
    
    this.showScreen('consequencesMode');
    this.startCountdown();
  }

  startCountdown() {
    let countdown = 10;
    const countdownEl = document.getElementById('countdownTimer');
    const proceedBtn = document.getElementById('proceedBtn');
    
    if (!countdownEl || !proceedBtn) return;
    
    this.countdownTimer = setInterval(() => {
      countdown--;
      countdownEl.textContent = countdown;
      
      if (countdown <= 0) {
        clearInterval(this.countdownTimer);
        countdownEl.style.display = 'none';
        proceedBtn.classList.remove('hidden');
        
        // Add click handler to proceed button
        proceedBtn.addEventListener('click', () => {
          // Reset focus streak
          this.userData.focusStreak = 0;
          this.saveUserData();
          
          // Redirect to a motivation page or close tab
          alert('💔 You chose mediocrity. Your future self is disappointed.');
          window.close(); // Try to close the tab
        });
      }
    }, 1000);
  }

  showScreen(screenName) {
    document.querySelectorAll('.screen').forEach(screen => {
      screen.classList.remove('active');
    });
    
    const targetScreen = document.getElementById(screenName);
    if (targetScreen) {
      targetScreen.classList.add('active');
    }
  }

  showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('hidden');
      
      // Initialize modal content based on type
      if (modalId === 'realityModal') {
        this.generateNewReality();
      } else if (modalId === 'emergencyModal') {
        this.generateEmergencyMotivation();
      }
    }
  }

  hideModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('hidden');
    }
  }

  generateNewReality() {
    const randomReality = this.getRandomItem(appData.harsh_reality_checks);
    const realityEl = document.getElementById('generatedReality');
    if (realityEl) {
      realityEl.textContent = randomReality;
    }
  }

  generateEmergencyMotivation() {
    const randomMotivation = this.getRandomItem(appData.emergency_motivation);
    const motivationEl = document.getElementById('emergencyMessage');
    if (motivationEl) {
      motivationEl.textContent = randomMotivation;
    }
  }

  saveReflection() {
    const reflectionInput = document.getElementById('reflectionInput');
    if (!reflectionInput) return;
    
    const reflection = reflectionInput.value.trim();
    if (reflection) {
      this.userData.reflections.push({
        text: reflection,
        timestamp: new Date().toISOString(),
        date: new Date().toDateString()
      });
      this.saveUserData();
      
      alert('💭 Reflection saved. Now face what you\'ve been avoiding.');
      reflectionInput.value = '';
    }
    
    this.hideModal('reflectionModal');
  }

  startTimer(minutes) {
    this.currentTimerMinutes = minutes;
    this.timeRemaining = minutes * 60; // Convert to seconds
    this.timerState = 'running';
    
    // Show timer interface
    const timerInterface = document.getElementById('timerInterface');
    if (timerInterface) {
      timerInterface.classList.remove('hidden');
    }
    
    // Update timer label
    const timerLabel = document.getElementById('timerLabel');
    if (timerLabel) {
      if (minutes === 25) timerLabel.textContent = 'Pomodoro Focus';
      else if (minutes === 90) timerLabel.textContent = 'Deep Work';
      else if (minutes === 15) timerLabel.textContent = 'Quick Task';
      else timerLabel.textContent = 'Focus Time';
    }
    
    this.updateTimerDisplay();
    this.runTimer();
  }

  runTimer() {
    if (this.timer) {
      clearInterval(this.timer);
    }
    
    this.timer = setInterval(() => {
      if (this.timerState === 'running') {
        this.timeRemaining--;
        this.updateTimerDisplay();
        
        if (this.timeRemaining <= 0) {
          this.completeTimer();
        }
      }
    }, 1000);
  }

  updateTimerDisplay() {
    const minutes = Math.floor(this.timeRemaining / 60);
    const seconds = this.timeRemaining % 60;
    const timerTimeEl = document.getElementById('timerTime');
    
    if (timerTimeEl) {
      timerTimeEl.textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    
    // Update progress circle
    const totalTime = this.currentTimerMinutes * 60;
    const progress = ((totalTime - this.timeRemaining) / totalTime) * 283;
    const timerFillEl = document.getElementById('timerFill');
    if (timerFillEl) {
      timerFillEl.style.strokeDashoffset = 283 - progress;
    }
  }

  toggleTimer() {
    const pauseBtn = document.getElementById('pauseTimerBtn');
    if (!pauseBtn) return;
    
    if (this.timerState === 'running') {
      this.timerState = 'paused';
      pauseBtn.textContent = '▶️ Resume';
    } else if (this.timerState === 'paused') {
      this.timerState = 'running';
      pauseBtn.textContent = '⏸️ Pause';
    }
  }

  stopTimer() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.timerState = 'stopped';
    
    // Hide timer interface
    const timerInterface = document.getElementById('timerInterface');
    if (timerInterface) {
      timerInterface.classList.add('hidden');
    }
    
    // Reset pause button
    const pauseBtn = document.getElementById('pauseTimerBtn');
    if (pauseBtn) {
      pauseBtn.textContent = '⏸️ Pause';
    }
  }

  completeTimer() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.timerState = 'stopped';
    
    // Calculate completed minutes
    const completedMinutes = this.currentTimerMinutes;
    
    // Update stats
    this.userData.todayFocusTime += completedMinutes;
    this.userData.focusStreak++;
    this.saveUserData();
    this.updateStats();
    
    // Hide timer interface
    const timerInterface = document.getElementById('timerInterface');
    if (timerInterface) {
      timerInterface.classList.add('hidden');
    }
    
    // Show completion message
    alert(`🎉 Timer complete! You focused for ${completedMinutes} minutes. Your discipline muscle just got stronger!`);
    
    // Reset pause button
    const pauseBtn = document.getElementById('pauseTimerBtn');
    if (pauseBtn) {
      pauseBtn.textContent = '⏸️ Pause';
    }
  }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  window.distractionBlocker = new DistractionBlocker();
});

// Prevent user from easily closing/navigating away
window.addEventListener('beforeunload', (e) => {
  e.preventDefault();
  e.returnValue = '🚨 Are you sure you want to leave? Your future self is counting on you to make the right choice.';
});

// Handle visibility change
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    console.log('🚨 Tab switched - the avoidance pattern continues...');
  } else {
    console.log('🔍 Back to face the truth. What will you choose this time?');
  }
});