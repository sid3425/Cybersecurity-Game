var scenarios = [
  {
    hackerCard: {
      description: "I created a fake website that looks just like your favorite shopping site to steal your credit card details.",
      power: 4,
    },
    playerCards: [
      {
        description: "I double-check URLs and only use trusted websites for shopping.",
        power: 5,
      },
      {
        description: "I make sure there’s a lock symbol in the URL before entering any personal information.",
        power: 3,
      },
      {
        description: "I clicked on the link and entered my credit card information.",
        power: 1,
      }
    ]
  },
  {
    hackerCard: {
      description: "I sent you a friend request on social media and you accepted without knowing me.",
      power: 3,
    },
    playerCards: [
      {
        description: "I never accept friend requests from people I don’t know.",
        power: 5,
      },
      {
        description: "I accepted, but I immediately removed them once I realized I didn’t know them.",
        power: 3,
      },
      {
        description: "I accept all friend requests so I can have more followers.",
        power: 1,
      }
    ]
  },
  {
    hackerCard: {
      description: "I tracked your movements by accessing your location data through an app.",
      power: 3,
    },
    playerCards: [
      {
        description: "I disable location permissions for all unnecessary apps.",
        power: 5,
      },
      {
        description: "I only allow location access when using specific apps.",
        power: 4,
      },
      {
        description: "I have location services enabled for all my apps.",
        power: 1,
      }
    ]
  },
  {
    hackerCard: {
      description: "I created a phishing link and posted it in a popular chat forum.",
      power: 3,
    },
    playerCards: [
      {
        description: "I never click on random links without verifying their source.",
        power: 5,
      },
      {
        description: "I checked the link using a URL scanner before clicking.",
        power: 4,
      },
      {
        description: "I clicked the link immediately because it looked interesting.",
        power: 1,
      }
    ]
  },
  {
    hackerCard: {
      description: "I installed spyware on your device through a malicious app download.",
      power: 4,
    },
    playerCards: [
      {
        description: "I only download apps from trusted sources and read reviews first.",
        power: 5,
      },
      {
        description: "I scan my device regularly for spyware and malware.",
        power: 3,
      },
      {
        description: "I download apps from any site if they look useful.",
        power: 1,
      }
    ]
  },
  {
    hackerCard: {
      description: "I used social engineering to convince you to give me access to your work account.",
      power: 4,
    },
    playerCards: [
      {
        description: "I verified your identity through multiple channels before granting access.",
        power: 5,
      },
      {
        description: "I asked my manager if it was okay to grant you access.",
        power: 3,
      },
      {
        description: "I granted you access because you seemed trustworthy.",
        power: 1,
      }
    ]
  },
  {
    hackerCard: {
      description: "I tricked you into downloading a file that contained a trojan virus.",
      power: 3,
    },
    playerCards: [
      {
        description: "I never download files from unknown sources.",
        power: 5,
      },
      {
        description: "I scanned the file with my antivirus before opening it.",
        power: 4,
      },
      {
        description: "I opened the file immediately without checking.",
        power: 1,
      }
    ]
  },
  {
    hackerCard: {
      description: "I obtained your password because you used 'password123' as your password.",
      power: 3,
    },
    playerCards: [
      {
        description: "I use a password manager to generate and store complex passwords.",
        power: 5,
      },
      {
        description: "I use a strong password with a combination of letters, numbers, and symbols.",
        power: 4,
      },
      {
        description: "I use easy-to-remember passwords like 'password123'.",
        power: 1,
      }
    ]
  },
  {
    hackerCard: {
      description: "I sent a fake text message pretending to be from your bank, asking you to verify your account.",
      power: 3,
    },
    playerCards: [
      {
        description: "I ignored the message and contacted my bank directly.",
        power: 5,
      },
      {
        description: "I checked the number against my bank’s official contact information.",
        power: 4,
      },
      {
        description: "I replied to the message with my account details.",
        power: 1,
      }
    ]
  },
  {
    hackerCard: {
      description: "I exploited a vulnerability in your outdated software to gain access to your system.",
      power: 4,
    },
    playerCards: [
      {
        description: "I always keep my software and systems up-to-date.",
        power: 5,
      },
      {
        description: "I update my software occasionally when I’m not busy.",
        power: 3,
      },
      {
        description: "I rarely update my software unless I encounter an issue.",
        power: 1,
      }
    ]
  },
  {
    hackerCard: {
      description: "I intercepted your data as you logged into a website with an unencrypted connection.",
      power: 4,
    },
    playerCards: [
      {
        description: "I always check for HTTPS in the URL before logging in.",
        power: 5,
      },
      {
        description: "I use a VPN to encrypt my internet traffic.",
        power: 4,
      },
      {
        description: "I don’t check if the connection is secure before logging in.",
        power: 1,
      }
    ]
  },
  {
    hackerCard: {
      description: "I guessed your answers to common security questions, like your mother’s maiden name.",
      power: 3,
    },
    playerCards: [
      {
        description: "I use random answers that aren’t related to me for security questions.",
        power: 5,
      },
      {
        description: "I make sure my answers are unique, even if they relate to me.",
        power: 3,
      },
      {
        description: "I use easy-to-guess answers like my pet’s name.",
        power: 1,
      }
    ]
  },
  {
    hackerCard: {
      description: "I set up a malicious online advertisement that tricked you into clicking.",
      power: 3,
    },
    playerCards: [
      {
        description: "I use an ad-blocker to prevent malicious ads from loading.",
        power: 5,
      },
      {
        description: "I’m cautious about clicking on ads and verify if they’re legitimate.",
        power: 3,
      },
      {
        description: "I click on ads frequently if they look interesting.",
        power: 1,
      }
    ]
  },
  {
    hackerCard: {
      description: "I breached your company’s system by exploiting a weak user password.",
      power: 4,
    },
    playerCards: [
      {
        description: "I enforce strong password policies at my company.",
        power: 5,
      },
      {
        description: "I review passwords periodically to ensure they’re secure.",
        power: 3,
      },
      {
        description: "I don’t enforce password policies as long as they’re easy to remember.",
        power: 1,
      }
    ]
  },
  {
    hackerCard: {
      description: "I accessed your system through a remote desktop application with a weak password.",
      power: 3,
    },
    playerCards: [
      {
        description: "I disable remote access when I don’t need it.",
        power: 5,
      },
      {
        description: "I enable two-factor authentication on my remote desktop applications.",
        power: 4,
      },
      {
        description: "I keep remote access always enabled and use simple passwords.",
        power: 1,
      }
    ]
  },
  {
    hackerCard: {
      description: "I gained access to your devices because your IoT devices were not secured properly.",
      power: 3,
    },
    playerCards: [
      {
        description: "I change default passwords and secure all my IoT devices.",
        power: 5,
      },
      {
        description: "I use a separate network for my IoT devices.",
        power: 4,
      },
      {
        description: "I never change the default passwords on my IoT devices.",
        power: 1,
      }
    ]
  },
  {
    hackerCard: {
      description: "I stole your credit card details by exploiting a vulnerable e-commerce website.",
      power: 4,
    },
    playerCards: [
      {
        description: "I use virtual or disposable credit cards for online purchases.",
        power: 5,
      },
      {
        description: "I review my bank statements regularly for suspicious activity.",
        power: 3,
      },
      {
        description: "I use my primary credit card on all websites, even unfamiliar ones.",
        power: 1,
      }
    ]
  },
  {
    hackerCard: {
      description: "I gained access to your system through a phishing SMS message (Smishing).",
      power: 4,
    },
    playerCards: [
      {
        description: "I never click on links in unsolicited text messages.",
        power: 5,
      },
      {
        description: "I verify any suspicious messages by contacting the sender directly.",
        power: 4,
      },
      {
        description: "I clicked on the link because the message seemed urgent.",
        power: 1,
      }
    ]
  },
  {
    hackerCard: {
      description: "I spied on you using your webcam because it was unsecured.",
      power: 3,
    },
    playerCards: [
      {
        description: "I use a physical cover to block my webcam when not in use.",
        power: 5,
      },
      {
        description: "I disable camera permissions for all apps that don’t need it.",
        power: 4,
      },
      {
        description: "I keep my webcam on because I find it inconvenient to turn off.",
        power: 1,
      }
    ]
  },
  {
    hackerCard: {
      description: "I created a malicious mobile app that you downloaded, giving me access to your phone.",
      power: 4,
    },
    playerCards: [
      {
        description: "I only download apps from the official app store and verify the developer.",
        power: 5,
      },
      {
        description: "I review app permissions and check ratings before downloading.",
        power: 4,
      },
      {
        description: "I download any app that seems interesting, regardless of source.",
        power: 1,
      }
    ]
  }
];
