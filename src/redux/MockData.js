/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */

const MockData = {
  units: [
    {
      title: 'Welcome to English for Catalyst',
      actitivies: [
        {
          level: 'basic',
          title: 'Vocabulary Activity',
          required: true,
          description: 'Unit vocabulary, definitions, and example sentences.',
          status: 0,
          type: 1,
          data: [
            {
              vocab: { text: 'acronym', audioUrl: '' },
              description: `an abbreviation; a way of writing a longer string of words more concisely`,
              example: {
                text: 'IT is an acronym for Information Technology.',
                audioUrl: '',
              },
            },
            {
              vocab: { text: 'bandwidth', audioUrl: '' },
              description: `a measurement of the capacity of data which can be moved between two points in a given period of time`,
              example: {
                text: 'The website performed very poorly because it was graphically heavy and required more bandwidth than was available.',
                audioUrl: '',
              },
            },
            {
              vocab: { text: 'benchmark', audioUrl: '' },
              description: `a measurement or standard that serves as a point of reference by which process performance is measured`,
              example: {
                text: 'The magazine article used PCMark 7 scores as a benchmark for computer performance.',
                audioUrl: '',
              },
            },
            {
              vocab: { text: 'bit', orText: 'binary digit', audioUrl: '' },
              description: `he smallest unit of storage; normally referred to as a '1' or '0'`,
              example: {
                text: 'The DBA "flipped a bit" in the database, changing a value from a 0 to 1.',
                audioUrl: '',
              },
            },
          ],
        },
        {
          level: 'basic',
          title: 'Reading Activity Plus Questions',
          required: true,
          description:
            'Read the article as you listen along. Focus on learning the unit vocabulary.',
          status: 0,
          type: 2,
          data: {
            audioUrl: '',
            read: `<div class="max-width-small paper mb-2 reading-text reading-well">
                    <h2 class="title">IT Acronyms and Measurements</h2><p>
                    The world of IT is full of acronyms and abbreviations. So is the world of measurements. That's pretty much a guarantee that everyone working with IT measurements is going to get confused. For example, what is the difference between an MB and an Mbit? What does ERP or CMS stand for? 
                    The above are examples of standard acronyms we hear all the time. Inside every organization there is likely to be a whole range of industry-specific acronyms as well. For instance, in my company we often talk of LMS, CAT, SEO, SL20, and many, many more. 
                    </p>
                    
                    <p>
                    If someone mentions an unfamiliar acronym in your presence, you should ask the person to clarify and explain it. Most likely you will not be the only person in the room who feels lost. Asking questions is not seen as a sign of weakness in a modern IT department. It is a sign of curiosity and seeking to better oneself and one's knowledge about a subject. But let's not kid ourselves... in your IT career, you will have acronyms for everything. Soon it will be you confusing newbies with acronyms of your own.
                    </p>
                    
                    <h3>It needs acronyms because information is constantly expanding out of control</h3>
                    
                    <p>
                    Here are some examples of information explosion:
                    </p>
                    
                    <p>
                    · The CPU at the heart of Apple's iPhone 4 is more powerful than a Cray supercomputer costing millions of dollars from the 1970's.
                    </p>
                    
                    <p>
                    · The software that powers the space shuttle runs on a single MB of RAM. The minimum RAM requirement for Windows 7 is 1 GB ( or 1,000 times as much).
                    </p>
                    
                    <p>
                    · If automobiles had improved their performance at the same rate as computers over the past 50 years, we might all be driving $500 cars that go 5,000 kilometers per hour, and get 500 kilometers per liter of fuel. They would probably fly too. Cool.
                    </p>
                    
                    <p>
                    · In 1980, a 10MB hard drive cost over $4,000 and was considered to be a lot of storage. Today, you can't even buy a 10MB hard drive. It would be worthless and pointless. Even Windows 95, released way back in April 1995, required a 55MB minimum hard drive. Now you can get a TB drive for under a hundred dollars.
                    </p>
                    
                    <p>
                    · Did you know that in 2010 Youtube transfers more data in one day then the entire Internet did in the year 2000? 
                    </p>
                    
                    <h3>
                    Acronyms and abbreviations are essential to IT. Learning them is easier than you think.
                    </h3>
                    
                    <p>
                    Computers tend to get more powerful on an order of magnitude over previous generations. Some people have even tried to quantify this phenomenon. One example is Moore's Law. A simple way to explain Moore's Law is that a brand new computer is completely outdated in five years.
                    </p>
                    
                    <p>
                    How do you remember the difference between a kilobyte, megabyte, gigabyte, and a terabyte without going crazy? 
                    </p>
                    
                    <p>
                    This is how. Break the terms down into their components. The word "megabyte" consists of two different words... "mega" and "byte". 
                    </p>
                    
                    <p>
                    "Mega" is a multiplier prefix found at the start of measurement words which means 1,000,000 (or a million times). 
                    </p>
                    
                    <p>
                    One "byte" is equal (normally) to 8 "bits".
                    </p>
                    
                    <p>
                    A "bit" is equal to 1 switch "on" or "off" (either a 1 or 0).
                    </p>
                    
                    <p>
                    It takes between 1 and 3 bytes to hold a letter... depending on what kind of character encoding you are using. 
                    </p>
                    
                    <p>
                    So a megabyte is equal to 8,000,000 bits.... or roughly equivalent to 500,000 letters of the alphabet. This is about the length of a short novel. 
                    </p>
                    
                    <p>
                    the prefix <a class="show-modal-vocab" href="/dictionary/popupShow/70">giga</a> means 1,000,000,000 or one billion times.
                    </p>
                    
                    <p>
                    So how many bits is in a gigabyte? That's right... 8,000,000,000. Enough to store 1,000 novels.
                    </p>
                    
                    <p>
                    Once you learn the prefixes and basic units of measure, it's all very easy.
                    </p>
                    
                    <p>
                    <a class="show-modal-vocab" href="/dictionary/popupShow/604">kilo</a> = 1,000 <br>
                    <a class="show-modal-vocab" href="/dictionary/popupShow/603">mega</a> = 1,000,000 <br>
                    giga = 1,000,000,000 <br>
                    <a class="show-modal-vocab" href="/dictionary/popupShow/605">tera</a> = 1,000,000,000,000 <br>
                    peta = 1,000,000,000,000,000 <br>
                    exa = 1,000,000,000,000,000,000 <br>
                    
                    </p><p>
                    There are bigger units of measurement that an exabyte, such as a zettabyte and a yottabyte, but we will not discuss them in this course at this time. But your children and grandchildren will have to know them!
                    </p>
                    
                    <p>
                    How big is an exabyte? For instance, every word ever spoken by every member of mankind would fill about 5 exabytes of storage space. The Internet transfers around 21 exabytes of data every month. 
                    </p>
                    
                    <p>
                    Now those are the "big number" multipliers. In IT however, things are not always big. They can also be very small. Unfortunately the "small multipliers" are often used erroneously. For example the words "microprocessor" and "nanotechnology" use mathematical prefixes, but not accurately. What they really mean in general is "really damn small". 
                    </p>
                    
                    <p>
                    <a class="show-modal-vocab" href="/dictionary/popupShow/357">milli</a> = .001 <br>
                    <a class="show-modal-vocab" href="/dictionary/popupShow/602">micro</a> = .000 001 <br>
                    <a class="show-modal-vocab" href="/dictionary/popupShow/78">nano</a> = .000 000 001 <br>
                    pico = .000 000 000 0001 <br>
                    
                    </p><p>
                    Now that we know the prefixes... it's time to learn the units. We have already discussed byte and bit. This is a common measurement in computing. Although computers are much faster now than they were in 1940 (around the time they were invented), they are still digital, meaning that they can only understand zeros and ones (0 and 1).
                    </p>
                    
                    <p>
                    You can put all the prefixes you learned (especially the big ones) onto any the following units of measurement related to IT:
                    </p>
                    
                    <p>
                    <a class="show-modal-vocab" href="/dictionary/popupShow/45">bit</a> <br>
                    <a class="show-modal-vocab" href="/dictionary/popupShow/48">byte</a> <br>
                    <a class="show-modal-vocab" href="/dictionary/popupShow/2823">bps</a> <br>
                    <a class="show-modal-vocab" href="/dictionary/popupShow/13">hz</a> <br>
                    <a class="show-modal-vocab" href="/dictionary/popupShow/606">flops</a> <br>
                    <a class="show-modal-vocab" href="/dictionary/popupShow/608">IPS</a> <br>
                    </p>
                    
                    <p>
                    What can you do with these measurements? Almost everything! Compute <a class="show-modal-vocab" href="/dictionary/popupShow/39">bandwidth</a>, measure processor speed in TFLOPs with a <a class="show-modal-vocab" href="/dictionary/popupShow/42">benchmark</a>ing program, compare quality of digital cameras or monitors, and much, much more.
                    </p>
                    
                    <p>
                    Have fun, and don't fear IT acronyms and measurements. They are only here to help us.
                    </p>        </div>`,
            questions: [
              {
                question: 'A megabyte contains 8,000,000,000 bits.',
                listAns: ['True', 'False'],
                ans: 0,
              },
              {
                question:
                  'A bit is a switch (0/1) and commonly used in benchmarks.',
                listAns: ['True', 'False'],
                ans: 0,
              },
              {
                question: 'Hz (hertz) is the smallest unit of storage.',
                listAns: ['True', 'False'],
                ans: 1,
              },
            ],
          },
        },
        {
          level: 'basic',
          title: 'Multiple Choice',
          required: true,
          description: 'Pick the correct answer from a list.',
          status: 0,
          type: 3,
          data: [
            {
              question: `'M' or 'mega'`,
              listAns: [
                'one milion',
                '8 bits',
                'an internationally used frequency unit; equals one cycle per second',
              ],
              ans: 0,
            },
            {
              question: `'T' or 'tera'`,
              listAns: [
                `the smallest unit of storage; normally referred to as a '1' or '0'`,
                'one trillion',
                'one thousand',
              ],
              ans: 1,
            },
            {
              question: `'M' or 'mega'`,
              listAns: [
                'one milion',
                '8 bits',
                'an internationally used frequency unit; equals one cycle per second',
              ],
              ans: 0,
            },
            {
              question: `'T' or 'tera'`,
              listAns: [
                `the smallest unit of storage; normally referred to as a '1' or '0'`,
                'one trillion',
                'one thousand',
              ],
              ans: 1,
            },
            {
              question: `'T' or 'tera'`,
              listAns: [
                `the smallest unit of storage; normally referred to as a '1' or '0'`,
                'one trillion',
                'one thousand',
              ],
              ans: 1,
            },
          ],
        },
        {
          level: 'basic',
          title: 'Listening Comprehension',
          required: true,
          description: 'Listen to the word and type it in.',
          status: 0,
          type: 4,
          data: [
            {
              audioUrl: '',
              ans: 'floating point operations per second',
            },
            {
              audioUrl: '',
              ans: 'nano',
            },
            {
              audioUrl: '',
              ans: 'fault tolerance',
            },
            {
              audioUrl: '',
              ans: 'operations',
            },
          ],
        },
        {
          level: 'basic',
          title: 'Spelling and Recognition',
          required: true,
          description: 'Type in the correct answer for each definition.',
          status: 0,
          type: 5,
          data: [
            {
              question: 'one billion bytes',
              ans: 'gygabybte',
            },
            {
              question:
                'The ability of a system component to fail without causing the entire system to shut down; this is often accomplished with redundancy',
              ans: 'fault tolerance',
            },
            {
              question:
                'a measurement or standard that serves as a point of reference by which process performance is measured',
              ans: 'benchmark',
            },
          ],
        },
        {
          level: 'advanced',
          title: 'Speaking Activity',
          required: false,
          description: 'Record yourself speaking English.',
          status: 0,
          type: 6,
          data: [
            {
              audioUrl: '',
              text: 'Logarithms are used in many areas of science and engineering including computer science and geology.',
            },
            {
              audioUrl: '',
              text: 'Modern hard drives can store 500 gigabytes of data or more.',
            },
            {
              audioUrl: '',
              text: 'How long will it be before the first 5-gigahertz processors become affordable?',
            },
            {
              audioUrl: '',
              text: 'Computer processing power can increase by an order of magnitude between generations.',
            },
            {
              audioUrl: '',
              text: 'The website performed very poorly because it was graphically heavy and required more bandwidth than was available.',
            },
          ],
        },
        {
          level: 'advanced',
          title: 'Writing Activity',
          required: true,
          description: 'Pick a question and write about it.',
          status: 0,
          type: 7,
          data: [
            {
              question: 'Do you think people in IT use too many acronyms? Why?',
              instructions: [
                'Your writing will be graded on both content and proper grammar .',
                'The writing must be between 65 and 400 words long. Please note that some programns count words differently than others (IE Word, Google Docs, etc).',
                'Write your answer using your favorite text editor, save it, and then paste a copy in the form below.',
              ],
            },
            {
              question:
                'Think of 3 more IT acronyms not listed in this reading. Define each of them and use them in a sentence.',
              instructions: [
                'Your writing will be graded on both content and proper grammar .',
                'The writing must be between 65 and 400 words long. Please note that some programns count words differently than others (IE Word, Google Docs, etc).',
                'Write your answer using your favorite text editor, save it, and then paste a copy in the form below.',
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'Introduction to Software',
      actitivies: [
        {
          level: 'basic',
          title: 'Vocabulary Activity',
          required: true,
          description: 'Unit vocabulary, definitions, and example sentences.',
          status: 0,
          type: 1,
          data: [
            {
              vocab: { text: 'acronym', audioUrl: '' },
              description: `an abbreviation; a way of writing a longer string of words more concisely`,
              example: {
                text: 'IT is an acronym for Information Technology.',
                audioUrl: '',
              },
            },
            {
              vocab: { text: 'bandwidth', audioUrl: '' },
              description: `a measurement of the capacity of data which can be moved between two points in a given period of time`,
              example: {
                text: 'The website performed very poorly because it was graphically heavy and required more bandwidth than was available.',
                audioUrl: '',
              },
            },
            {
              vocab: { text: 'benchmark', audioUrl: '' },
              description: `a measurement or standard that serves as a point of reference by which process performance is measured`,
              example: {
                text: 'The magazine article used PCMark 7 scores as a benchmark for computer performance.',
                audioUrl: '',
              },
            },
            {
              vocab: { text: 'bit', orText: 'binary digit', audioUrl: '' },
              description: `he smallest unit of storage; normally referred to as a '1' or '0'`,
              example: {
                text: 'The DBA "flipped a bit" in the database, changing a value from a 0 to 1.',
                audioUrl: '',
              },
            },
          ],
        },
        {
          level: 'basic',
          title: 'Reading Activity Plus Questions',
          required: true,
          description:
            'Read the article as you listen along. Focus on learning the unit vocabulary.',
          status: 0,
          type: 2,
          data: {
            audioUrl: '',
            read: `<div class="max-width-small paper mb-2 reading-text reading-well">
                      <h2 class="title">IT Acronyms and Measurements</h2><p>
                      The world of IT is full of acronyms and abbreviations. So is the world of measurements. That's pretty much a guarantee that everyone working with IT measurements is going to get confused. For example, what is the difference between an MB and an Mbit? What does ERP or CMS stand for? 
                      The above are examples of standard acronyms we hear all the time. Inside every organization there is likely to be a whole range of industry-specific acronyms as well. For instance, in my company we often talk of LMS, CAT, SEO, SL20, and many, many more. 
                      </p>
                      
                      <p>
                      If someone mentions an unfamiliar acronym in your presence, you should ask the person to clarify and explain it. Most likely you will not be the only person in the room who feels lost. Asking questions is not seen as a sign of weakness in a modern IT department. It is a sign of curiosity and seeking to better oneself and one's knowledge about a subject. But let's not kid ourselves... in your IT career, you will have acronyms for everything. Soon it will be you confusing newbies with acronyms of your own.
                      </p>
                      
                      <h3>It needs acronyms because information is constantly expanding out of control</h3>
                      
                      <p>
                      Here are some examples of information explosion:
                      </p>
                      
                      <p>
                      · The CPU at the heart of Apple's iPhone 4 is more powerful than a Cray supercomputer costing millions of dollars from the 1970's.
                      </p>
                      
                      <p>
                      · The software that powers the space shuttle runs on a single MB of RAM. The minimum RAM requirement for Windows 7 is 1 GB ( or 1,000 times as much).
                      </p>
                      
                      <p>
                      · If automobiles had improved their performance at the same rate as computers over the past 50 years, we might all be driving $500 cars that go 5,000 kilometers per hour, and get 500 kilometers per liter of fuel. They would probably fly too. Cool.
                      </p>
                      
                      <p>
                      · In 1980, a 10MB hard drive cost over $4,000 and was considered to be a lot of storage. Today, you can't even buy a 10MB hard drive. It would be worthless and pointless. Even Windows 95, released way back in April 1995, required a 55MB minimum hard drive. Now you can get a TB drive for under a hundred dollars.
                      </p>
                      
                      <p>
                      · Did you know that in 2010 Youtube transfers more data in one day then the entire Internet did in the year 2000? 
                      </p>
                      
                      <h3>
                      Acronyms and abbreviations are essential to IT. Learning them is easier than you think.
                      </h3>
                      
                      <p>
                      Computers tend to get more powerful on an order of magnitude over previous generations. Some people have even tried to quantify this phenomenon. One example is Moore's Law. A simple way to explain Moore's Law is that a brand new computer is completely outdated in five years.
                      </p>
                      
                      <p>
                      How do you remember the difference between a kilobyte, megabyte, gigabyte, and a terabyte without going crazy? 
                      </p>
                      
                      <p>
                      This is how. Break the terms down into their components. The word "megabyte" consists of two different words... "mega" and "byte". 
                      </p>
                      
                      <p>
                      "Mega" is a multiplier prefix found at the start of measurement words which means 1,000,000 (or a million times). 
                      </p>
                      
                      <p>
                      One "byte" is equal (normally) to 8 "bits".
                      </p>
                      
                      <p>
                      A "bit" is equal to 1 switch "on" or "off" (either a 1 or 0).
                      </p>
                      
                      <p>
                      It takes between 1 and 3 bytes to hold a letter... depending on what kind of character encoding you are using. 
                      </p>
                      
                      <p>
                      So a megabyte is equal to 8,000,000 bits.... or roughly equivalent to 500,000 letters of the alphabet. This is about the length of a short novel. 
                      </p>
                      
                      <p>
                      the prefix <a class="show-modal-vocab" href="/dictionary/popupShow/70">giga</a> means 1,000,000,000 or one billion times.
                      </p>
                      
                      <p>
                      So how many bits is in a gigabyte? That's right... 8,000,000,000. Enough to store 1,000 novels.
                      </p>
                      
                      <p>
                      Once you learn the prefixes and basic units of measure, it's all very easy.
                      </p>
                      
                      <p>
                      <a class="show-modal-vocab" href="/dictionary/popupShow/604">kilo</a> = 1,000 <br>
                      <a class="show-modal-vocab" href="/dictionary/popupShow/603">mega</a> = 1,000,000 <br>
                      giga = 1,000,000,000 <br>
                      <a class="show-modal-vocab" href="/dictionary/popupShow/605">tera</a> = 1,000,000,000,000 <br>
                      peta = 1,000,000,000,000,000 <br>
                      exa = 1,000,000,000,000,000,000 <br>
                      
                      </p><p>
                      There are bigger units of measurement that an exabyte, such as a zettabyte and a yottabyte, but we will not discuss them in this course at this time. But your children and grandchildren will have to know them!
                      </p>
                      
                      <p>
                      How big is an exabyte? For instance, every word ever spoken by every member of mankind would fill about 5 exabytes of storage space. The Internet transfers around 21 exabytes of data every month. 
                      </p>
                      
                      <p>
                      Now those are the "big number" multipliers. In IT however, things are not always big. They can also be very small. Unfortunately the "small multipliers" are often used erroneously. For example the words "microprocessor" and "nanotechnology" use mathematical prefixes, but not accurately. What they really mean in general is "really damn small". 
                      </p>
                      
                      <p>
                      <a class="show-modal-vocab" href="/dictionary/popupShow/357">milli</a> = .001 <br>
                      <a class="show-modal-vocab" href="/dictionary/popupShow/602">micro</a> = .000 001 <br>
                      <a class="show-modal-vocab" href="/dictionary/popupShow/78">nano</a> = .000 000 001 <br>
                      pico = .000 000 000 0001 <br>
                      
                      </p><p>
                      Now that we know the prefixes... it's time to learn the units. We have already discussed byte and bit. This is a common measurement in computing. Although computers are much faster now than they were in 1940 (around the time they were invented), they are still digital, meaning that they can only understand zeros and ones (0 and 1).
                      </p>
                      
                      <p>
                      You can put all the prefixes you learned (especially the big ones) onto any the following units of measurement related to IT:
                      </p>
                      
                      <p>
                      <a class="show-modal-vocab" href="/dictionary/popupShow/45">bit</a> <br>
                      <a class="show-modal-vocab" href="/dictionary/popupShow/48">byte</a> <br>
                      <a class="show-modal-vocab" href="/dictionary/popupShow/2823">bps</a> <br>
                      <a class="show-modal-vocab" href="/dictionary/popupShow/13">hz</a> <br>
                      <a class="show-modal-vocab" href="/dictionary/popupShow/606">flops</a> <br>
                      <a class="show-modal-vocab" href="/dictionary/popupShow/608">IPS</a> <br>
                      </p>
                      
                      <p>
                      What can you do with these measurements? Almost everything! Compute <a class="show-modal-vocab" href="/dictionary/popupShow/39">bandwidth</a>, measure processor speed in TFLOPs with a <a class="show-modal-vocab" href="/dictionary/popupShow/42">benchmark</a>ing program, compare quality of digital cameras or monitors, and much, much more.
                      </p>
                      
                      <p>
                      Have fun, and don't fear IT acronyms and measurements. They are only here to help us.
                      </p>        </div>`,
            questions: [
              {
                question: 'A megabyte contains 8,000,000,000 bits.',
                listAns: ['True', 'False'],
                ans: 0,
              },
              {
                question:
                  'A bit is a switch (0/1) and commonly used in benchmarks.',
                listAns: ['True', 'False'],
                ans: 0,
              },
              {
                question: 'Hz (hertz) is the smallest unit of storage.',
                listAns: ['True', 'False'],
                ans: 1,
              },
            ],
          },
        },
        {
          level: 'basic',
          title: 'Multiple Choice',
          required: true,
          description: 'Pick the correct answer from a list.',
          status: 0,
          type: 3,
          data: [
            {
              question: `'M' or 'mega'`,
              listAns: [
                'one milion',
                '8 bits',
                'an internationally used frequency unit; equals one cycle per second',
              ],
              ans: 0,
            },
            {
              question: `'T' or 'tera'`,
              listAns: [
                `the smallest unit of storage; normally referred to as a '1' or '0'`,
                'one trillion',
                'one thousand',
              ],
              ans: 1,
            },
            {
              question: `'M' or 'mega'`,
              listAns: [
                'one milion',
                '8 bits',
                'an internationally used frequency unit; equals one cycle per second',
              ],
              ans: 0,
            },
            {
              question: `'T' or 'tera'`,
              listAns: [
                `the smallest unit of storage; normally referred to as a '1' or '0'`,
                'one trillion',
                'one thousand',
              ],
              ans: 1,
            },
            {
              question: `'T' or 'tera'`,
              listAns: [
                `the smallest unit of storage; normally referred to as a '1' or '0'`,
                'one trillion',
                'one thousand',
              ],
              ans: 1,
            },
          ],
        },
        {
          level: 'basic',
          title: 'Listening Comprehension',
          required: true,
          description: 'Listen to the word and type it in.',
          status: 0,
          type: 4,
          data: [
            {
              audioUrl: '',
              ans: 'floating point operations per second',
            },
            {
              audioUrl: '',
              ans: 'nano',
            },
            {
              audioUrl: '',
              ans: 'fault tolerance',
            },
            {
              audioUrl: '',
              ans: 'operations',
            },
          ],
        },
        {
          level: 'basic',
          title: 'Spelling and Recognition',
          required: true,
          description: 'Type in the correct answer for each definition.',
          status: 0,
          type: 5,
          data: [
            {
              question: 'one billion bytes',
              ans: 'gygabybte',
            },
            {
              question:
                'The ability of a system component to fail without causing the entire system to shut down; this is often accomplished with redundancy',
              ans: 'fault tolerance',
            },
            {
              question:
                'a measurement or standard that serves as a point of reference by which process performance is measured',
              ans: 'benchmark',
            },
          ],
        },
        {
          level: 'advanced',
          title: 'Speaking Activity',
          required: false,
          description: 'Record yourself speaking English.',
          status: 0,
          type: 6,
          data: [
            {
              audioUrl: '',
              text: 'Logarithms are used in many areas of science and engineering including computer science and geology.',
            },
            {
              audioUrl: '',
              text: 'Modern hard drives can store 500 gigabytes of data or more.',
            },
            {
              audioUrl: '',
              text: 'How long will it be before the first 5-gigahertz processors become affordable?',
            },
            {
              audioUrl: '',
              text: 'Computer processing power can increase by an order of magnitude between generations.',
            },
            {
              audioUrl: '',
              text: 'The website performed very poorly because it was graphically heavy and required more bandwidth than was available.',
            },
          ],
        },
        {
          level: 'advanced',
          title: 'Writing Activity',
          required: true,
          description: 'Pick a question and write about it.',
          status: 0,
          type: 7,
          data: [
            {
              question: 'Do you think people in IT use too many acronyms? Why?',
              instructions: [
                'Your writing will be graded on both content and proper grammar .',
                'The writing must be between 65 and 400 words long. Please note that some programns count words differently than others (IE Word, Google Docs, etc).',
                'Write your answer using your favorite text editor, save it, and then paste a copy in the form below.',
              ],
            },
            {
              question:
                'Think of 3 more IT acronyms not listed in this reading. Define each of them and use them in a sentence.',
              instructions: [
                'Your writing will be graded on both content and proper grammar .',
                'The writing must be between 65 and 400 words long. Please note that some programns count words differently than others (IE Word, Google Docs, etc).',
                'Write your answer using your favorite text editor, save it, and then paste a copy in the form below.',
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'Operating Systems',
      actitivies: [
        {
          level: 'basic',
          title: 'Vocabulary Activity',
          required: true,
          description: 'Unit vocabulary, definitions, and example sentences.',
          status: 0,
          type: 1,
          data: [
            {
              vocab: { text: 'acronym', audioUrl: '' },
              description: `an abbreviation; a way of writing a longer string of words more concisely`,
              example: {
                text: 'IT is an acronym for Information Technology.',
                audioUrl: '',
              },
            },
            {
              vocab: { text: 'bandwidth', audioUrl: '' },
              description: `a measurement of the capacity of data which can be moved between two points in a given period of time`,
              example: {
                text: 'The website performed very poorly because it was graphically heavy and required more bandwidth than was available.',
                audioUrl: '',
              },
            },
            {
              vocab: { text: 'benchmark', audioUrl: '' },
              description: `a measurement or standard that serves as a point of reference by which process performance is measured`,
              example: {
                text: 'The magazine article used PCMark 7 scores as a benchmark for computer performance.',
                audioUrl: '',
              },
            },
            {
              vocab: { text: 'bit', orText: 'binary digit', audioUrl: '' },
              description: `he smallest unit of storage; normally referred to as a '1' or '0'`,
              example: {
                text: 'The DBA "flipped a bit" in the database, changing a value from a 0 to 1.',
                audioUrl: '',
              },
            },
          ],
        },
        {
          level: 'basic',
          title: 'Reading Activity Plus Questions',
          required: true,
          description:
            'Read the article as you listen along. Focus on learning the unit vocabulary.',
          status: 0,
          type: 2,
          data: {
            audioUrl: '',
            read: `<div class="max-width-small paper mb-2 reading-text reading-well">
                        <h2 class="title">IT Acronyms and Measurements</h2><p>
                        The world of IT is full of acronyms and abbreviations. So is the world of measurements. That's pretty much a guarantee that everyone working with IT measurements is going to get confused. For example, what is the difference between an MB and an Mbit? What does ERP or CMS stand for? 
                        The above are examples of standard acronyms we hear all the time. Inside every organization there is likely to be a whole range of industry-specific acronyms as well. For instance, in my company we often talk of LMS, CAT, SEO, SL20, and many, many more. 
                        </p>
                        
                        <p>
                        If someone mentions an unfamiliar acronym in your presence, you should ask the person to clarify and explain it. Most likely you will not be the only person in the room who feels lost. Asking questions is not seen as a sign of weakness in a modern IT department. It is a sign of curiosity and seeking to better oneself and one's knowledge about a subject. But let's not kid ourselves... in your IT career, you will have acronyms for everything. Soon it will be you confusing newbies with acronyms of your own.
                        </p>
                        
                        <h3>It needs acronyms because information is constantly expanding out of control</h3>
                        
                        <p>
                        Here are some examples of information explosion:
                        </p>
                        
                        <p>
                        · The CPU at the heart of Apple's iPhone 4 is more powerful than a Cray supercomputer costing millions of dollars from the 1970's.
                        </p>
                        
                        <p>
                        · The software that powers the space shuttle runs on a single MB of RAM. The minimum RAM requirement for Windows 7 is 1 GB ( or 1,000 times as much).
                        </p>
                        
                        <p>
                        · If automobiles had improved their performance at the same rate as computers over the past 50 years, we might all be driving $500 cars that go 5,000 kilometers per hour, and get 500 kilometers per liter of fuel. They would probably fly too. Cool.
                        </p>
                        
                        <p>
                        · In 1980, a 10MB hard drive cost over $4,000 and was considered to be a lot of storage. Today, you can't even buy a 10MB hard drive. It would be worthless and pointless. Even Windows 95, released way back in April 1995, required a 55MB minimum hard drive. Now you can get a TB drive for under a hundred dollars.
                        </p>
                        
                        <p>
                        · Did you know that in 2010 Youtube transfers more data in one day then the entire Internet did in the year 2000? 
                        </p>
                        
                        <h3>
                        Acronyms and abbreviations are essential to IT. Learning them is easier than you think.
                        </h3>
                        
                        <p>
                        Computers tend to get more powerful on an order of magnitude over previous generations. Some people have even tried to quantify this phenomenon. One example is Moore's Law. A simple way to explain Moore's Law is that a brand new computer is completely outdated in five years.
                        </p>
                        
                        <p>
                        How do you remember the difference between a kilobyte, megabyte, gigabyte, and a terabyte without going crazy? 
                        </p>
                        
                        <p>
                        This is how. Break the terms down into their components. The word "megabyte" consists of two different words... "mega" and "byte". 
                        </p>
                        
                        <p>
                        "Mega" is a multiplier prefix found at the start of measurement words which means 1,000,000 (or a million times). 
                        </p>
                        
                        <p>
                        One "byte" is equal (normally) to 8 "bits".
                        </p>
                        
                        <p>
                        A "bit" is equal to 1 switch "on" or "off" (either a 1 or 0).
                        </p>
                        
                        <p>
                        It takes between 1 and 3 bytes to hold a letter... depending on what kind of character encoding you are using. 
                        </p>
                        
                        <p>
                        So a megabyte is equal to 8,000,000 bits.... or roughly equivalent to 500,000 letters of the alphabet. This is about the length of a short novel. 
                        </p>
                        
                        <p>
                        the prefix <a class="show-modal-vocab" href="/dictionary/popupShow/70">giga</a> means 1,000,000,000 or one billion times.
                        </p>
                        
                        <p>
                        So how many bits is in a gigabyte? That's right... 8,000,000,000. Enough to store 1,000 novels.
                        </p>
                        
                        <p>
                        Once you learn the prefixes and basic units of measure, it's all very easy.
                        </p>
                        
                        <p>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/604">kilo</a> = 1,000 <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/603">mega</a> = 1,000,000 <br>
                        giga = 1,000,000,000 <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/605">tera</a> = 1,000,000,000,000 <br>
                        peta = 1,000,000,000,000,000 <br>
                        exa = 1,000,000,000,000,000,000 <br>
                        
                        </p><p>
                        There are bigger units of measurement that an exabyte, such as a zettabyte and a yottabyte, but we will not discuss them in this course at this time. But your children and grandchildren will have to know them!
                        </p>
                        
                        <p>
                        How big is an exabyte? For instance, every word ever spoken by every member of mankind would fill about 5 exabytes of storage space. The Internet transfers around 21 exabytes of data every month. 
                        </p>
                        
                        <p>
                        Now those are the "big number" multipliers. In IT however, things are not always big. They can also be very small. Unfortunately the "small multipliers" are often used erroneously. For example the words "microprocessor" and "nanotechnology" use mathematical prefixes, but not accurately. What they really mean in general is "really damn small". 
                        </p>
                        
                        <p>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/357">milli</a> = .001 <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/602">micro</a> = .000 001 <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/78">nano</a> = .000 000 001 <br>
                        pico = .000 000 000 0001 <br>
                        
                        </p><p>
                        Now that we know the prefixes... it's time to learn the units. We have already discussed byte and bit. This is a common measurement in computing. Although computers are much faster now than they were in 1940 (around the time they were invented), they are still digital, meaning that they can only understand zeros and ones (0 and 1).
                        </p>
                        
                        <p>
                        You can put all the prefixes you learned (especially the big ones) onto any the following units of measurement related to IT:
                        </p>
                        
                        <p>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/45">bit</a> <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/48">byte</a> <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/2823">bps</a> <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/13">hz</a> <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/606">flops</a> <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/608">IPS</a> <br>
                        </p>
                        
                        <p>
                        What can you do with these measurements? Almost everything! Compute <a class="show-modal-vocab" href="/dictionary/popupShow/39">bandwidth</a>, measure processor speed in TFLOPs with a <a class="show-modal-vocab" href="/dictionary/popupShow/42">benchmark</a>ing program, compare quality of digital cameras or monitors, and much, much more.
                        </p>
                        
                        <p>
                        Have fun, and don't fear IT acronyms and measurements. They are only here to help us.
                        </p>        </div>`,
            questions: [
              {
                question: 'A megabyte contains 8,000,000,000 bits.',
                listAns: ['True', 'False'],
                ans: 0,
              },
              {
                question:
                  'A bit is a switch (0/1) and commonly used in benchmarks.',
                listAns: ['True', 'False'],
                ans: 0,
              },
              {
                question: 'Hz (hertz) is the smallest unit of storage.',
                listAns: ['True', 'False'],
                ans: 1,
              },
            ],
          },
        },
        {
          level: 'basic',
          title: 'Multiple Choice',
          required: true,
          description: 'Pick the correct answer from a list.',
          status: 0,
          type: 3,
          data: [
            {
              question: `'M' or 'mega'`,
              listAns: [
                'one milion',
                '8 bits',
                'an internationally used frequency unit; equals one cycle per second',
              ],
              ans: 0,
            },
            {
              question: `'T' or 'tera'`,
              listAns: [
                `the smallest unit of storage; normally referred to as a '1' or '0'`,
                'one trillion',
                'one thousand',
              ],
              ans: 1,
            },
            {
              question: `'M' or 'mega'`,
              listAns: [
                'one milion',
                '8 bits',
                'an internationally used frequency unit; equals one cycle per second',
              ],
              ans: 0,
            },
            {
              question: `'T' or 'tera'`,
              listAns: [
                `the smallest unit of storage; normally referred to as a '1' or '0'`,
                'one trillion',
                'one thousand',
              ],
              ans: 1,
            },
            {
              question: `'T' or 'tera'`,
              listAns: [
                `the smallest unit of storage; normally referred to as a '1' or '0'`,
                'one trillion',
                'one thousand',
              ],
              ans: 1,
            },
          ],
        },
        {
          level: 'basic',
          title: 'Listening Comprehension',
          required: true,
          description: 'Listen to the word and type it in.',
          status: 0,
          type: 4,
          data: [
            {
              audioUrl: '',
              ans: 'floating point operations per second',
            },
            {
              audioUrl: '',
              ans: 'nano',
            },
            {
              audioUrl: '',
              ans: 'fault tolerance',
            },
            {
              audioUrl: '',
              ans: 'operations',
            },
          ],
        },
        {
          level: 'basic',
          title: 'Spelling and Recognition',
          required: true,
          description: 'Type in the correct answer for each definition.',
          status: 0,
          type: 5,
          data: [
            {
              question: 'one billion bytes',
              ans: 'gygabybte',
            },
            {
              question:
                'The ability of a system component to fail without causing the entire system to shut down; this is often accomplished with redundancy',
              ans: 'fault tolerance',
            },
            {
              question:
                'a measurement or standard that serves as a point of reference by which process performance is measured',
              ans: 'benchmark',
            },
          ],
        },
        {
          level: 'advanced',
          title: 'Speaking Activity',
          required: false,
          description: 'Record yourself speaking English.',
          status: 0,
          type: 6,
          data: [
            {
              audioUrl: '',
              text: 'Logarithms are used in many areas of science and engineering including computer science and geology.',
            },
            {
              audioUrl: '',
              text: 'Modern hard drives can store 500 gigabytes of data or more.',
            },
            {
              audioUrl: '',
              text: 'How long will it be before the first 5-gigahertz processors become affordable?',
            },
            {
              audioUrl: '',
              text: 'Computer processing power can increase by an order of magnitude between generations.',
            },
            {
              audioUrl: '',
              text: 'The website performed very poorly because it was graphically heavy and required more bandwidth than was available.',
            },
          ],
        },
        {
          level: 'advanced',
          title: 'Writing Activity',
          required: true,
          description: 'Pick a question and write about it.',
          status: 0,
          type: 7,
          data: [
            {
              question: 'Do you think people in IT use too many acronyms? Why?',
              instructions: [
                'Your writing will be graded on both content and proper grammar .',
                'The writing must be between 65 and 400 words long. Please note that some programns count words differently than others (IE Word, Google Docs, etc).',
                'Write your answer using your favorite text editor, save it, and then paste a copy in the form below.',
              ],
            },
            {
              question:
                'Think of 3 more IT acronyms not listed in this reading. Define each of them and use them in a sentence.',
              instructions: [
                'Your writing will be graded on both content and proper grammar .',
                'The writing must be between 65 and 400 words long. Please note that some programns count words differently than others (IE Word, Google Docs, etc).',
                'Write your answer using your favorite text editor, save it, and then paste a copy in the form below.',
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'Software Applications',
      actitivies: [
        {
          level: 'basic',
          title: 'Vocabulary Activity',
          required: true,
          description: 'Unit vocabulary, definitions, and example sentences.',
          status: 0,
          type: 1,
          data: [
            {
              vocab: { text: 'acronym', audioUrl: '' },
              description: `an abbreviation; a way of writing a longer string of words more concisely`,
              example: {
                text: 'IT is an acronym for Information Technology.',
                audioUrl: '',
              },
            },
            {
              vocab: { text: 'bandwidth', audioUrl: '' },
              description: `a measurement of the capacity of data which can be moved between two points in a given period of time`,
              example: {
                text: 'The website performed very poorly because it was graphically heavy and required more bandwidth than was available.',
                audioUrl: '',
              },
            },
            {
              vocab: { text: 'benchmark', audioUrl: '' },
              description: `a measurement or standard that serves as a point of reference by which process performance is measured`,
              example: {
                text: 'The magazine article used PCMark 7 scores as a benchmark for computer performance.',
                audioUrl: '',
              },
            },
            {
              vocab: { text: 'bit', orText: 'binary digit', audioUrl: '' },
              description: `he smallest unit of storage; normally referred to as a '1' or '0'`,
              example: {
                text: 'The DBA "flipped a bit" in the database, changing a value from a 0 to 1.',
                audioUrl: '',
              },
            },
          ],
        },
        {
          level: 'basic',
          title: 'Reading Activity Plus Questions',
          required: true,
          description:
            'Read the article as you listen along. Focus on learning the unit vocabulary.',
          status: 0,
          type: 2,
          data: {
            audioUrl: '',
            read: `<div class="max-width-small paper mb-2 reading-text reading-well">
                        <h2 class="title">IT Acronyms and Measurements</h2><p>
                        The world of IT is full of acronyms and abbreviations. So is the world of measurements. That's pretty much a guarantee that everyone working with IT measurements is going to get confused. For example, what is the difference between an MB and an Mbit? What does ERP or CMS stand for? 
                        The above are examples of standard acronyms we hear all the time. Inside every organization there is likely to be a whole range of industry-specific acronyms as well. For instance, in my company we often talk of LMS, CAT, SEO, SL20, and many, many more. 
                        </p>
                        
                        <p>
                        If someone mentions an unfamiliar acronym in your presence, you should ask the person to clarify and explain it. Most likely you will not be the only person in the room who feels lost. Asking questions is not seen as a sign of weakness in a modern IT department. It is a sign of curiosity and seeking to better oneself and one's knowledge about a subject. But let's not kid ourselves... in your IT career, you will have acronyms for everything. Soon it will be you confusing newbies with acronyms of your own.
                        </p>
                        
                        <h3>It needs acronyms because information is constantly expanding out of control</h3>
                        
                        <p>
                        Here are some examples of information explosion:
                        </p>
                        
                        <p>
                        · The CPU at the heart of Apple's iPhone 4 is more powerful than a Cray supercomputer costing millions of dollars from the 1970's.
                        </p>
                        
                        <p>
                        · The software that powers the space shuttle runs on a single MB of RAM. The minimum RAM requirement for Windows 7 is 1 GB ( or 1,000 times as much).
                        </p>
                        
                        <p>
                        · If automobiles had improved their performance at the same rate as computers over the past 50 years, we might all be driving $500 cars that go 5,000 kilometers per hour, and get 500 kilometers per liter of fuel. They would probably fly too. Cool.
                        </p>
                        
                        <p>
                        · In 1980, a 10MB hard drive cost over $4,000 and was considered to be a lot of storage. Today, you can't even buy a 10MB hard drive. It would be worthless and pointless. Even Windows 95, released way back in April 1995, required a 55MB minimum hard drive. Now you can get a TB drive for under a hundred dollars.
                        </p>
                        
                        <p>
                        · Did you know that in 2010 Youtube transfers more data in one day then the entire Internet did in the year 2000? 
                        </p>
                        
                        <h3>
                        Acronyms and abbreviations are essential to IT. Learning them is easier than you think.
                        </h3>
                        
                        <p>
                        Computers tend to get more powerful on an order of magnitude over previous generations. Some people have even tried to quantify this phenomenon. One example is Moore's Law. A simple way to explain Moore's Law is that a brand new computer is completely outdated in five years.
                        </p>
                        
                        <p>
                        How do you remember the difference between a kilobyte, megabyte, gigabyte, and a terabyte without going crazy? 
                        </p>
                        
                        <p>
                        This is how. Break the terms down into their components. The word "megabyte" consists of two different words... "mega" and "byte". 
                        </p>
                        
                        <p>
                        "Mega" is a multiplier prefix found at the start of measurement words which means 1,000,000 (or a million times). 
                        </p>
                        
                        <p>
                        One "byte" is equal (normally) to 8 "bits".
                        </p>
                        
                        <p>
                        A "bit" is equal to 1 switch "on" or "off" (either a 1 or 0).
                        </p>
                        
                        <p>
                        It takes between 1 and 3 bytes to hold a letter... depending on what kind of character encoding you are using. 
                        </p>
                        
                        <p>
                        So a megabyte is equal to 8,000,000 bits.... or roughly equivalent to 500,000 letters of the alphabet. This is about the length of a short novel. 
                        </p>
                        
                        <p>
                        the prefix <a class="show-modal-vocab" href="/dictionary/popupShow/70">giga</a> means 1,000,000,000 or one billion times.
                        </p>
                        
                        <p>
                        So how many bits is in a gigabyte? That's right... 8,000,000,000. Enough to store 1,000 novels.
                        </p>
                        
                        <p>
                        Once you learn the prefixes and basic units of measure, it's all very easy.
                        </p>
                        
                        <p>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/604">kilo</a> = 1,000 <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/603">mega</a> = 1,000,000 <br>
                        giga = 1,000,000,000 <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/605">tera</a> = 1,000,000,000,000 <br>
                        peta = 1,000,000,000,000,000 <br>
                        exa = 1,000,000,000,000,000,000 <br>
                        
                        </p><p>
                        There are bigger units of measurement that an exabyte, such as a zettabyte and a yottabyte, but we will not discuss them in this course at this time. But your children and grandchildren will have to know them!
                        </p>
                        
                        <p>
                        How big is an exabyte? For instance, every word ever spoken by every member of mankind would fill about 5 exabytes of storage space. The Internet transfers around 21 exabytes of data every month. 
                        </p>
                        
                        <p>
                        Now those are the "big number" multipliers. In IT however, things are not always big. They can also be very small. Unfortunately the "small multipliers" are often used erroneously. For example the words "microprocessor" and "nanotechnology" use mathematical prefixes, but not accurately. What they really mean in general is "really damn small". 
                        </p>
                        
                        <p>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/357">milli</a> = .001 <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/602">micro</a> = .000 001 <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/78">nano</a> = .000 000 001 <br>
                        pico = .000 000 000 0001 <br>
                        
                        </p><p>
                        Now that we know the prefixes... it's time to learn the units. We have already discussed byte and bit. This is a common measurement in computing. Although computers are much faster now than they were in 1940 (around the time they were invented), they are still digital, meaning that they can only understand zeros and ones (0 and 1).
                        </p>
                        
                        <p>
                        You can put all the prefixes you learned (especially the big ones) onto any the following units of measurement related to IT:
                        </p>
                        
                        <p>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/45">bit</a> <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/48">byte</a> <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/2823">bps</a> <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/13">hz</a> <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/606">flops</a> <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/608">IPS</a> <br>
                        </p>
                        
                        <p>
                        What can you do with these measurements? Almost everything! Compute <a class="show-modal-vocab" href="/dictionary/popupShow/39">bandwidth</a>, measure processor speed in TFLOPs with a <a class="show-modal-vocab" href="/dictionary/popupShow/42">benchmark</a>ing program, compare quality of digital cameras or monitors, and much, much more.
                        </p>
                        
                        <p>
                        Have fun, and don't fear IT acronyms and measurements. They are only here to help us.
                        </p>        </div>`,
            questions: [
              {
                question: 'A megabyte contains 8,000,000,000 bits.',
                listAns: ['True', 'False'],
                ans: 0,
              },
              {
                question:
                  'A bit is a switch (0/1) and commonly used in benchmarks.',
                listAns: ['True', 'False'],
                ans: 0,
              },
              {
                question: 'Hz (hertz) is the smallest unit of storage.',
                listAns: ['True', 'False'],
                ans: 1,
              },
            ],
          },
        },
        {
          level: 'basic',
          title: 'Multiple Choice',
          required: true,
          description: 'Pick the correct answer from a list.',
          status: 0,
          type: 3,
          data: [
            {
              question: `'M' or 'mega'`,
              listAns: [
                'one milion',
                '8 bits',
                'an internationally used frequency unit; equals one cycle per second',
              ],
              ans: 0,
            },
            {
              question: `'T' or 'tera'`,
              listAns: [
                `the smallest unit of storage; normally referred to as a '1' or '0'`,
                'one trillion',
                'one thousand',
              ],
              ans: 1,
            },
            {
              question: `'M' or 'mega'`,
              listAns: [
                'one milion',
                '8 bits',
                'an internationally used frequency unit; equals one cycle per second',
              ],
              ans: 0,
            },
            {
              question: `'T' or 'tera'`,
              listAns: [
                `the smallest unit of storage; normally referred to as a '1' or '0'`,
                'one trillion',
                'one thousand',
              ],
              ans: 1,
            },
            {
              question: `'T' or 'tera'`,
              listAns: [
                `the smallest unit of storage; normally referred to as a '1' or '0'`,
                'one trillion',
                'one thousand',
              ],
              ans: 1,
            },
          ],
        },
        {
          level: 'basic',
          title: 'Listening Comprehension',
          required: true,
          description: 'Listen to the word and type it in.',
          status: 0,
          type: 4,
          data: [
            {
              audioUrl: '',
              ans: 'floating point operations per second',
            },
            {
              audioUrl: '',
              ans: 'nano',
            },
            {
              audioUrl: '',
              ans: 'fault tolerance',
            },
            {
              audioUrl: '',
              ans: 'operations',
            },
          ],
        },
        {
          level: 'basic',
          title: 'Spelling and Recognition',
          required: true,
          description: 'Type in the correct answer for each definition.',
          status: 0,
          type: 5,
          data: [
            {
              question: 'one billion bytes',
              ans: 'gygabybte',
            },
            {
              question:
                'The ability of a system component to fail without causing the entire system to shut down; this is often accomplished with redundancy',
              ans: 'fault tolerance',
            },
            {
              question:
                'a measurement or standard that serves as a point of reference by which process performance is measured',
              ans: 'benchmark',
            },
          ],
        },
        {
          level: 'advanced',
          title: 'Speaking Activity',
          required: false,
          description: 'Record yourself speaking English.',
          status: 0,
          type: 6,
          data: [
            {
              audioUrl: '',
              text: 'Logarithms are used in many areas of science and engineering including computer science and geology.',
            },
            {
              audioUrl: '',
              text: 'Modern hard drives can store 500 gigabytes of data or more.',
            },
            {
              audioUrl: '',
              text: 'How long will it be before the first 5-gigahertz processors become affordable?',
            },
            {
              audioUrl: '',
              text: 'Computer processing power can increase by an order of magnitude between generations.',
            },
            {
              audioUrl: '',
              text: 'The website performed very poorly because it was graphically heavy and required more bandwidth than was available.',
            },
          ],
        },
        {
          level: 'advanced',
          title: 'Writing Activity',
          required: true,
          description: 'Pick a question and write about it.',
          status: 0,
          type: 7,
          data: [
            {
              question: 'Do you think people in IT use too many acronyms? Why?',
              instructions: [
                'Your writing will be graded on both content and proper grammar .',
                'The writing must be between 65 and 400 words long. Please note that some programns count words differently than others (IE Word, Google Docs, etc).',
                'Write your answer using your favorite text editor, save it, and then paste a copy in the form below.',
              ],
            },
            {
              question:
                'Think of 3 more IT acronyms not listed in this reading. Define each of them and use them in a sentence.',
              instructions: [
                'Your writing will be graded on both content and proper grammar .',
                'The writing must be between 65 and 400 words long. Please note that some programns count words differently than others (IE Word, Google Docs, etc).',
                'Write your answer using your favorite text editor, save it, and then paste a copy in the form below.',
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'IT Careers',
      actitivies: [
        {
          level: 'basic',
          title: 'Vocabulary Activity',
          required: true,
          description: 'Unit vocabulary, definitions, and example sentences.',
          status: 0,
          type: 1,
          data: [
            {
              vocab: { text: 'acronym', audioUrl: '' },
              description: `an abbreviation; a way of writing a longer string of words more concisely`,
              example: {
                text: 'IT is an acronym for Information Technology.',
                audioUrl: '',
              },
            },
            {
              vocab: { text: 'bandwidth', audioUrl: '' },
              description: `a measurement of the capacity of data which can be moved between two points in a given period of time`,
              example: {
                text: 'The website performed very poorly because it was graphically heavy and required more bandwidth than was available.',
                audioUrl: '',
              },
            },
            {
              vocab: { text: 'benchmark', audioUrl: '' },
              description: `a measurement or standard that serves as a point of reference by which process performance is measured`,
              example: {
                text: 'The magazine article used PCMark 7 scores as a benchmark for computer performance.',
                audioUrl: '',
              },
            },
            {
              vocab: { text: 'bit', orText: 'binary digit', audioUrl: '' },
              description: `he smallest unit of storage; normally referred to as a '1' or '0'`,
              example: {
                text: 'The DBA "flipped a bit" in the database, changing a value from a 0 to 1.',
                audioUrl: '',
              },
            },
          ],
        },
        {
          level: 'basic',
          title: 'Reading Activity Plus Questions',
          required: true,
          description:
            'Read the article as you listen along. Focus on learning the unit vocabulary.',
          status: 0,
          type: 2,
          data: {
            audioUrl: '',
            read: `<div class="max-width-small paper mb-2 reading-text reading-well">
                        <h2 class="title">IT Acronyms and Measurements</h2><p>
                        The world of IT is full of acronyms and abbreviations. So is the world of measurements. That's pretty much a guarantee that everyone working with IT measurements is going to get confused. For example, what is the difference between an MB and an Mbit? What does ERP or CMS stand for? 
                        The above are examples of standard acronyms we hear all the time. Inside every organization there is likely to be a whole range of industry-specific acronyms as well. For instance, in my company we often talk of LMS, CAT, SEO, SL20, and many, many more. 
                        </p>
                        
                        <p>
                        If someone mentions an unfamiliar acronym in your presence, you should ask the person to clarify and explain it. Most likely you will not be the only person in the room who feels lost. Asking questions is not seen as a sign of weakness in a modern IT department. It is a sign of curiosity and seeking to better oneself and one's knowledge about a subject. But let's not kid ourselves... in your IT career, you will have acronyms for everything. Soon it will be you confusing newbies with acronyms of your own.
                        </p>
                        
                        <h3>It needs acronyms because information is constantly expanding out of control</h3>
                        
                        <p>
                        Here are some examples of information explosion:
                        </p>
                        
                        <p>
                        · The CPU at the heart of Apple's iPhone 4 is more powerful than a Cray supercomputer costing millions of dollars from the 1970's.
                        </p>
                        
                        <p>
                        · The software that powers the space shuttle runs on a single MB of RAM. The minimum RAM requirement for Windows 7 is 1 GB ( or 1,000 times as much).
                        </p>
                        
                        <p>
                        · If automobiles had improved their performance at the same rate as computers over the past 50 years, we might all be driving $500 cars that go 5,000 kilometers per hour, and get 500 kilometers per liter of fuel. They would probably fly too. Cool.
                        </p>
                        
                        <p>
                        · In 1980, a 10MB hard drive cost over $4,000 and was considered to be a lot of storage. Today, you can't even buy a 10MB hard drive. It would be worthless and pointless. Even Windows 95, released way back in April 1995, required a 55MB minimum hard drive. Now you can get a TB drive for under a hundred dollars.
                        </p>
                        
                        <p>
                        · Did you know that in 2010 Youtube transfers more data in one day then the entire Internet did in the year 2000? 
                        </p>
                        
                        <h3>
                        Acronyms and abbreviations are essential to IT. Learning them is easier than you think.
                        </h3>
                        
                        <p>
                        Computers tend to get more powerful on an order of magnitude over previous generations. Some people have even tried to quantify this phenomenon. One example is Moore's Law. A simple way to explain Moore's Law is that a brand new computer is completely outdated in five years.
                        </p>
                        
                        <p>
                        How do you remember the difference between a kilobyte, megabyte, gigabyte, and a terabyte without going crazy? 
                        </p>
                        
                        <p>
                        This is how. Break the terms down into their components. The word "megabyte" consists of two different words... "mega" and "byte". 
                        </p>
                        
                        <p>
                        "Mega" is a multiplier prefix found at the start of measurement words which means 1,000,000 (or a million times). 
                        </p>
                        
                        <p>
                        One "byte" is equal (normally) to 8 "bits".
                        </p>
                        
                        <p>
                        A "bit" is equal to 1 switch "on" or "off" (either a 1 or 0).
                        </p>
                        
                        <p>
                        It takes between 1 and 3 bytes to hold a letter... depending on what kind of character encoding you are using. 
                        </p>
                        
                        <p>
                        So a megabyte is equal to 8,000,000 bits.... or roughly equivalent to 500,000 letters of the alphabet. This is about the length of a short novel. 
                        </p>
                        
                        <p>
                        the prefix <a class="show-modal-vocab" href="/dictionary/popupShow/70">giga</a> means 1,000,000,000 or one billion times.
                        </p>
                        
                        <p>
                        So how many bits is in a gigabyte? That's right... 8,000,000,000. Enough to store 1,000 novels.
                        </p>
                        
                        <p>
                        Once you learn the prefixes and basic units of measure, it's all very easy.
                        </p>
                        
                        <p>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/604">kilo</a> = 1,000 <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/603">mega</a> = 1,000,000 <br>
                        giga = 1,000,000,000 <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/605">tera</a> = 1,000,000,000,000 <br>
                        peta = 1,000,000,000,000,000 <br>
                        exa = 1,000,000,000,000,000,000 <br>
                        
                        </p><p>
                        There are bigger units of measurement that an exabyte, such as a zettabyte and a yottabyte, but we will not discuss them in this course at this time. But your children and grandchildren will have to know them!
                        </p>
                        
                        <p>
                        How big is an exabyte? For instance, every word ever spoken by every member of mankind would fill about 5 exabytes of storage space. The Internet transfers around 21 exabytes of data every month. 
                        </p>
                        
                        <p>
                        Now those are the "big number" multipliers. In IT however, things are not always big. They can also be very small. Unfortunately the "small multipliers" are often used erroneously. For example the words "microprocessor" and "nanotechnology" use mathematical prefixes, but not accurately. What they really mean in general is "really damn small". 
                        </p>
                        
                        <p>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/357">milli</a> = .001 <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/602">micro</a> = .000 001 <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/78">nano</a> = .000 000 001 <br>
                        pico = .000 000 000 0001 <br>
                        
                        </p><p>
                        Now that we know the prefixes... it's time to learn the units. We have already discussed byte and bit. This is a common measurement in computing. Although computers are much faster now than they were in 1940 (around the time they were invented), they are still digital, meaning that they can only understand zeros and ones (0 and 1).
                        </p>
                        
                        <p>
                        You can put all the prefixes you learned (especially the big ones) onto any the following units of measurement related to IT:
                        </p>
                        
                        <p>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/45">bit</a> <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/48">byte</a> <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/2823">bps</a> <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/13">hz</a> <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/606">flops</a> <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/608">IPS</a> <br>
                        </p>
                        
                        <p>
                        What can you do with these measurements? Almost everything! Compute <a class="show-modal-vocab" href="/dictionary/popupShow/39">bandwidth</a>, measure processor speed in TFLOPs with a <a class="show-modal-vocab" href="/dictionary/popupShow/42">benchmark</a>ing program, compare quality of digital cameras or monitors, and much, much more.
                        </p>
                        
                        <p>
                        Have fun, and don't fear IT acronyms and measurements. They are only here to help us.
                        </p>        </div>`,
            questions: [
              {
                question: 'A megabyte contains 8,000,000,000 bits.',
                listAns: ['True', 'False'],
                ans: 0,
              },
              {
                question:
                  'A bit is a switch (0/1) and commonly used in benchmarks.',
                listAns: ['True', 'False'],
                ans: 0,
              },
              {
                question: 'Hz (hertz) is the smallest unit of storage.',
                listAns: ['True', 'False'],
                ans: 1,
              },
            ],
          },
        },
        {
          level: 'basic',
          title: 'Multiple Choice',
          required: true,
          description: 'Pick the correct answer from a list.',
          status: 0,
          type: 3,
          data: [
            {
              question: `'M' or 'mega'`,
              listAns: [
                'one milion',
                '8 bits',
                'an internationally used frequency unit; equals one cycle per second',
              ],
              ans: 0,
            },
            {
              question: `'T' or 'tera'`,
              listAns: [
                `the smallest unit of storage; normally referred to as a '1' or '0'`,
                'one trillion',
                'one thousand',
              ],
              ans: 1,
            },
            {
              question: `'M' or 'mega'`,
              listAns: [
                'one milion',
                '8 bits',
                'an internationally used frequency unit; equals one cycle per second',
              ],
              ans: 0,
            },
            {
              question: `'T' or 'tera'`,
              listAns: [
                `the smallest unit of storage; normally referred to as a '1' or '0'`,
                'one trillion',
                'one thousand',
              ],
              ans: 1,
            },
            {
              question: `'T' or 'tera'`,
              listAns: [
                `the smallest unit of storage; normally referred to as a '1' or '0'`,
                'one trillion',
                'one thousand',
              ],
              ans: 1,
            },
          ],
        },
        {
          level: 'basic',
          title: 'Listening Comprehension',
          required: true,
          description: 'Listen to the word and type it in.',
          status: 0,
          type: 4,
          data: [
            {
              audioUrl: '',
              ans: 'floating point operations per second',
            },
            {
              audioUrl: '',
              ans: 'nano',
            },
            {
              audioUrl: '',
              ans: 'fault tolerance',
            },
            {
              audioUrl: '',
              ans: 'operations',
            },
          ],
        },
        {
          level: 'basic',
          title: 'Spelling and Recognition',
          required: true,
          description: 'Type in the correct answer for each definition.',
          status: 0,
          type: 5,
          data: [
            {
              question: 'one billion bytes',
              ans: 'gygabybte',
            },
            {
              question:
                'The ability of a system component to fail without causing the entire system to shut down; this is often accomplished with redundancy',
              ans: 'fault tolerance',
            },
            {
              question:
                'a measurement or standard that serves as a point of reference by which process performance is measured',
              ans: 'benchmark',
            },
          ],
        },
        {
          level: 'advanced',
          title: 'Speaking Activity',
          required: false,
          description: 'Record yourself speaking English.',
          status: 0,
          type: 6,
          data: [
            {
              audioUrl: '',
              text: 'Logarithms are used in many areas of science and engineering including computer science and geology.',
            },
            {
              audioUrl: '',
              text: 'Modern hard drives can store 500 gigabytes of data or more.',
            },
            {
              audioUrl: '',
              text: 'How long will it be before the first 5-gigahertz processors become affordable?',
            },
            {
              audioUrl: '',
              text: 'Computer processing power can increase by an order of magnitude between generations.',
            },
            {
              audioUrl: '',
              text: 'The website performed very poorly because it was graphically heavy and required more bandwidth than was available.',
            },
          ],
        },
        {
          level: 'advanced',
          title: 'Writing Activity',
          required: true,
          description: 'Pick a question and write about it.',
          status: 0,
          type: 7,
          data: [
            {
              question: 'Do you think people in IT use too many acronyms? Why?',
              instructions: [
                'Your writing will be graded on both content and proper grammar .',
                'The writing must be between 65 and 400 words long. Please note that some programns count words differently than others (IE Word, Google Docs, etc).',
                'Write your answer using your favorite text editor, save it, and then paste a copy in the form below.',
              ],
            },
            {
              question:
                'Think of 3 more IT acronyms not listed in this reading. Define each of them and use them in a sentence.',
              instructions: [
                'Your writing will be graded on both content and proper grammar .',
                'The writing must be between 65 and 400 words long. Please note that some programns count words differently than others (IE Word, Google Docs, etc).',
                'Write your answer using your favorite text editor, save it, and then paste a copy in the form below.',
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'The Internet',
      actitivies: [
        {
          level: 'basic',
          title: 'Vocabulary Activity',
          required: true,
          description: 'Unit vocabulary, definitions, and example sentences.',
          status: 0,
          type: 1,
          data: [
            {
              vocab: { text: 'acronym', audioUrl: '' },
              description: `an abbreviation; a way of writing a longer string of words more concisely`,
              example: {
                text: 'IT is an acronym for Information Technology.',
                audioUrl: '',
              },
            },
            {
              vocab: { text: 'bandwidth', audioUrl: '' },
              description: `a measurement of the capacity of data which can be moved between two points in a given period of time`,
              example: {
                text: 'The website performed very poorly because it was graphically heavy and required more bandwidth than was available.',
                audioUrl: '',
              },
            },
            {
              vocab: { text: 'benchmark', audioUrl: '' },
              description: `a measurement or standard that serves as a point of reference by which process performance is measured`,
              example: {
                text: 'The magazine article used PCMark 7 scores as a benchmark for computer performance.',
                audioUrl: '',
              },
            },
            {
              vocab: { text: 'bit', orText: 'binary digit', audioUrl: '' },
              description: `he smallest unit of storage; normally referred to as a '1' or '0'`,
              example: {
                text: 'The DBA "flipped a bit" in the database, changing a value from a 0 to 1.',
                audioUrl: '',
              },
            },
          ],
        },
        {
          level: 'basic',
          title: 'Reading Activity Plus Questions',
          required: true,
          description:
            'Read the article as you listen along. Focus on learning the unit vocabulary.',
          status: 0,
          type: 2,
          data: {
            audioUrl: '',
            read: `<div class="max-width-small paper mb-2 reading-text reading-well">
                        <h2 class="title">IT Acronyms and Measurements</h2><p>
                        The world of IT is full of acronyms and abbreviations. So is the world of measurements. That's pretty much a guarantee that everyone working with IT measurements is going to get confused. For example, what is the difference between an MB and an Mbit? What does ERP or CMS stand for? 
                        The above are examples of standard acronyms we hear all the time. Inside every organization there is likely to be a whole range of industry-specific acronyms as well. For instance, in my company we often talk of LMS, CAT, SEO, SL20, and many, many more. 
                        </p>
                        
                        <p>
                        If someone mentions an unfamiliar acronym in your presence, you should ask the person to clarify and explain it. Most likely you will not be the only person in the room who feels lost. Asking questions is not seen as a sign of weakness in a modern IT department. It is a sign of curiosity and seeking to better oneself and one's knowledge about a subject. But let's not kid ourselves... in your IT career, you will have acronyms for everything. Soon it will be you confusing newbies with acronyms of your own.
                        </p>
                        
                        <h3>It needs acronyms because information is constantly expanding out of control</h3>
                        
                        <p>
                        Here are some examples of information explosion:
                        </p>
                        
                        <p>
                        · The CPU at the heart of Apple's iPhone 4 is more powerful than a Cray supercomputer costing millions of dollars from the 1970's.
                        </p>
                        
                        <p>
                        · The software that powers the space shuttle runs on a single MB of RAM. The minimum RAM requirement for Windows 7 is 1 GB ( or 1,000 times as much).
                        </p>
                        
                        <p>
                        · If automobiles had improved their performance at the same rate as computers over the past 50 years, we might all be driving $500 cars that go 5,000 kilometers per hour, and get 500 kilometers per liter of fuel. They would probably fly too. Cool.
                        </p>
                        
                        <p>
                        · In 1980, a 10MB hard drive cost over $4,000 and was considered to be a lot of storage. Today, you can't even buy a 10MB hard drive. It would be worthless and pointless. Even Windows 95, released way back in April 1995, required a 55MB minimum hard drive. Now you can get a TB drive for under a hundred dollars.
                        </p>
                        
                        <p>
                        · Did you know that in 2010 Youtube transfers more data in one day then the entire Internet did in the year 2000? 
                        </p>
                        
                        <h3>
                        Acronyms and abbreviations are essential to IT. Learning them is easier than you think.
                        </h3>
                        
                        <p>
                        Computers tend to get more powerful on an order of magnitude over previous generations. Some people have even tried to quantify this phenomenon. One example is Moore's Law. A simple way to explain Moore's Law is that a brand new computer is completely outdated in five years.
                        </p>
                        
                        <p>
                        How do you remember the difference between a kilobyte, megabyte, gigabyte, and a terabyte without going crazy? 
                        </p>
                        
                        <p>
                        This is how. Break the terms down into their components. The word "megabyte" consists of two different words... "mega" and "byte". 
                        </p>
                        
                        <p>
                        "Mega" is a multiplier prefix found at the start of measurement words which means 1,000,000 (or a million times). 
                        </p>
                        
                        <p>
                        One "byte" is equal (normally) to 8 "bits".
                        </p>
                        
                        <p>
                        A "bit" is equal to 1 switch "on" or "off" (either a 1 or 0).
                        </p>
                        
                        <p>
                        It takes between 1 and 3 bytes to hold a letter... depending on what kind of character encoding you are using. 
                        </p>
                        
                        <p>
                        So a megabyte is equal to 8,000,000 bits.... or roughly equivalent to 500,000 letters of the alphabet. This is about the length of a short novel. 
                        </p>
                        
                        <p>
                        the prefix <a class="show-modal-vocab" href="/dictionary/popupShow/70">giga</a> means 1,000,000,000 or one billion times.
                        </p>
                        
                        <p>
                        So how many bits is in a gigabyte? That's right... 8,000,000,000. Enough to store 1,000 novels.
                        </p>
                        
                        <p>
                        Once you learn the prefixes and basic units of measure, it's all very easy.
                        </p>
                        
                        <p>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/604">kilo</a> = 1,000 <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/603">mega</a> = 1,000,000 <br>
                        giga = 1,000,000,000 <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/605">tera</a> = 1,000,000,000,000 <br>
                        peta = 1,000,000,000,000,000 <br>
                        exa = 1,000,000,000,000,000,000 <br>
                        
                        </p><p>
                        There are bigger units of measurement that an exabyte, such as a zettabyte and a yottabyte, but we will not discuss them in this course at this time. But your children and grandchildren will have to know them!
                        </p>
                        
                        <p>
                        How big is an exabyte? For instance, every word ever spoken by every member of mankind would fill about 5 exabytes of storage space. The Internet transfers around 21 exabytes of data every month. 
                        </p>
                        
                        <p>
                        Now those are the "big number" multipliers. In IT however, things are not always big. They can also be very small. Unfortunately the "small multipliers" are often used erroneously. For example the words "microprocessor" and "nanotechnology" use mathematical prefixes, but not accurately. What they really mean in general is "really damn small". 
                        </p>
                        
                        <p>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/357">milli</a> = .001 <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/602">micro</a> = .000 001 <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/78">nano</a> = .000 000 001 <br>
                        pico = .000 000 000 0001 <br>
                        
                        </p><p>
                        Now that we know the prefixes... it's time to learn the units. We have already discussed byte and bit. This is a common measurement in computing. Although computers are much faster now than they were in 1940 (around the time they were invented), they are still digital, meaning that they can only understand zeros and ones (0 and 1).
                        </p>
                        
                        <p>
                        You can put all the prefixes you learned (especially the big ones) onto any the following units of measurement related to IT:
                        </p>
                        
                        <p>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/45">bit</a> <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/48">byte</a> <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/2823">bps</a> <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/13">hz</a> <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/606">flops</a> <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/608">IPS</a> <br>
                        </p>
                        
                        <p>
                        What can you do with these measurements? Almost everything! Compute <a class="show-modal-vocab" href="/dictionary/popupShow/39">bandwidth</a>, measure processor speed in TFLOPs with a <a class="show-modal-vocab" href="/dictionary/popupShow/42">benchmark</a>ing program, compare quality of digital cameras or monitors, and much, much more.
                        </p>
                        
                        <p>
                        Have fun, and don't fear IT acronyms and measurements. They are only here to help us.
                        </p>        </div>`,
            questions: [
              {
                question: 'A megabyte contains 8,000,000,000 bits.',
                listAns: ['True', 'False'],
                ans: 0,
              },
              {
                question:
                  'A bit is a switch (0/1) and commonly used in benchmarks.',
                listAns: ['True', 'False'],
                ans: 0,
              },
              {
                question: 'Hz (hertz) is the smallest unit of storage.',
                listAns: ['True', 'False'],
                ans: 1,
              },
            ],
          },
        },
        {
          level: 'basic',
          title: 'Multiple Choice',
          required: true,
          description: 'Pick the correct answer from a list.',
          status: 0,
          type: 3,
          data: [
            {
              question: `'M' or 'mega'`,
              listAns: [
                'one milion',
                '8 bits',
                'an internationally used frequency unit; equals one cycle per second',
              ],
              ans: 0,
            },
            {
              question: `'T' or 'tera'`,
              listAns: [
                `the smallest unit of storage; normally referred to as a '1' or '0'`,
                'one trillion',
                'one thousand',
              ],
              ans: 1,
            },
            {
              question: `'M' or 'mega'`,
              listAns: [
                'one milion',
                '8 bits',
                'an internationally used frequency unit; equals one cycle per second',
              ],
              ans: 0,
            },
            {
              question: `'T' or 'tera'`,
              listAns: [
                `the smallest unit of storage; normally referred to as a '1' or '0'`,
                'one trillion',
                'one thousand',
              ],
              ans: 1,
            },
            {
              question: `'T' or 'tera'`,
              listAns: [
                `the smallest unit of storage; normally referred to as a '1' or '0'`,
                'one trillion',
                'one thousand',
              ],
              ans: 1,
            },
          ],
        },
        {
          level: 'basic',
          title: 'Listening Comprehension',
          required: true,
          description: 'Listen to the word and type it in.',
          status: 0,
          type: 4,
          data: [
            {
              audioUrl: '',
              ans: 'floating point operations per second',
            },
            {
              audioUrl: '',
              ans: 'nano',
            },
            {
              audioUrl: '',
              ans: 'fault tolerance',
            },
            {
              audioUrl: '',
              ans: 'operations',
            },
          ],
        },
        {
          level: 'basic',
          title: 'Spelling and Recognition',
          required: true,
          description: 'Type in the correct answer for each definition.',
          status: 0,
          type: 5,
          data: [
            {
              question: 'one billion bytes',
              ans: 'gygabybte',
            },
            {
              question:
                'The ability of a system component to fail without causing the entire system to shut down; this is often accomplished with redundancy',
              ans: 'fault tolerance',
            },
            {
              question:
                'a measurement or standard that serves as a point of reference by which process performance is measured',
              ans: 'benchmark',
            },
          ],
        },
        {
          level: 'advanced',
          title: 'Speaking Activity',
          required: false,
          description: 'Record yourself speaking English.',
          status: 0,
          type: 6,
          data: [
            {
              audioUrl: '',
              text: 'Logarithms are used in many areas of science and engineering including computer science and geology.',
            },
            {
              audioUrl: '',
              text: 'Modern hard drives can store 500 gigabytes of data or more.',
            },
            {
              audioUrl: '',
              text: 'How long will it be before the first 5-gigahertz processors become affordable?',
            },
            {
              audioUrl: '',
              text: 'Computer processing power can increase by an order of magnitude between generations.',
            },
            {
              audioUrl: '',
              text: 'The website performed very poorly because it was graphically heavy and required more bandwidth than was available.',
            },
          ],
        },
        {
          level: 'advanced',
          title: 'Writing Activity',
          required: true,
          description: 'Pick a question and write about it.',
          status: 0,
          type: 7,
          data: [
            {
              question: 'Do you think people in IT use too many acronyms? Why?',
              instructions: [
                'Your writing will be graded on both content and proper grammar .',
                'The writing must be between 65 and 400 words long. Please note that some programns count words differently than others (IE Word, Google Docs, etc).',
                'Write your answer using your favorite text editor, save it, and then paste a copy in the form below.',
              ],
            },
            {
              question:
                'Think of 3 more IT acronyms not listed in this reading. Define each of them and use them in a sentence.',
              instructions: [
                'Your writing will be graded on both content and proper grammar .',
                'The writing must be between 65 and 400 words long. Please note that some programns count words differently than others (IE Word, Google Docs, etc).',
                'Write your answer using your favorite text editor, save it, and then paste a copy in the form below.',
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'People in IT',
      actitivies: [
        {
          level: 'basic',
          title: 'Vocabulary Activity',
          required: true,
          description: 'Unit vocabulary, definitions, and example sentences.',
          status: 0,
          type: 1,
          data: [
            {
              vocab: { text: 'acronym', audioUrl: '' },
              description: `an abbreviation; a way of writing a longer string of words more concisely`,
              example: {
                text: 'IT is an acronym for Information Technology.',
                audioUrl: '',
              },
            },
            {
              vocab: { text: 'bandwidth', audioUrl: '' },
              description: `a measurement of the capacity of data which can be moved between two points in a given period of time`,
              example: {
                text: 'The website performed very poorly because it was graphically heavy and required more bandwidth than was available.',
                audioUrl: '',
              },
            },
            {
              vocab: { text: 'benchmark', audioUrl: '' },
              description: `a measurement or standard that serves as a point of reference by which process performance is measured`,
              example: {
                text: 'The magazine article used PCMark 7 scores as a benchmark for computer performance.',
                audioUrl: '',
              },
            },
            {
              vocab: { text: 'bit', orText: 'binary digit', audioUrl: '' },
              description: `he smallest unit of storage; normally referred to as a '1' or '0'`,
              example: {
                text: 'The DBA "flipped a bit" in the database, changing a value from a 0 to 1.',
                audioUrl: '',
              },
            },
          ],
        },
        {
          level: 'basic',
          title: 'Reading Activity Plus Questions',
          required: true,
          description:
            'Read the article as you listen along. Focus on learning the unit vocabulary.',
          status: 0,
          type: 2,
          data: {
            audioUrl: '',
            read: `<div class="max-width-small paper mb-2 reading-text reading-well">
                        <h2 class="title">IT Acronyms and Measurements</h2><p>
                        The world of IT is full of acronyms and abbreviations. So is the world of measurements. That's pretty much a guarantee that everyone working with IT measurements is going to get confused. For example, what is the difference between an MB and an Mbit? What does ERP or CMS stand for? 
                        The above are examples of standard acronyms we hear all the time. Inside every organization there is likely to be a whole range of industry-specific acronyms as well. For instance, in my company we often talk of LMS, CAT, SEO, SL20, and many, many more. 
                        </p>
                        
                        <p>
                        If someone mentions an unfamiliar acronym in your presence, you should ask the person to clarify and explain it. Most likely you will not be the only person in the room who feels lost. Asking questions is not seen as a sign of weakness in a modern IT department. It is a sign of curiosity and seeking to better oneself and one's knowledge about a subject. But let's not kid ourselves... in your IT career, you will have acronyms for everything. Soon it will be you confusing newbies with acronyms of your own.
                        </p>
                        
                        <h3>It needs acronyms because information is constantly expanding out of control</h3>
                        
                        <p>
                        Here are some examples of information explosion:
                        </p>
                        
                        <p>
                        · The CPU at the heart of Apple's iPhone 4 is more powerful than a Cray supercomputer costing millions of dollars from the 1970's.
                        </p>
                        
                        <p>
                        · The software that powers the space shuttle runs on a single MB of RAM. The minimum RAM requirement for Windows 7 is 1 GB ( or 1,000 times as much).
                        </p>
                        
                        <p>
                        · If automobiles had improved their performance at the same rate as computers over the past 50 years, we might all be driving $500 cars that go 5,000 kilometers per hour, and get 500 kilometers per liter of fuel. They would probably fly too. Cool.
                        </p>
                        
                        <p>
                        · In 1980, a 10MB hard drive cost over $4,000 and was considered to be a lot of storage. Today, you can't even buy a 10MB hard drive. It would be worthless and pointless. Even Windows 95, released way back in April 1995, required a 55MB minimum hard drive. Now you can get a TB drive for under a hundred dollars.
                        </p>
                        
                        <p>
                        · Did you know that in 2010 Youtube transfers more data in one day then the entire Internet did in the year 2000? 
                        </p>
                        
                        <h3>
                        Acronyms and abbreviations are essential to IT. Learning them is easier than you think.
                        </h3>
                        
                        <p>
                        Computers tend to get more powerful on an order of magnitude over previous generations. Some people have even tried to quantify this phenomenon. One example is Moore's Law. A simple way to explain Moore's Law is that a brand new computer is completely outdated in five years.
                        </p>
                        
                        <p>
                        How do you remember the difference between a kilobyte, megabyte, gigabyte, and a terabyte without going crazy? 
                        </p>
                        
                        <p>
                        This is how. Break the terms down into their components. The word "megabyte" consists of two different words... "mega" and "byte". 
                        </p>
                        
                        <p>
                        "Mega" is a multiplier prefix found at the start of measurement words which means 1,000,000 (or a million times). 
                        </p>
                        
                        <p>
                        One "byte" is equal (normally) to 8 "bits".
                        </p>
                        
                        <p>
                        A "bit" is equal to 1 switch "on" or "off" (either a 1 or 0).
                        </p>
                        
                        <p>
                        It takes between 1 and 3 bytes to hold a letter... depending on what kind of character encoding you are using. 
                        </p>
                        
                        <p>
                        So a megabyte is equal to 8,000,000 bits.... or roughly equivalent to 500,000 letters of the alphabet. This is about the length of a short novel. 
                        </p>
                        
                        <p>
                        the prefix <a class="show-modal-vocab" href="/dictionary/popupShow/70">giga</a> means 1,000,000,000 or one billion times.
                        </p>
                        
                        <p>
                        So how many bits is in a gigabyte? That's right... 8,000,000,000. Enough to store 1,000 novels.
                        </p>
                        
                        <p>
                        Once you learn the prefixes and basic units of measure, it's all very easy.
                        </p>
                        
                        <p>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/604">kilo</a> = 1,000 <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/603">mega</a> = 1,000,000 <br>
                        giga = 1,000,000,000 <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/605">tera</a> = 1,000,000,000,000 <br>
                        peta = 1,000,000,000,000,000 <br>
                        exa = 1,000,000,000,000,000,000 <br>
                        
                        </p><p>
                        There are bigger units of measurement that an exabyte, such as a zettabyte and a yottabyte, but we will not discuss them in this course at this time. But your children and grandchildren will have to know them!
                        </p>
                        
                        <p>
                        How big is an exabyte? For instance, every word ever spoken by every member of mankind would fill about 5 exabytes of storage space. The Internet transfers around 21 exabytes of data every month. 
                        </p>
                        
                        <p>
                        Now those are the "big number" multipliers. In IT however, things are not always big. They can also be very small. Unfortunately the "small multipliers" are often used erroneously. For example the words "microprocessor" and "nanotechnology" use mathematical prefixes, but not accurately. What they really mean in general is "really damn small". 
                        </p>
                        
                        <p>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/357">milli</a> = .001 <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/602">micro</a> = .000 001 <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/78">nano</a> = .000 000 001 <br>
                        pico = .000 000 000 0001 <br>
                        
                        </p><p>
                        Now that we know the prefixes... it's time to learn the units. We have already discussed byte and bit. This is a common measurement in computing. Although computers are much faster now than they were in 1940 (around the time they were invented), they are still digital, meaning that they can only understand zeros and ones (0 and 1).
                        </p>
                        
                        <p>
                        You can put all the prefixes you learned (especially the big ones) onto any the following units of measurement related to IT:
                        </p>
                        
                        <p>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/45">bit</a> <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/48">byte</a> <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/2823">bps</a> <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/13">hz</a> <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/606">flops</a> <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/608">IPS</a> <br>
                        </p>
                        
                        <p>
                        What can you do with these measurements? Almost everything! Compute <a class="show-modal-vocab" href="/dictionary/popupShow/39">bandwidth</a>, measure processor speed in TFLOPs with a <a class="show-modal-vocab" href="/dictionary/popupShow/42">benchmark</a>ing program, compare quality of digital cameras or monitors, and much, much more.
                        </p>
                        
                        <p>
                        Have fun, and don't fear IT acronyms and measurements. They are only here to help us.
                        </p>        </div>`,
            questions: [
              {
                question: 'A megabyte contains 8,000,000,000 bits.',
                listAns: ['True', 'False'],
                ans: 0,
              },
              {
                question:
                  'A bit is a switch (0/1) and commonly used in benchmarks.',
                listAns: ['True', 'False'],
                ans: 0,
              },
              {
                question: 'Hz (hertz) is the smallest unit of storage.',
                listAns: ['True', 'False'],
                ans: 1,
              },
            ],
          },
        },
        {
          level: 'basic',
          title: 'Multiple Choice',
          required: true,
          description: 'Pick the correct answer from a list.',
          status: 0,
          type: 3,
          data: [
            {
              question: `'M' or 'mega'`,
              listAns: [
                'one milion',
                '8 bits',
                'an internationally used frequency unit; equals one cycle per second',
              ],
              ans: 0,
            },
            {
              question: `'T' or 'tera'`,
              listAns: [
                `the smallest unit of storage; normally referred to as a '1' or '0'`,
                'one trillion',
                'one thousand',
              ],
              ans: 1,
            },
            {
              question: `'M' or 'mega'`,
              listAns: [
                'one milion',
                '8 bits',
                'an internationally used frequency unit; equals one cycle per second',
              ],
              ans: 0,
            },
            {
              question: `'T' or 'tera'`,
              listAns: [
                `the smallest unit of storage; normally referred to as a '1' or '0'`,
                'one trillion',
                'one thousand',
              ],
              ans: 1,
            },
            {
              question: `'T' or 'tera'`,
              listAns: [
                `the smallest unit of storage; normally referred to as a '1' or '0'`,
                'one trillion',
                'one thousand',
              ],
              ans: 1,
            },
          ],
        },
        {
          level: 'basic',
          title: 'Listening Comprehension',
          required: true,
          description: 'Listen to the word and type it in.',
          status: 0,
          type: 4,
          data: [
            {
              audioUrl: '',
              ans: 'floating point operations per second',
            },
            {
              audioUrl: '',
              ans: 'nano',
            },
            {
              audioUrl: '',
              ans: 'fault tolerance',
            },
            {
              audioUrl: '',
              ans: 'operations',
            },
          ],
        },
        {
          level: 'basic',
          title: 'Spelling and Recognition',
          required: true,
          description: 'Type in the correct answer for each definition.',
          status: 0,
          type: 5,
          data: [
            {
              question: 'one billion bytes',
              ans: 'gygabybte',
            },
            {
              question:
                'The ability of a system component to fail without causing the entire system to shut down; this is often accomplished with redundancy',
              ans: 'fault tolerance',
            },
            {
              question:
                'a measurement or standard that serves as a point of reference by which process performance is measured',
              ans: 'benchmark',
            },
          ],
        },
        {
          level: 'advanced',
          title: 'Speaking Activity',
          required: false,
          description: 'Record yourself speaking English.',
          status: 0,
          type: 6,
          data: [
            {
              audioUrl: '',
              text: 'Logarithms are used in many areas of science and engineering including computer science and geology.',
            },
            {
              audioUrl: '',
              text: 'Modern hard drives can store 500 gigabytes of data or more.',
            },
            {
              audioUrl: '',
              text: 'How long will it be before the first 5-gigahertz processors become affordable?',
            },
            {
              audioUrl: '',
              text: 'Computer processing power can increase by an order of magnitude between generations.',
            },
            {
              audioUrl: '',
              text: 'The website performed very poorly because it was graphically heavy and required more bandwidth than was available.',
            },
          ],
        },
        {
          level: 'advanced',
          title: 'Writing Activity',
          required: true,
          description: 'Pick a question and write about it.',
          status: 0,
          type: 7,
          data: [
            {
              question: 'Do you think people in IT use too many acronyms? Why?',
              instructions: [
                'Your writing will be graded on both content and proper grammar .',
                'The writing must be between 65 and 400 words long. Please note that some programns count words differently than others (IE Word, Google Docs, etc).',
                'Write your answer using your favorite text editor, save it, and then paste a copy in the form below.',
              ],
            },
            {
              question:
                'Think of 3 more IT acronyms not listed in this reading. Define each of them and use them in a sentence.',
              instructions: [
                'Your writing will be graded on both content and proper grammar .',
                'The writing must be between 65 and 400 words long. Please note that some programns count words differently than others (IE Word, Google Docs, etc).',
                'Write your answer using your favorite text editor, save it, and then paste a copy in the form below.',
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'Measurements',
      actitivies: [
        {
          level: 'basic',
          title: 'Vocabulary Activity',
          required: true,
          description: 'Unit vocabulary, definitions, and example sentences.',
          status: 0,
          type: 1,
          data: [
            {
              vocab: { text: 'acronym', audioUrl: '' },
              description: `an abbreviation; a way of writing a longer string of words more concisely`,
              example: {
                text: 'IT is an acronym for Information Technology.',
                audioUrl: '',
              },
            },
            {
              vocab: { text: 'bandwidth', audioUrl: '' },
              description: `a measurement of the capacity of data which can be moved between two points in a given period of time`,
              example: {
                text: 'The website performed very poorly because it was graphically heavy and required more bandwidth than was available.',
                audioUrl: '',
              },
            },
            {
              vocab: { text: 'benchmark', audioUrl: '' },
              description: `a measurement or standard that serves as a point of reference by which process performance is measured`,
              example: {
                text: 'The magazine article used PCMark 7 scores as a benchmark for computer performance.',
                audioUrl: '',
              },
            },
            {
              vocab: { text: 'bit', orText: 'binary digit', audioUrl: '' },
              description: `he smallest unit of storage; normally referred to as a '1' or '0'`,
              example: {
                text: 'The DBA "flipped a bit" in the database, changing a value from a 0 to 1.',
                audioUrl: '',
              },
            },
          ],
        },
        {
          level: 'basic',
          title: 'Reading Activity Plus Questions',
          required: true,
          description:
            'Read the article as you listen along. Focus on learning the unit vocabulary.',
          status: 0,
          type: 2,
          data: {
            audioUrl: '',
            read: `<div class="max-width-small paper mb-2 reading-text reading-well">
                        <h2 class="title">IT Acronyms and Measurements</h2><p>
                        The world of IT is full of acronyms and abbreviations. So is the world of measurements. That's pretty much a guarantee that everyone working with IT measurements is going to get confused. For example, what is the difference between an MB and an Mbit? What does ERP or CMS stand for? 
                        The above are examples of standard acronyms we hear all the time. Inside every organization there is likely to be a whole range of industry-specific acronyms as well. For instance, in my company we often talk of LMS, CAT, SEO, SL20, and many, many more. 
                        </p>
                        
                        <p>
                        If someone mentions an unfamiliar acronym in your presence, you should ask the person to clarify and explain it. Most likely you will not be the only person in the room who feels lost. Asking questions is not seen as a sign of weakness in a modern IT department. It is a sign of curiosity and seeking to better oneself and one's knowledge about a subject. But let's not kid ourselves... in your IT career, you will have acronyms for everything. Soon it will be you confusing newbies with acronyms of your own.
                        </p>
                        
                        <h3>It needs acronyms because information is constantly expanding out of control</h3>
                        
                        <p>
                        Here are some examples of information explosion:
                        </p>
                        
                        <p>
                        · The CPU at the heart of Apple's iPhone 4 is more powerful than a Cray supercomputer costing millions of dollars from the 1970's.
                        </p>
                        
                        <p>
                        · The software that powers the space shuttle runs on a single MB of RAM. The minimum RAM requirement for Windows 7 is 1 GB ( or 1,000 times as much).
                        </p>
                        
                        <p>
                        · If automobiles had improved their performance at the same rate as computers over the past 50 years, we might all be driving $500 cars that go 5,000 kilometers per hour, and get 500 kilometers per liter of fuel. They would probably fly too. Cool.
                        </p>
                        
                        <p>
                        · In 1980, a 10MB hard drive cost over $4,000 and was considered to be a lot of storage. Today, you can't even buy a 10MB hard drive. It would be worthless and pointless. Even Windows 95, released way back in April 1995, required a 55MB minimum hard drive. Now you can get a TB drive for under a hundred dollars.
                        </p>
                        
                        <p>
                        · Did you know that in 2010 Youtube transfers more data in one day then the entire Internet did in the year 2000? 
                        </p>
                        
                        <h3>
                        Acronyms and abbreviations are essential to IT. Learning them is easier than you think.
                        </h3>
                        
                        <p>
                        Computers tend to get more powerful on an order of magnitude over previous generations. Some people have even tried to quantify this phenomenon. One example is Moore's Law. A simple way to explain Moore's Law is that a brand new computer is completely outdated in five years.
                        </p>
                        
                        <p>
                        How do you remember the difference between a kilobyte, megabyte, gigabyte, and a terabyte without going crazy? 
                        </p>
                        
                        <p>
                        This is how. Break the terms down into their components. The word "megabyte" consists of two different words... "mega" and "byte". 
                        </p>
                        
                        <p>
                        "Mega" is a multiplier prefix found at the start of measurement words which means 1,000,000 (or a million times). 
                        </p>
                        
                        <p>
                        One "byte" is equal (normally) to 8 "bits".
                        </p>
                        
                        <p>
                        A "bit" is equal to 1 switch "on" or "off" (either a 1 or 0).
                        </p>
                        
                        <p>
                        It takes between 1 and 3 bytes to hold a letter... depending on what kind of character encoding you are using. 
                        </p>
                        
                        <p>
                        So a megabyte is equal to 8,000,000 bits.... or roughly equivalent to 500,000 letters of the alphabet. This is about the length of a short novel. 
                        </p>
                        
                        <p>
                        the prefix <a class="show-modal-vocab" href="/dictionary/popupShow/70">giga</a> means 1,000,000,000 or one billion times.
                        </p>
                        
                        <p>
                        So how many bits is in a gigabyte? That's right... 8,000,000,000. Enough to store 1,000 novels.
                        </p>
                        
                        <p>
                        Once you learn the prefixes and basic units of measure, it's all very easy.
                        </p>
                        
                        <p>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/604">kilo</a> = 1,000 <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/603">mega</a> = 1,000,000 <br>
                        giga = 1,000,000,000 <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/605">tera</a> = 1,000,000,000,000 <br>
                        peta = 1,000,000,000,000,000 <br>
                        exa = 1,000,000,000,000,000,000 <br>
                        
                        </p><p>
                        There are bigger units of measurement that an exabyte, such as a zettabyte and a yottabyte, but we will not discuss them in this course at this time. But your children and grandchildren will have to know them!
                        </p>
                        
                        <p>
                        How big is an exabyte? For instance, every word ever spoken by every member of mankind would fill about 5 exabytes of storage space. The Internet transfers around 21 exabytes of data every month. 
                        </p>
                        
                        <p>
                        Now those are the "big number" multipliers. In IT however, things are not always big. They can also be very small. Unfortunately the "small multipliers" are often used erroneously. For example the words "microprocessor" and "nanotechnology" use mathematical prefixes, but not accurately. What they really mean in general is "really damn small". 
                        </p>
                        
                        <p>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/357">milli</a> = .001 <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/602">micro</a> = .000 001 <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/78">nano</a> = .000 000 001 <br>
                        pico = .000 000 000 0001 <br>
                        
                        </p><p>
                        Now that we know the prefixes... it's time to learn the units. We have already discussed byte and bit. This is a common measurement in computing. Although computers are much faster now than they were in 1940 (around the time they were invented), they are still digital, meaning that they can only understand zeros and ones (0 and 1).
                        </p>
                        
                        <p>
                        You can put all the prefixes you learned (especially the big ones) onto any the following units of measurement related to IT:
                        </p>
                        
                        <p>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/45">bit</a> <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/48">byte</a> <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/2823">bps</a> <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/13">hz</a> <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/606">flops</a> <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/608">IPS</a> <br>
                        </p>
                        
                        <p>
                        What can you do with these measurements? Almost everything! Compute <a class="show-modal-vocab" href="/dictionary/popupShow/39">bandwidth</a>, measure processor speed in TFLOPs with a <a class="show-modal-vocab" href="/dictionary/popupShow/42">benchmark</a>ing program, compare quality of digital cameras or monitors, and much, much more.
                        </p>
                        
                        <p>
                        Have fun, and don't fear IT acronyms and measurements. They are only here to help us.
                        </p>        </div>`,
            questions: [
              {
                question: 'A megabyte contains 8,000,000,000 bits.',
                listAns: ['True', 'False'],
                ans: 0,
              },
              {
                question:
                  'A bit is a switch (0/1) and commonly used in benchmarks.',
                listAns: ['True', 'False'],
                ans: 0,
              },
              {
                question: 'Hz (hertz) is the smallest unit of storage.',
                listAns: ['True', 'False'],
                ans: 1,
              },
            ],
          },
        },
        {
          level: 'basic',
          title: 'Multiple Choice',
          required: true,
          description: 'Pick the correct answer from a list.',
          status: 0,
          type: 3,
          data: [
            {
              question: `'M' or 'mega'`,
              listAns: [
                'one milion',
                '8 bits',
                'an internationally used frequency unit; equals one cycle per second',
              ],
              ans: 0,
            },
            {
              question: `'T' or 'tera'`,
              listAns: [
                `the smallest unit of storage; normally referred to as a '1' or '0'`,
                'one trillion',
                'one thousand',
              ],
              ans: 1,
            },
            {
              question: `'M' or 'mega'`,
              listAns: [
                'one milion',
                '8 bits',
                'an internationally used frequency unit; equals one cycle per second',
              ],
              ans: 0,
            },
            {
              question: `'T' or 'tera'`,
              listAns: [
                `the smallest unit of storage; normally referred to as a '1' or '0'`,
                'one trillion',
                'one thousand',
              ],
              ans: 1,
            },
            {
              question: `'T' or 'tera'`,
              listAns: [
                `the smallest unit of storage; normally referred to as a '1' or '0'`,
                'one trillion',
                'one thousand',
              ],
              ans: 1,
            },
          ],
        },
        {
          level: 'basic',
          title: 'Listening Comprehension',
          required: true,
          description: 'Listen to the word and type it in.',
          status: 0,
          type: 4,
          data: [
            {
              audioUrl: '',
              ans: 'floating point operations per second',
            },
            {
              audioUrl: '',
              ans: 'nano',
            },
            {
              audioUrl: '',
              ans: 'fault tolerance',
            },
            {
              audioUrl: '',
              ans: 'operations',
            },
          ],
        },
        {
          level: 'basic',
          title: 'Spelling and Recognition',
          required: true,
          description: 'Type in the correct answer for each definition.',
          status: 0,
          type: 5,
          data: [
            {
              question: 'one billion bytes',
              ans: 'gygabybte',
            },
            {
              question:
                'The ability of a system component to fail without causing the entire system to shut down; this is often accomplished with redundancy',
              ans: 'fault tolerance',
            },
            {
              question:
                'a measurement or standard that serves as a point of reference by which process performance is measured',
              ans: 'benchmark',
            },
          ],
        },
        {
          level: 'advanced',
          title: 'Speaking Activity',
          required: false,
          description: 'Record yourself speaking English.',
          status: 0,
          type: 6,
          data: [
            {
              audioUrl: '',
              text: 'Logarithms are used in many areas of science and engineering including computer science and geology.',
            },
            {
              audioUrl: '',
              text: 'Modern hard drives can store 500 gigabytes of data or more.',
            },
            {
              audioUrl: '',
              text: 'How long will it be before the first 5-gigahertz processors become affordable?',
            },
            {
              audioUrl: '',
              text: 'Computer processing power can increase by an order of magnitude between generations.',
            },
            {
              audioUrl: '',
              text: 'The website performed very poorly because it was graphically heavy and required more bandwidth than was available.',
            },
          ],
        },
        {
          level: 'advanced',
          title: 'Writing Activity',
          required: true,
          description: 'Pick a question and write about it.',
          status: 0,
          type: 7,
          data: [
            {
              question: 'Do you think people in IT use too many acronyms? Why?',
              instructions: [
                'Your writing will be graded on both content and proper grammar .',
                'The writing must be between 65 and 400 words long. Please note that some programns count words differently than others (IE Word, Google Docs, etc).',
                'Write your answer using your favorite text editor, save it, and then paste a copy in the form below.',
              ],
            },
            {
              question:
                'Think of 3 more IT acronyms not listed in this reading. Define each of them and use them in a sentence.',
              instructions: [
                'Your writing will be graded on both content and proper grammar .',
                'The writing must be between 65 and 400 words long. Please note that some programns count words differently than others (IE Word, Google Docs, etc).',
                'Write your answer using your favorite text editor, save it, and then paste a copy in the form below.',
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'Programming Languages',
      actitivies: [
        {
          level: 'basic',
          title: 'Vocabulary Activity',
          required: true,
          description: 'Unit vocabulary, definitions, and example sentences.',
          status: 0,
          type: 1,
          data: [
            {
              vocab: { text: 'acronym', audioUrl: '' },
              description: `an abbreviation; a way of writing a longer string of words more concisely`,
              example: {
                text: 'IT is an acronym for Information Technology.',
                audioUrl: '',
              },
            },
            {
              vocab: { text: 'bandwidth', audioUrl: '' },
              description: `a measurement of the capacity of data which can be moved between two points in a given period of time`,
              example: {
                text: 'The website performed very poorly because it was graphically heavy and required more bandwidth than was available.',
                audioUrl: '',
              },
            },
            {
              vocab: { text: 'benchmark', audioUrl: '' },
              description: `a measurement or standard that serves as a point of reference by which process performance is measured`,
              example: {
                text: 'The magazine article used PCMark 7 scores as a benchmark for computer performance.',
                audioUrl: '',
              },
            },
            {
              vocab: { text: 'bit', orText: 'binary digit', audioUrl: '' },
              description: `he smallest unit of storage; normally referred to as a '1' or '0'`,
              example: {
                text: 'The DBA "flipped a bit" in the database, changing a value from a 0 to 1.',
                audioUrl: '',
              },
            },
          ],
        },
        {
          level: 'basic',
          title: 'Reading Activity Plus Questions',
          required: true,
          description:
            'Read the article as you listen along. Focus on learning the unit vocabulary.',
          status: 0,
          type: 2,
          data: {
            audioUrl: '',
            read: `<div class="max-width-small paper mb-2 reading-text reading-well">
                        <h2 class="title">IT Acronyms and Measurements</h2><p>
                        The world of IT is full of acronyms and abbreviations. So is the world of measurements. That's pretty much a guarantee that everyone working with IT measurements is going to get confused. For example, what is the difference between an MB and an Mbit? What does ERP or CMS stand for? 
                        The above are examples of standard acronyms we hear all the time. Inside every organization there is likely to be a whole range of industry-specific acronyms as well. For instance, in my company we often talk of LMS, CAT, SEO, SL20, and many, many more. 
                        </p>
                        
                        <p>
                        If someone mentions an unfamiliar acronym in your presence, you should ask the person to clarify and explain it. Most likely you will not be the only person in the room who feels lost. Asking questions is not seen as a sign of weakness in a modern IT department. It is a sign of curiosity and seeking to better oneself and one's knowledge about a subject. But let's not kid ourselves... in your IT career, you will have acronyms for everything. Soon it will be you confusing newbies with acronyms of your own.
                        </p>
                        
                        <h3>It needs acronyms because information is constantly expanding out of control</h3>
                        
                        <p>
                        Here are some examples of information explosion:
                        </p>
                        
                        <p>
                        · The CPU at the heart of Apple's iPhone 4 is more powerful than a Cray supercomputer costing millions of dollars from the 1970's.
                        </p>
                        
                        <p>
                        · The software that powers the space shuttle runs on a single MB of RAM. The minimum RAM requirement for Windows 7 is 1 GB ( or 1,000 times as much).
                        </p>
                        
                        <p>
                        · If automobiles had improved their performance at the same rate as computers over the past 50 years, we might all be driving $500 cars that go 5,000 kilometers per hour, and get 500 kilometers per liter of fuel. They would probably fly too. Cool.
                        </p>
                        
                        <p>
                        · In 1980, a 10MB hard drive cost over $4,000 and was considered to be a lot of storage. Today, you can't even buy a 10MB hard drive. It would be worthless and pointless. Even Windows 95, released way back in April 1995, required a 55MB minimum hard drive. Now you can get a TB drive for under a hundred dollars.
                        </p>
                        
                        <p>
                        · Did you know that in 2010 Youtube transfers more data in one day then the entire Internet did in the year 2000? 
                        </p>
                        
                        <h3>
                        Acronyms and abbreviations are essential to IT. Learning them is easier than you think.
                        </h3>
                        
                        <p>
                        Computers tend to get more powerful on an order of magnitude over previous generations. Some people have even tried to quantify this phenomenon. One example is Moore's Law. A simple way to explain Moore's Law is that a brand new computer is completely outdated in five years.
                        </p>
                        
                        <p>
                        How do you remember the difference between a kilobyte, megabyte, gigabyte, and a terabyte without going crazy? 
                        </p>
                        
                        <p>
                        This is how. Break the terms down into their components. The word "megabyte" consists of two different words... "mega" and "byte". 
                        </p>
                        
                        <p>
                        "Mega" is a multiplier prefix found at the start of measurement words which means 1,000,000 (or a million times). 
                        </p>
                        
                        <p>
                        One "byte" is equal (normally) to 8 "bits".
                        </p>
                        
                        <p>
                        A "bit" is equal to 1 switch "on" or "off" (either a 1 or 0).
                        </p>
                        
                        <p>
                        It takes between 1 and 3 bytes to hold a letter... depending on what kind of character encoding you are using. 
                        </p>
                        
                        <p>
                        So a megabyte is equal to 8,000,000 bits.... or roughly equivalent to 500,000 letters of the alphabet. This is about the length of a short novel. 
                        </p>
                        
                        <p>
                        the prefix <a class="show-modal-vocab" href="/dictionary/popupShow/70">giga</a> means 1,000,000,000 or one billion times.
                        </p>
                        
                        <p>
                        So how many bits is in a gigabyte? That's right... 8,000,000,000. Enough to store 1,000 novels.
                        </p>
                        
                        <p>
                        Once you learn the prefixes and basic units of measure, it's all very easy.
                        </p>
                        
                        <p>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/604">kilo</a> = 1,000 <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/603">mega</a> = 1,000,000 <br>
                        giga = 1,000,000,000 <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/605">tera</a> = 1,000,000,000,000 <br>
                        peta = 1,000,000,000,000,000 <br>
                        exa = 1,000,000,000,000,000,000 <br>
                        
                        </p><p>
                        There are bigger units of measurement that an exabyte, such as a zettabyte and a yottabyte, but we will not discuss them in this course at this time. But your children and grandchildren will have to know them!
                        </p>
                        
                        <p>
                        How big is an exabyte? For instance, every word ever spoken by every member of mankind would fill about 5 exabytes of storage space. The Internet transfers around 21 exabytes of data every month. 
                        </p>
                        
                        <p>
                        Now those are the "big number" multipliers. In IT however, things are not always big. They can also be very small. Unfortunately the "small multipliers" are often used erroneously. For example the words "microprocessor" and "nanotechnology" use mathematical prefixes, but not accurately. What they really mean in general is "really damn small". 
                        </p>
                        
                        <p>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/357">milli</a> = .001 <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/602">micro</a> = .000 001 <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/78">nano</a> = .000 000 001 <br>
                        pico = .000 000 000 0001 <br>
                        
                        </p><p>
                        Now that we know the prefixes... it's time to learn the units. We have already discussed byte and bit. This is a common measurement in computing. Although computers are much faster now than they were in 1940 (around the time they were invented), they are still digital, meaning that they can only understand zeros and ones (0 and 1).
                        </p>
                        
                        <p>
                        You can put all the prefixes you learned (especially the big ones) onto any the following units of measurement related to IT:
                        </p>
                        
                        <p>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/45">bit</a> <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/48">byte</a> <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/2823">bps</a> <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/13">hz</a> <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/606">flops</a> <br>
                        <a class="show-modal-vocab" href="/dictionary/popupShow/608">IPS</a> <br>
                        </p>
                        
                        <p>
                        What can you do with these measurements? Almost everything! Compute <a class="show-modal-vocab" href="/dictionary/popupShow/39">bandwidth</a>, measure processor speed in TFLOPs with a <a class="show-modal-vocab" href="/dictionary/popupShow/42">benchmark</a>ing program, compare quality of digital cameras or monitors, and much, much more.
                        </p>
                        
                        <p>
                        Have fun, and don't fear IT acronyms and measurements. They are only here to help us.
                        </p>        </div>`,
            questions: [
              {
                question: 'A megabyte contains 8,000,000,000 bits.',
                listAns: ['True', 'False'],
                ans: 0,
              },
              {
                question:
                  'A bit is a switch (0/1) and commonly used in benchmarks.',
                listAns: ['True', 'False'],
                ans: 0,
              },
              {
                question: 'Hz (hertz) is the smallest unit of storage.',
                listAns: ['True', 'False'],
                ans: 1,
              },
            ],
          },
        },
        {
          level: 'basic',
          title: 'Multiple Choice',
          required: true,
          description: 'Pick the correct answer from a list.',
          status: 0,
          type: 3,
          data: [
            {
              question: `'M' or 'mega'`,
              listAns: [
                'one milion',
                '8 bits',
                'an internationally used frequency unit; equals one cycle per second',
              ],
              ans: 0,
            },
            {
              question: `'T' or 'tera'`,
              listAns: [
                `the smallest unit of storage; normally referred to as a '1' or '0'`,
                'one trillion',
                'one thousand',
              ],
              ans: 1,
            },
            {
              question: `'M' or 'mega'`,
              listAns: [
                'one milion',
                '8 bits',
                'an internationally used frequency unit; equals one cycle per second',
              ],
              ans: 0,
            },
            {
              question: `'T' or 'tera'`,
              listAns: [
                `the smallest unit of storage; normally referred to as a '1' or '0'`,
                'one trillion',
                'one thousand',
              ],
              ans: 1,
            },
            {
              question: `'T' or 'tera'`,
              listAns: [
                `the smallest unit of storage; normally referred to as a '1' or '0'`,
                'one trillion',
                'one thousand',
              ],
              ans: 1,
            },
          ],
        },
        {
          level: 'basic',
          title: 'Listening Comprehension',
          required: true,
          description: 'Listen to the word and type it in.',
          status: 0,
          type: 4,
          data: [
            {
              audioUrl: '',
              ans: 'floating point operations per second',
            },
            {
              audioUrl: '',
              ans: 'nano',
            },
            {
              audioUrl: '',
              ans: 'fault tolerance',
            },
            {
              audioUrl: '',
              ans: 'operations',
            },
          ],
        },
        {
          level: 'basic',
          title: 'Spelling and Recognition',
          required: true,
          description: 'Type in the correct answer for each definition.',
          status: 0,
          type: 5,
          data: [
            {
              question: 'one billion bytes',
              ans: 'gygabybte',
            },
            {
              question:
                'The ability of a system component to fail without causing the entire system to shut down; this is often accomplished with redundancy',
              ans: 'fault tolerance',
            },
            {
              question:
                'a measurement or standard that serves as a point of reference by which process performance is measured',
              ans: 'benchmark',
            },
          ],
        },
        {
          level: 'advanced',
          title: 'Speaking Activity',
          required: false,
          description: 'Record yourself speaking English.',
          status: 0,
          type: 6,
          data: [
            {
              audioUrl: '',
              text: 'Logarithms are used in many areas of science and engineering including computer science and geology.',
            },
            {
              audioUrl: '',
              text: 'Modern hard drives can store 500 gigabytes of data or more.',
            },
            {
              audioUrl: '',
              text: 'How long will it be before the first 5-gigahertz processors become affordable?',
            },
            {
              audioUrl: '',
              text: 'Computer processing power can increase by an order of magnitude between generations.',
            },
            {
              audioUrl: '',
              text: 'The website performed very poorly because it was graphically heavy and required more bandwidth than was available.',
            },
          ],
        },
        {
          level: 'advanced',
          title: 'Writing Activity',
          required: true,
          description: 'Pick a question and write about it.',
          status: 0,
          type: 7,
          data: [
            {
              question: 'Do you think people in IT use too many acronyms? Why?',
              instructions: [
                'Your writing will be graded on both content and proper grammar .',
                'The writing must be between 65 and 400 words long. Please note that some programns count words differently than others (IE Word, Google Docs, etc).',
                'Write your answer using your favorite text editor, save it, and then paste a copy in the form below.',
              ],
            },
            {
              question:
                'Think of 3 more IT acronyms not listed in this reading. Define each of them and use them in a sentence.',
              instructions: [
                'Your writing will be graded on both content and proper grammar .',
                'The writing must be between 65 and 400 words long. Please note that some programns count words differently than others (IE Word, Google Docs, etc).',
                'Write your answer using your favorite text editor, save it, and then paste a copy in the form below.',
              ],
            },
          ],
        },
      ],
    },
  ],
  userUnits: [
    {
      title: 'Welcome to English for Catalyst',
      actitivies: [
        {
          description: 'Unit vocabulary, definitions, and example sentences.',
          status: 2,
          type: 1,
        },
        {
          description:
            'Read the article as you listen along. Focus on learning the unit vocabulary.',
          status: 0,
          type: 2,
          data: {
            questions: [0, 0, 1],
          },
        },
        {
          description: 'Pick the correct answer from a list.',
          status: 0,
          type: 3,
          data: [0, 1, 0, 1, 1],
        },
        {
          description: 'Listen to the word and type it in.',
          status: 0,
          type: 4,
          data: [
            'floating point operations per second',
            'nano',
            'fault tolerance',
            'operations',
          ],
        },
        {
          description: 'Type in the correct answer for each definition.',
          status: 0,
          type: 5,
          data: ['gygabybte', 'fault tolerance', 'benchmark'],
        },
        {
          description: 'Record yourself speaking English.',
          status: 0,
          type: 6,
          audioUrl: '',
        },
        {
          description: 'Pick a question and write about it.',
          status: 0,
          type: 7,
          data: {
            question: 'Do you think people in IT use too many acronyms? Why?',
            writeUrl: '',
          },
        },
      ],
    },
    {
      title: 'Welcome to English for Catalyst',
      actitivies: [
        {
          description: 'Unit vocabulary, definitions, and example sentences.',
          status: 2,
          type: 1,
        },
        {
          description:
            'Read the article as you listen along. Focus on learning the unit vocabulary.',
          status: 2,
          type: 2,
          data: {
            questions: [0, 0, 1],
          },
        },
        {
          description: 'Pick the correct answer from a list.',
          status: 2,
          type: 3,
          data: [0, 1, 0, 1, 1],
        },
        {
          description: 'Listen to the word and type it in.',
          status: 2,
          type: 4,
          data: [
            'floating point operations per second',
            'nano',
            'fault tolerance',
            'operations',
          ],
        },
        {
          description: 'Type in the correct answer for each definition.',
          status: 2,
          type: 5,
          data: ['gygabybte', 'fault tolerance', 'benchmark'],
        },
        {
          description: 'Record yourself speaking English.',
          status: 2,
          type: 6,
          audioUrl: '',
        },
        {
          description: 'Pick a question and write about it.',
          status: 2,
          type: 7,
          data: {
            question: 'Do you think people in IT use too many acronyms? Why?',
            writeUrl: '',
          },
        },
      ],
    },
  ],
};
export default MockData;
