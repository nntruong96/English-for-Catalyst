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
              vocab: {
                text: 'acronym',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `an abbreviation; a way of writing a longer string of words more concisely`,
              example: {
                text: 'IT is an acronym for Information Technology.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'bandwidth',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `a measurement of the capacity of data which can be moved between two points in a given period of time`,
              example: {
                text: 'The website performed very poorly because it was graphically heavy and required more bandwidth than was available.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'benchmark',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `a measurement or standard that serves as a point of reference by which process performance is measured`,
              example: {
                text: 'The magazine article used PCMark 7 scores as a benchmark for computer performance.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'bit',
                orText: 'binary digit',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `he smallest unit of storage; normally referred to as a '1' or '0'`,
              example: {
                text: 'The DBA "flipped a bit" in the database, changing a value from a 0 to 1.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'byte',
                orText: 'binary term',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `8 bit`,
              example: {
                text: 'One byte of data is enough memory to hold a single ASCII character.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'fault tolerance',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `The ability of a system component to fail without causing the entire system to shut down; this is
            often accomplished with redundancy`,
              example: {
                text: `Due to low fault tolerances in the new gaming console's GPU, the manufacturer had to issue a total recall.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'FLOPS',
                orText: 'floating point operations per second',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `a common measurement of computer speed dealing with decimal calculations in a given
            amount of time`,
              example: {
                text: 'The more FLOPS a computer can do, the faster it is.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'frequency',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `the number of cycles per unit time of a sound wave, most often measured in hertz`,
              example: {
                text: `The new processor ran at much higher frequency than the one it replaced, going from 1.8 GHZ
        up to 4 GHZ.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'G',
                orText: 'giga',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one billion`,
              example: {
                text: `The word giga originally comes from the Greek word for 'giant'.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'GB',
                orText: 'gigabyte',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one billion bytes`,
              example: {
                text: `Modern hard drives can store 500 gigabytes of data or more.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'K',
                orText: 'kilo',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one thousand
      `,
              example: {
                text: 'A kilobyte is 1024 bytes.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'M',
                orText: 'mega',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one million`,
              example: {
                text: `One megabyte is 1,048,576 bytes.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'T',
                orText: 'tera',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one trillion`,
              example: {
                text: `There are 1,099,511,627,776 bytes in a terabyte.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'm',
                orText: 'milli',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `a prefix meaning one thousandth`,
              example: {
                text: 'One millitesla is one-thousandth of a tesla.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'µ',
                orText: 'micro',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one millionth`,
              example: {
                text: `Although micro means "one-millionth", many people use it to express simply "a great deal of smallness.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'n',
                orText: 'nano',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one billionth`,
              example: {
                text: 'The teacher said the word "nano" can also be used for anything very small, such as nanotechnology.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'IPS',
                orText: 'instructions per second',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `an very raw measurement of computer processor speed`,
              example: {
                text: 'IPS is a base measurement of computer speed often expressed in millions (MIPS).',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
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
          scorePass: 2,
          data: {
            audioUrl:
              'https://www.english4it.com/media/sounds/readings/143911/29.mp3?f=1661487165',
            read: `<div class="max-width-small paper mb-2 reading-text reading-well">
                    <h2 class="title">IT Acronyms and Measurements</h2> 
<p style="margin-top:12px">
                    The world of IT is full of acronyms and abbreviations. So is the world of measurements. That's pretty much a guarantee that everyone working with IT measurements is going to get confused. For example, what is the difference between an MB and an Mbit? What does ERP or CMS stand for? 
                    The above are examples of standard acronyms we hear all the time. Inside every organization there is likely to be a whole range of industry-specific acronyms as well. For instance, in my company we often talk of LMS, CAT, SEO, SL20, and many, many more. 
                    </p>
                    
                    <p style="margin-top:12px">
                    If someone mentions an unfamiliar acronym in your presence, you should ask the person to clarify and explain it. Most likely you will not be the only person in the room who feels lost. Asking questions is not seen as a sign of weakness in a modern IT department. It is a sign of curiosity and seeking to better oneself and one's knowledge about a subject. But let's not kid ourselves... in your IT career, you will have acronyms for everything. Soon it will be you confusing newbies with acronyms of your own.
                    </p>
                    
                    <h3>It needs acronyms because information is constantly expanding out of control</h3>
                    
                    <p style="margin-top:12px">
                    Here are some examples of information explosion:
                    </p>
                    
                    <p style="margin-top:12px">
                    · The CPU at the heart of Apple's iPhone 4 is more powerful than a Cray supercomputer costing millions of dollars from the 1970's.
                    </p>
                    
                    <p style="margin-top:12px">
                    · The software that powers the space shuttle runs on a single MB of RAM. The minimum RAM requirement for Windows 7 is 1 GB ( or 1,000 times as much).
                    </p>
                    
                    <p style="margin-top:12px">
                    · If automobiles had improved their performance at the same rate as computers over the past 50 years, we might all be driving $500 cars that go 5,000 kilometers per hour, and get 500 kilometers per liter of fuel. They would probably fly too. Cool.
                    </p>
                    
                    <p style="margin-top:12px">
                    · In 1980, a 10MB hard drive cost over $4,000 and was considered to be a lot of storage. Today, you can't even buy a 10MB hard drive. It would be worthless and pointless. Even Windows 95, released way back in April 1995, required a 55MB minimum hard drive. Now you can get a TB drive for under a hundred dollars.
                    </p>
                    
                    <p style="margin-top:12px">
                    · Did you know that in 2010 Youtube transfers more data in one day then the entire Internet did in the year 2000? 
                    </p>
                    
                    <h3>
                    Acronyms and abbreviations are essential to IT. Learning them is easier than you think.
                    </h3>
                    
                    <p style="margin-top:12px">
                    Computers tend to get more powerful on an order of magnitude over previous generations. Some people have even tried to quantify this phenomenon. One example is Moore's Law. A simple way to explain Moore's Law is that a brand new computer is completely outdated in five years.
                    </p>
                    
                    <p style="margin-top:12px">
                    How do you remember the difference between a kilobyte, megabyte, gigabyte, and a terabyte without going crazy? 
                    </p>
                    
                    <p style="margin-top:12px">
                    This is how. Break the terms down into their components. The word "megabyte" consists of two different words... "mega" and "byte". 
                    </p>
                    
                    <p style="margin-top:12px">
                    "Mega" is a multiplier prefix found at the start of measurement words which means 1,000,000 (or a million times). 
                    </p>
                    
                    <p style="margin-top:12px">
                    One "byte" is equal (normally) to 8 "bits".
                    </p>
                    
                    <p style="margin-top:12px">
                    A "bit" is equal to 1 switch "on" or "off" (either a 1 or 0).
                    </p>
                    
                    <p style="margin-top:12px">
                    It takes between 1 and 3 bytes to hold a letter... depending on what kind of character encoding you are using. 
                    </p>
                    
                    <p style="margin-top:12px">
                    So a megabyte is equal to 8,000,000 bits.... or roughly equivalent to 500,000 letters of the alphabet. This is about the length of a short novel. 
                    </p>
                    
                    <p style="margin-top:12px">
                    the prefix <a class="show-modal-vocab" >giga</a> means 1,000,000,000 or one billion times.
                    </p>
                    
                    <p style="margin-top:12px">
                    So how many bits is in a gigabyte? That's right... 8,000,000,000. Enough to store 1,000 novels.
                    </p>
                    
                    <p style="margin-top:12px">
                    Once you learn the prefixes and basic units of measure, it's all very easy.
                    </p>
                    
                    <p style="margin-top:12px">
                    <a class="show-modal-vocab" >kilo</a> = 1,000 <br>
                    <a class="show-modal-vocab" >mega</a> = 1,000,000 <br>
                    giga = 1,000,000,000 <br>
                    <a class="show-modal-vocab" >tera</a> = 1,000,000,000,000 <br>
                    peta = 1,000,000,000,000,000 <br>
                    exa = 1,000,000,000,000,000,000 <br>
                    
                    </p><p style="margin-top:12px">
                    There are bigger units of measurement that an exabyte, such as a zettabyte and a yottabyte, but we will not discuss them in this course at this time. But your children and grandchildren will have to know them!
                    </p>
                    
                    <p style="margin-top:12px">
                    How big is an exabyte? For instance, every word ever spoken by every member of mankind would fill about 5 exabytes of storage space. The Internet transfers around 21 exabytes of data every month. 
                    </p>
                    
                    <p style="margin-top:12px">
                    Now those are the "big number" multipliers. In IT however, things are not always big. They can also be very small. Unfortunately the "small multipliers" are often used erroneously. For example the words "microprocessor" and "nanotechnology" use mathematical prefixes, but not accurately. What they really mean in general is "really damn small". 
                    </p>
                    
                    <p style="margin-top:12px">
                    <a class="show-modal-vocab" >milli</a> = .001 <br>
                    <a class="show-modal-vocab" >micro</a> = .000 001 <br>
                    <a class="show-modal-vocab" >nano</a> = .000 000 001 <br>
                    pico = .000 000 000 0001 <br>
                    
                    </p><p style="margin-top:12px">
                    Now that we know the prefixes... it's time to learn the units. We have already discussed byte and bit. This is a common measurement in computing. Although computers are much faster now than they were in 1940 (around the time they were invented), they are still digital, meaning that they can only understand zeros and ones (0 and 1).
                    </p>
                    
                    <p style="margin-top:12px">
                    You can put all the prefixes you learned (especially the big ones) onto any the following units of measurement related to IT:
                    </p>
                    
                    <p style="margin-top:12px">
                    <a class="show-modal-vocab" >bit</a> <br>
                    <a class="show-modal-vocab" >byte</a> <br>
                    <a class="show-modal-vocab" >bps</a> <br>
                    <a class="show-modal-vocab" >hz</a> <br>
                    <a class="show-modal-vocab" >flops</a> <br>
                    <a class="show-modal-vocab" >IPS</a> <br>
                    </p>
                    
                    <p style="margin-top:12px">
                    What can you do with these measurements? Almost everything! Compute <a class="show-modal-vocab" >bandwidth</a>, measure processor speed in TFLOPs with a <a class="show-modal-vocab" >benchmark</a>ing program, compare quality of digital cameras or monitors, and much, much more.
                    </p>
                    
                    <p style="margin-top:12px">
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
          scorePass: 4,
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
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              ans: 'floating point operations per second',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              ans: 'nano',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              ans: 'fault tolerance',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
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
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              question:
                'Logarithms are used in many areas of science and engineering including computer science and geology.',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              question:
                'Modern hard drives can store 500 gigabytes of data or more.',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              question:
                'How long will it be before the first 5-gigahertz processors become affordable?',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              question:
                'Computer processing power can increase by an order of magnitude between generations.',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              question:
                'The website performed very poorly because it was graphically heavy and required more bandwidth than was available.',
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
              vocab: {
                text: 'acronym',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `an abbreviation; a way of writing a longer string of words more concisely`,
              example: {
                text: 'IT is an acronym for Information Technology.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'bandwidth',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `a measurement of the capacity of data which can be moved between two points in a given period of time`,
              example: {
                text: 'The website performed very poorly because it was graphically heavy and required more bandwidth than was available.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'benchmark',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `a measurement or standard that serves as a point of reference by which process performance is measured`,
              example: {
                text: 'The magazine article used PCMark 7 scores as a benchmark for computer performance.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'bit',
                orText: 'binary digit',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `he smallest unit of storage; normally referred to as a '1' or '0'`,
              example: {
                text: 'The DBA "flipped a bit" in the database, changing a value from a 0 to 1.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'byte',
                orText: 'binary term',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `8 bit`,
              example: {
                text: 'One byte of data is enough memory to hold a single ASCII character.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'fault tolerance',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `The ability of a system component to fail without causing the entire system to shut down; this is
            often accomplished with redundancy`,
              example: {
                text: `Due to low fault tolerances in the new gaming console's GPU, the manufacturer had to issue a total recall.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'FLOPS',
                orText: 'floating point operations per second',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `a common measurement of computer speed dealing with decimal calculations in a given
            amount of time`,
              example: {
                text: 'The more FLOPS a computer can do, the faster it is.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'frequency',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `the number of cycles per unit time of a sound wave, most often measured in hertz`,
              example: {
                text: `The new processor ran at much higher frequency than the one it replaced, going from 1.8 GHZ
        up to 4 GHZ.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'G',
                orText: 'giga',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one billion`,
              example: {
                text: `The word giga originally comes from the Greek word for 'giant'.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'GB',
                orText: 'gigabyte',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one billion bytes`,
              example: {
                text: `Modern hard drives can store 500 gigabytes of data or more.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'K',
                orText: 'kilo',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one thousand
      `,
              example: {
                text: 'A kilobyte is 1024 bytes.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'M',
                orText: 'mega',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one million`,
              example: {
                text: `One megabyte is 1,048,576 bytes.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'T',
                orText: 'tera',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one trillion`,
              example: {
                text: `There are 1,099,511,627,776 bytes in a terabyte.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'm',
                orText: 'milli',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `a prefix meaning one thousandth`,
              example: {
                text: 'One millitesla is one-thousandth of a tesla.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'µ',
                orText: 'micro',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one millionth`,
              example: {
                text: `Although micro means "one-millionth", many people use it to express simply "a great deal of smallness.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'n',
                orText: 'nano',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one billionth`,
              example: {
                text: 'The teacher said the word "nano" can also be used for anything very small, such as nanotechnology.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'IPS',
                orText: 'instructions per second',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `an very raw measurement of computer processor speed`,
              example: {
                text: 'IPS is a base measurement of computer speed often expressed in millions (MIPS).',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
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
          scorePass: 2,
          data: {
            audioUrl:
              'https://www.english4it.com/media/sounds/readings/143911/29.mp3?f=1661487165',
            read: `<div class="max-width-small paper mb-2 reading-text reading-well">
                      <h2  class="title">IT Acronyms and Measurements</h2> 
<p style="margin-top:12px">
                      The world of IT is full of acronyms and abbreviations. So is the world of measurements. That's pretty much a guarantee that everyone working with IT measurements is going to get confused. For example, what is the difference between an MB and an Mbit? What does ERP or CMS stand for? 
                      The above are examples of standard acronyms we hear all the time. Inside every organization there is likely to be a whole range of industry-specific acronyms as well. For instance, in my company we often talk of LMS, CAT, SEO, SL20, and many, many more. 
                      </p>
                      
                      <p style="margin-top:12px">
                      If someone mentions an unfamiliar acronym in your presence, you should ask the person to clarify and explain it. Most likely you will not be the only person in the room who feels lost. Asking questions is not seen as a sign of weakness in a modern IT department. It is a sign of curiosity and seeking to better oneself and one's knowledge about a subject. But let's not kid ourselves... in your IT career, you will have acronyms for everything. Soon it will be you confusing newbies with acronyms of your own.
                      </p>
                      
                      <h3>It needs acronyms because information is constantly expanding out of control</h3>
                      
                      <p style="margin-top:12px">
                      Here are some examples of information explosion:
                      </p>
                      
                      <p style="margin-top:12px">
                      · The CPU at the heart of Apple's iPhone 4 is more powerful than a Cray supercomputer costing millions of dollars from the 1970's.
                      </p>
                      
                      <p style="margin-top:12px">
                      · The software that powers the space shuttle runs on a single MB of RAM. The minimum RAM requirement for Windows 7 is 1 GB ( or 1,000 times as much).
                      </p>
                      
                      <p style="margin-top:12px">
                      · If automobiles had improved their performance at the same rate as computers over the past 50 years, we might all be driving $500 cars that go 5,000 kilometers per hour, and get 500 kilometers per liter of fuel. They would probably fly too. Cool.
                      </p>
                      
                      <p style="margin-top:12px">
                      · In 1980, a 10MB hard drive cost over $4,000 and was considered to be a lot of storage. Today, you can't even buy a 10MB hard drive. It would be worthless and pointless. Even Windows 95, released way back in April 1995, required a 55MB minimum hard drive. Now you can get a TB drive for under a hundred dollars.
                      </p>
                      
                      <p style="margin-top:12px">
                      · Did you know that in 2010 Youtube transfers more data in one day then the entire Internet did in the year 2000? 
                      </p>
                      
                      <h3>
                      Acronyms and abbreviations are essential to IT. Learning them is easier than you think.
                      </h3>
                      
                      <p style="margin-top:12px">
                      Computers tend to get more powerful on an order of magnitude over previous generations. Some people have even tried to quantify this phenomenon. One example is Moore's Law. A simple way to explain Moore's Law is that a brand new computer is completely outdated in five years.
                      </p>
                      
                      <p style="margin-top:12px">
                      How do you remember the difference between a kilobyte, megabyte, gigabyte, and a terabyte without going crazy? 
                      </p>
                      
                      <p style="margin-top:12px">
                      This is how. Break the terms down into their components. The word "megabyte" consists of two different words... "mega" and "byte". 
                      </p>
                      
                      <p style="margin-top:12px">
                      "Mega" is a multiplier prefix found at the start of measurement words which means 1,000,000 (or a million times). 
                      </p>
                      
                      <p style="margin-top:12px">
                      One "byte" is equal (normally) to 8 "bits".
                      </p>
                      
                      <p style="margin-top:12px">
                      A "bit" is equal to 1 switch "on" or "off" (either a 1 or 0).
                      </p>
                      
                      <p style="margin-top:12px">
                      It takes between 1 and 3 bytes to hold a letter... depending on what kind of character encoding you are using. 
                      </p>
                      
                      <p style="margin-top:12px">
                      So a megabyte is equal to 8,000,000 bits.... or roughly equivalent to 500,000 letters of the alphabet. This is about the length of a short novel. 
                      </p>
                      
                      <p style="margin-top:12px">
                      the prefix <a class="show-modal-vocab" >giga</a> means 1,000,000,000 or one billion times.
                      </p>
                      
                      <p style="margin-top:12px">
                      So how many bits is in a gigabyte? That's right... 8,000,000,000. Enough to store 1,000 novels.
                      </p>
                      
                      <p style="margin-top:12px">
                      Once you learn the prefixes and basic units of measure, it's all very easy.
                      </p>
                      
                      <p style="margin-top:12px">
                      <a class="show-modal-vocab" >kilo</a> = 1,000 <br>
                      <a class="show-modal-vocab" >mega</a> = 1,000,000 <br>
                      giga = 1,000,000,000 <br>
                      <a class="show-modal-vocab" >tera</a> = 1,000,000,000,000 <br>
                      peta = 1,000,000,000,000,000 <br>
                      exa = 1,000,000,000,000,000,000 <br>
                      
                      </p><p style="margin-top:12px">
                      There are bigger units of measurement that an exabyte, such as a zettabyte and a yottabyte, but we will not discuss them in this course at this time. But your children and grandchildren will have to know them!
                      </p>
                      
                      <p style="margin-top:12px">
                      How big is an exabyte? For instance, every word ever spoken by every member of mankind would fill about 5 exabytes of storage space. The Internet transfers around 21 exabytes of data every month. 
                      </p>
                      
                      <p style="margin-top:12px">
                      Now those are the "big number" multipliers. In IT however, things are not always big. They can also be very small. Unfortunately the "small multipliers" are often used erroneously. For example the words "microprocessor" and "nanotechnology" use mathematical prefixes, but not accurately. What they really mean in general is "really damn small". 
                      </p>
                      
                      <p style="margin-top:12px">
                      <a class="show-modal-vocab" >milli</a> = .001 <br>
                      <a class="show-modal-vocab" >micro</a> = .000 001 <br>
                      <a class="show-modal-vocab" >nano</a> = .000 000 001 <br>
                      pico = .000 000 000 0001 <br>
                      
                      </p><p style="margin-top:12px">
                      Now that we know the prefixes... it's time to learn the units. We have already discussed byte and bit. This is a common measurement in computing. Although computers are much faster now than they were in 1940 (around the time they were invented), they are still digital, meaning that they can only understand zeros and ones (0 and 1).
                      </p>
                      
                      <p style="margin-top:12px">
                      You can put all the prefixes you learned (especially the big ones) onto any the following units of measurement related to IT:
                      </p>
                      
                      <p style="margin-top:12px">
                      <a class="show-modal-vocab" >bit</a> <br>
                      <a class="show-modal-vocab" >byte</a> <br>
                      <a class="show-modal-vocab" >bps</a> <br>
                      <a class="show-modal-vocab" >hz</a> <br>
                      <a class="show-modal-vocab" >flops</a> <br>
                      <a class="show-modal-vocab" >IPS</a> <br>
                      </p>
                      
                      <p style="margin-top:12px">
                      What can you do with these measurements? Almost everything! Compute <a class="show-modal-vocab" >bandwidth</a>, measure processor speed in TFLOPs with a <a class="show-modal-vocab" >benchmark</a>ing program, compare quality of digital cameras or monitors, and much, much more.
                      </p>
                      
                      <p style="margin-top:12px">
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
          scorePass: 4,
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
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              ans: 'floating point operations per second',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              ans: 'nano',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              ans: 'fault tolerance',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
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
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              question:
                'Logarithms are used in many areas of science and engineering including computer science and geology.',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              question:
                'Modern hard drives can store 500 gigabytes of data or more.',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              question:
                'How long will it be before the first 5-gigahertz processors become affordable?',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              question:
                'Computer processing power can increase by an order of magnitude between generations.',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              question:
                'The website performed very poorly because it was graphically heavy and required more bandwidth than was available.',
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
              vocab: {
                text: 'acronym',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `an abbreviation; a way of writing a longer string of words more concisely`,
              example: {
                text: 'IT is an acronym for Information Technology.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'bandwidth',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `a measurement of the capacity of data which can be moved between two points in a given period of time`,
              example: {
                text: 'The website performed very poorly because it was graphically heavy and required more bandwidth than was available.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'benchmark',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `a measurement or standard that serves as a point of reference by which process performance is measured`,
              example: {
                text: 'The magazine article used PCMark 7 scores as a benchmark for computer performance.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'bit',
                orText: 'binary digit',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `he smallest unit of storage; normally referred to as a '1' or '0'`,
              example: {
                text: 'The DBA "flipped a bit" in the database, changing a value from a 0 to 1.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'byte',
                orText: 'binary term',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `8 bit`,
              example: {
                text: 'One byte of data is enough memory to hold a single ASCII character.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'fault tolerance',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `The ability of a system component to fail without causing the entire system to shut down; this is
            often accomplished with redundancy`,
              example: {
                text: `Due to low fault tolerances in the new gaming console's GPU, the manufacturer had to issue a total recall.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'FLOPS',
                orText: 'floating point operations per second',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `a common measurement of computer speed dealing with decimal calculations in a given
            amount of time`,
              example: {
                text: 'The more FLOPS a computer can do, the faster it is.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'frequency',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `the number of cycles per unit time of a sound wave, most often measured in hertz`,
              example: {
                text: `The new processor ran at much higher frequency than the one it replaced, going from 1.8 GHZ
        up to 4 GHZ.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'G',
                orText: 'giga',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one billion`,
              example: {
                text: `The word giga originally comes from the Greek word for 'giant'.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'GB',
                orText: 'gigabyte',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one billion bytes`,
              example: {
                text: `Modern hard drives can store 500 gigabytes of data or more.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'K',
                orText: 'kilo',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one thousand
      `,
              example: {
                text: 'A kilobyte is 1024 bytes.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'M',
                orText: 'mega',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one million`,
              example: {
                text: `One megabyte is 1,048,576 bytes.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'T',
                orText: 'tera',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one trillion`,
              example: {
                text: `There are 1,099,511,627,776 bytes in a terabyte.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'm',
                orText: 'milli',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `a prefix meaning one thousandth`,
              example: {
                text: 'One millitesla is one-thousandth of a tesla.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'µ',
                orText: 'micro',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one millionth`,
              example: {
                text: `Although micro means "one-millionth", many people use it to express simply "a great deal of smallness.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'n',
                orText: 'nano',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one billionth`,
              example: {
                text: 'The teacher said the word "nano" can also be used for anything very small, such as nanotechnology.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'IPS',
                orText: 'instructions per second',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `an very raw measurement of computer processor speed`,
              example: {
                text: 'IPS is a base measurement of computer speed often expressed in millions (MIPS).',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
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
          scorePass: 2,
          data: {
            audioUrl:
              'https://www.english4it.com/media/sounds/readings/143911/29.mp3?f=1661487165',
            read: `<div class="max-width-small paper mb-2 reading-text reading-well">
                        <h2 class="title">IT Acronyms and Measurements</h2> 
<p style="margin-top:12px">
                        The world of IT is full of acronyms and abbreviations. So is the world of measurements. That's pretty much a guarantee that everyone working with IT measurements is going to get confused. For example, what is the difference between an MB and an Mbit? What does ERP or CMS stand for? 
                        The above are examples of standard acronyms we hear all the time. Inside every organization there is likely to be a whole range of industry-specific acronyms as well. For instance, in my company we often talk of LMS, CAT, SEO, SL20, and many, many more. 
                        </p>
                        
                        <p style="margin-top:12px">
                        If someone mentions an unfamiliar acronym in your presence, you should ask the person to clarify and explain it. Most likely you will not be the only person in the room who feels lost. Asking questions is not seen as a sign of weakness in a modern IT department. It is a sign of curiosity and seeking to better oneself and one's knowledge about a subject. But let's not kid ourselves... in your IT career, you will have acronyms for everything. Soon it will be you confusing newbies with acronyms of your own.
                        </p>
                        
                        <h3>It needs acronyms because information is constantly expanding out of control</h3>
                        
                        <p style="margin-top:12px">
                        Here are some examples of information explosion:
                        </p>
                        
                        <p style="margin-top:12px">
                        · The CPU at the heart of Apple's iPhone 4 is more powerful than a Cray supercomputer costing millions of dollars from the 1970's.
                        </p>
                        
                        <p style="margin-top:12px">
                        · The software that powers the space shuttle runs on a single MB of RAM. The minimum RAM requirement for Windows 7 is 1 GB ( or 1,000 times as much).
                        </p>
                        
                        <p style="margin-top:12px">
                        · If automobiles had improved their performance at the same rate as computers over the past 50 years, we might all be driving $500 cars that go 5,000 kilometers per hour, and get 500 kilometers per liter of fuel. They would probably fly too. Cool.
                        </p>
                        
                        <p style="margin-top:12px">
                        · In 1980, a 10MB hard drive cost over $4,000 and was considered to be a lot of storage. Today, you can't even buy a 10MB hard drive. It would be worthless and pointless. Even Windows 95, released way back in April 1995, required a 55MB minimum hard drive. Now you can get a TB drive for under a hundred dollars.
                        </p>
                        
                        <p style="margin-top:12px">
                        · Did you know that in 2010 Youtube transfers more data in one day then the entire Internet did in the year 2000? 
                        </p>
                        
                        <h3>
                        Acronyms and abbreviations are essential to IT. Learning them is easier than you think.
                        </h3>
                        
                        <p style="margin-top:12px">
                        Computers tend to get more powerful on an order of magnitude over previous generations. Some people have even tried to quantify this phenomenon. One example is Moore's Law. A simple way to explain Moore's Law is that a brand new computer is completely outdated in five years.
                        </p>
                        
                        <p style="margin-top:12px">
                        How do you remember the difference between a kilobyte, megabyte, gigabyte, and a terabyte without going crazy? 
                        </p>
                        
                        <p style="margin-top:12px">
                        This is how. Break the terms down into their components. The word "megabyte" consists of two different words... "mega" and "byte". 
                        </p>
                        
                        <p style="margin-top:12px">
                        "Mega" is a multiplier prefix found at the start of measurement words which means 1,000,000 (or a million times). 
                        </p>
                        
                        <p style="margin-top:12px">
                        One "byte" is equal (normally) to 8 "bits".
                        </p>
                        
                        <p style="margin-top:12px">
                        A "bit" is equal to 1 switch "on" or "off" (either a 1 or 0).
                        </p>
                        
                        <p style="margin-top:12px">
                        It takes between 1 and 3 bytes to hold a letter... depending on what kind of character encoding you are using. 
                        </p>
                        
                        <p style="margin-top:12px">
                        So a megabyte is equal to 8,000,000 bits.... or roughly equivalent to 500,000 letters of the alphabet. This is about the length of a short novel. 
                        </p>
                        
                        <p style="margin-top:12px">
                        the prefix <a class="show-modal-vocab" >giga</a> means 1,000,000,000 or one billion times.
                        </p>
                        
                        <p style="margin-top:12px">
                        So how many bits is in a gigabyte? That's right... 8,000,000,000. Enough to store 1,000 novels.
                        </p>
                        
                        <p style="margin-top:12px">
                        Once you learn the prefixes and basic units of measure, it's all very easy.
                        </p>
                        
                        <p style="margin-top:12px">
                        <a class="show-modal-vocab" >kilo</a> = 1,000 <br>
                        <a class="show-modal-vocab" >mega</a> = 1,000,000 <br>
                        giga = 1,000,000,000 <br>
                        <a class="show-modal-vocab" >tera</a> = 1,000,000,000,000 <br>
                        peta = 1,000,000,000,000,000 <br>
                        exa = 1,000,000,000,000,000,000 <br>
                        
                        </p><p style="margin-top:12px">
                        There are bigger units of measurement that an exabyte, such as a zettabyte and a yottabyte, but we will not discuss them in this course at this time. But your children and grandchildren will have to know them!
                        </p>
                        
                        <p style="margin-top:12px">
                        How big is an exabyte? For instance, every word ever spoken by every member of mankind would fill about 5 exabytes of storage space. The Internet transfers around 21 exabytes of data every month. 
                        </p>
                        
                        <p style="margin-top:12px">
                        Now those are the "big number" multipliers. In IT however, things are not always big. They can also be very small. Unfortunately the "small multipliers" are often used erroneously. For example the words "microprocessor" and "nanotechnology" use mathematical prefixes, but not accurately. What they really mean in general is "really damn small". 
                        </p>
                        
                        <p style="margin-top:12px">
                        <a class="show-modal-vocab" >milli</a> = .001 <br>
                        <a class="show-modal-vocab" >micro</a> = .000 001 <br>
                        <a class="show-modal-vocab" >nano</a> = .000 000 001 <br>
                        pico = .000 000 000 0001 <br>
                        
                        </p><p style="margin-top:12px">
                        Now that we know the prefixes... it's time to learn the units. We have already discussed byte and bit. This is a common measurement in computing. Although computers are much faster now than they were in 1940 (around the time they were invented), they are still digital, meaning that they can only understand zeros and ones (0 and 1).
                        </p>
                        
                        <p style="margin-top:12px">
                        You can put all the prefixes you learned (especially the big ones) onto any the following units of measurement related to IT:
                        </p>
                        
                        <p style="margin-top:12px">
                        <a class="show-modal-vocab" >bit</a> <br>
                        <a class="show-modal-vocab" >byte</a> <br>
                        <a class="show-modal-vocab" >bps</a> <br>
                        <a class="show-modal-vocab" >hz</a> <br>
                        <a class="show-modal-vocab" >flops</a> <br>
                        <a class="show-modal-vocab" >IPS</a> <br>
                        </p>
                        
                        <p style="margin-top:12px">
                        What can you do with these measurements? Almost everything! Compute <a class="show-modal-vocab" >bandwidth</a>, measure processor speed in TFLOPs with a <a class="show-modal-vocab" >benchmark</a>ing program, compare quality of digital cameras or monitors, and much, much more.
                        </p>
                        
                        <p style="margin-top:12px">
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
          scorePass: 4,
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
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              ans: 'floating point operations per second',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              ans: 'nano',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              ans: 'fault tolerance',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
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
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              question:
                'Logarithms are used in many areas of science and engineering including computer science and geology.',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              question:
                'Modern hard drives can store 500 gigabytes of data or more.',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              question:
                'How long will it be before the first 5-gigahertz processors become affordable?',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              question:
                'Computer processing power can increase by an order of magnitude between generations.',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              question:
                'The website performed very poorly because it was graphically heavy and required more bandwidth than was available.',
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
              vocab: {
                text: 'acronym',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `an abbreviation; a way of writing a longer string of words more concisely`,
              example: {
                text: 'IT is an acronym for Information Technology.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'bandwidth',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `a measurement of the capacity of data which can be moved between two points in a given period of time`,
              example: {
                text: 'The website performed very poorly because it was graphically heavy and required more bandwidth than was available.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'benchmark',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `a measurement or standard that serves as a point of reference by which process performance is measured`,
              example: {
                text: 'The magazine article used PCMark 7 scores as a benchmark for computer performance.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'bit',
                orText: 'binary digit',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `he smallest unit of storage; normally referred to as a '1' or '0'`,
              example: {
                text: 'The DBA "flipped a bit" in the database, changing a value from a 0 to 1.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'byte',
                orText: 'binary term',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `8 bit`,
              example: {
                text: 'One byte of data is enough memory to hold a single ASCII character.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'fault tolerance',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `The ability of a system component to fail without causing the entire system to shut down; this is
            often accomplished with redundancy`,
              example: {
                text: `Due to low fault tolerances in the new gaming console's GPU, the manufacturer had to issue a total recall.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'FLOPS',
                orText: 'floating point operations per second',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `a common measurement of computer speed dealing with decimal calculations in a given
            amount of time`,
              example: {
                text: 'The more FLOPS a computer can do, the faster it is.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'frequency',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `the number of cycles per unit time of a sound wave, most often measured in hertz`,
              example: {
                text: `The new processor ran at much higher frequency than the one it replaced, going from 1.8 GHZ
        up to 4 GHZ.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'G',
                orText: 'giga',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one billion`,
              example: {
                text: `The word giga originally comes from the Greek word for 'giant'.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'GB',
                orText: 'gigabyte',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one billion bytes`,
              example: {
                text: `Modern hard drives can store 500 gigabytes of data or more.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'K',
                orText: 'kilo',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one thousand
      `,
              example: {
                text: 'A kilobyte is 1024 bytes.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'M',
                orText: 'mega',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one million`,
              example: {
                text: `One megabyte is 1,048,576 bytes.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'T',
                orText: 'tera',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one trillion`,
              example: {
                text: `There are 1,099,511,627,776 bytes in a terabyte.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'm',
                orText: 'milli',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `a prefix meaning one thousandth`,
              example: {
                text: 'One millitesla is one-thousandth of a tesla.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'µ',
                orText: 'micro',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one millionth`,
              example: {
                text: `Although micro means "one-millionth", many people use it to express simply "a great deal of smallness.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'n',
                orText: 'nano',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one billionth`,
              example: {
                text: 'The teacher said the word "nano" can also be used for anything very small, such as nanotechnology.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'IPS',
                orText: 'instructions per second',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `an very raw measurement of computer processor speed`,
              example: {
                text: 'IPS is a base measurement of computer speed often expressed in millions (MIPS).',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
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
          scorePass: 2,
          data: {
            audioUrl:
              'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
            read: `<div class="max-width-small paper mb-2 reading-text reading-well">
                        <h2 class="title">IT Acronyms and Measurements</h2> 
<p style="margin-top:12px">
                        The world of IT is full of acronyms and abbreviations. So is the world of measurements. That's pretty much a guarantee that everyone working with IT measurements is going to get confused. For example, what is the difference between an MB and an Mbit? What does ERP or CMS stand for? 
                        The above are examples of standard acronyms we hear all the time. Inside every organization there is likely to be a whole range of industry-specific acronyms as well. For instance, in my company we often talk of LMS, CAT, SEO, SL20, and many, many more. 
                        </p>
                        
                        <p style="margin-top:12px">
                        If someone mentions an unfamiliar acronym in your presence, you should ask the person to clarify and explain it. Most likely you will not be the only person in the room who feels lost. Asking questions is not seen as a sign of weakness in a modern IT department. It is a sign of curiosity and seeking to better oneself and one's knowledge about a subject. But let's not kid ourselves... in your IT career, you will have acronyms for everything. Soon it will be you confusing newbies with acronyms of your own.
                        </p>
                        
                        <h3>It needs acronyms because information is constantly expanding out of control</h3>
                        
                        <p style="margin-top:12px">
                        Here are some examples of information explosion:
                        </p>
                        
                        <p style="margin-top:12px">
                        · The CPU at the heart of Apple's iPhone 4 is more powerful than a Cray supercomputer costing millions of dollars from the 1970's.
                        </p>
                        
                        <p style="margin-top:12px">
                        · The software that powers the space shuttle runs on a single MB of RAM. The minimum RAM requirement for Windows 7 is 1 GB ( or 1,000 times as much).
                        </p>
                        
                        <p style="margin-top:12px">
                        · If automobiles had improved their performance at the same rate as computers over the past 50 years, we might all be driving $500 cars that go 5,000 kilometers per hour, and get 500 kilometers per liter of fuel. They would probably fly too. Cool.
                        </p>
                        
                        <p style="margin-top:12px">
                        · In 1980, a 10MB hard drive cost over $4,000 and was considered to be a lot of storage. Today, you can't even buy a 10MB hard drive. It would be worthless and pointless. Even Windows 95, released way back in April 1995, required a 55MB minimum hard drive. Now you can get a TB drive for under a hundred dollars.
                        </p>
                        
                        <p style="margin-top:12px">
                        · Did you know that in 2010 Youtube transfers more data in one day then the entire Internet did in the year 2000? 
                        </p>
                        
                        <h3>
                        Acronyms and abbreviations are essential to IT. Learning them is easier than you think.
                        </h3>
                        
                        <p style="margin-top:12px">
                        Computers tend to get more powerful on an order of magnitude over previous generations. Some people have even tried to quantify this phenomenon. One example is Moore's Law. A simple way to explain Moore's Law is that a brand new computer is completely outdated in five years.
                        </p>
                        
                        <p style="margin-top:12px">
                        How do you remember the difference between a kilobyte, megabyte, gigabyte, and a terabyte without going crazy? 
                        </p>
                        
                        <p style="margin-top:12px">
                        This is how. Break the terms down into their components. The word "megabyte" consists of two different words... "mega" and "byte". 
                        </p>
                        
                        <p style="margin-top:12px">
                        "Mega" is a multiplier prefix found at the start of measurement words which means 1,000,000 (or a million times). 
                        </p>
                        
                        <p style="margin-top:12px">
                        One "byte" is equal (normally) to 8 "bits".
                        </p>
                        
                        <p style="margin-top:12px">
                        A "bit" is equal to 1 switch "on" or "off" (either a 1 or 0).
                        </p>
                        
                        <p style="margin-top:12px">
                        It takes between 1 and 3 bytes to hold a letter... depending on what kind of character encoding you are using. 
                        </p>
                        
                        <p style="margin-top:12px">
                        So a megabyte is equal to 8,000,000 bits.... or roughly equivalent to 500,000 letters of the alphabet. This is about the length of a short novel. 
                        </p>
                        
                        <p style="margin-top:12px">
                        the prefix <a class="show-modal-vocab" >giga</a> means 1,000,000,000 or one billion times.
                        </p>
                        
                        <p style="margin-top:12px">
                        So how many bits is in a gigabyte? That's right... 8,000,000,000. Enough to store 1,000 novels.
                        </p>
                        
                        <p style="margin-top:12px">
                        Once you learn the prefixes and basic units of measure, it's all very easy.
                        </p>
                        
                        <p style="margin-top:12px">
                        <a class="show-modal-vocab" >kilo</a> = 1,000 <br>
                        <a class="show-modal-vocab" >mega</a> = 1,000,000 <br>
                        giga = 1,000,000,000 <br>
                        <a class="show-modal-vocab" >tera</a> = 1,000,000,000,000 <br>
                        peta = 1,000,000,000,000,000 <br>
                        exa = 1,000,000,000,000,000,000 <br>
                        
                        </p><p style="margin-top:12px">
                        There are bigger units of measurement that an exabyte, such as a zettabyte and a yottabyte, but we will not discuss them in this course at this time. But your children and grandchildren will have to know them!
                        </p>
                        
                        <p style="margin-top:12px">
                        How big is an exabyte? For instance, every word ever spoken by every member of mankind would fill about 5 exabytes of storage space. The Internet transfers around 21 exabytes of data every month. 
                        </p>
                        
                        <p style="margin-top:12px">
                        Now those are the "big number" multipliers. In IT however, things are not always big. They can also be very small. Unfortunately the "small multipliers" are often used erroneously. For example the words "microprocessor" and "nanotechnology" use mathematical prefixes, but not accurately. What they really mean in general is "really damn small". 
                        </p>
                        
                        <p style="margin-top:12px">
                        <a class="show-modal-vocab" >milli</a> = .001 <br>
                        <a class="show-modal-vocab" >micro</a> = .000 001 <br>
                        <a class="show-modal-vocab" >nano</a> = .000 000 001 <br>
                        pico = .000 000 000 0001 <br>
                        
                        </p><p style="margin-top:12px">
                        Now that we know the prefixes... it's time to learn the units. We have already discussed byte and bit. This is a common measurement in computing. Although computers are much faster now than they were in 1940 (around the time they were invented), they are still digital, meaning that they can only understand zeros and ones (0 and 1).
                        </p>
                        
                        <p style="margin-top:12px">
                        You can put all the prefixes you learned (especially the big ones) onto any the following units of measurement related to IT:
                        </p>
                        
                        <p style="margin-top:12px">
                        <a class="show-modal-vocab" >bit</a> <br>
                        <a class="show-modal-vocab" >byte</a> <br>
                        <a class="show-modal-vocab" >bps</a> <br>
                        <a class="show-modal-vocab" >hz</a> <br>
                        <a class="show-modal-vocab" >flops</a> <br>
                        <a class="show-modal-vocab" >IPS</a> <br>
                        </p>
                        
                        <p style="margin-top:12px">
                        What can you do with these measurements? Almost everything! Compute <a class="show-modal-vocab" >bandwidth</a>, measure processor speed in TFLOPs with a <a class="show-modal-vocab" >benchmark</a>ing program, compare quality of digital cameras or monitors, and much, much more.
                        </p>
                        
                        <p style="margin-top:12px">
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
          scorePass: 4,
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
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              ans: 'floating point operations per second',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              ans: 'nano',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              ans: 'fault tolerance',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
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
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              question:
                'Logarithms are used in many areas of science and engineering including computer science and geology.',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              question:
                'Modern hard drives can store 500 gigabytes of data or more.',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              question:
                'How long will it be before the first 5-gigahertz processors become affordable?',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              question:
                'Computer processing power can increase by an order of magnitude between generations.',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              question:
                'The website performed very poorly because it was graphically heavy and required more bandwidth than was available.',
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
              vocab: {
                text: 'acronym',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `an abbreviation; a way of writing a longer string of words more concisely`,
              example: {
                text: 'IT is an acronym for Information Technology.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'bandwidth',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `a measurement of the capacity of data which can be moved between two points in a given period of time`,
              example: {
                text: 'The website performed very poorly because it was graphically heavy and required more bandwidth than was available.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'benchmark',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `a measurement or standard that serves as a point of reference by which process performance is measured`,
              example: {
                text: 'The magazine article used PCMark 7 scores as a benchmark for computer performance.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'bit',
                orText: 'binary digit',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `he smallest unit of storage; normally referred to as a '1' or '0'`,
              example: {
                text: 'The DBA "flipped a bit" in the database, changing a value from a 0 to 1.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'byte',
                orText: 'binary term',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `8 bit`,
              example: {
                text: 'One byte of data is enough memory to hold a single ASCII character.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'fault tolerance',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `The ability of a system component to fail without causing the entire system to shut down; this is
            often accomplished with redundancy`,
              example: {
                text: `Due to low fault tolerances in the new gaming console's GPU, the manufacturer had to issue a total recall.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'FLOPS',
                orText: 'floating point operations per second',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `a common measurement of computer speed dealing with decimal calculations in a given
            amount of time`,
              example: {
                text: 'The more FLOPS a computer can do, the faster it is.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'frequency',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `the number of cycles per unit time of a sound wave, most often measured in hertz`,
              example: {
                text: `The new processor ran at much higher frequency than the one it replaced, going from 1.8 GHZ
        up to 4 GHZ.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'G',
                orText: 'giga',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one billion`,
              example: {
                text: `The word giga originally comes from the Greek word for 'giant'.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'GB',
                orText: 'gigabyte',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one billion bytes`,
              example: {
                text: `Modern hard drives can store 500 gigabytes of data or more.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'K',
                orText: 'kilo',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one thousand
      `,
              example: {
                text: 'A kilobyte is 1024 bytes.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'M',
                orText: 'mega',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one million`,
              example: {
                text: `One megabyte is 1,048,576 bytes.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'T',
                orText: 'tera',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one trillion`,
              example: {
                text: `There are 1,099,511,627,776 bytes in a terabyte.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'm',
                orText: 'milli',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `a prefix meaning one thousandth`,
              example: {
                text: 'One millitesla is one-thousandth of a tesla.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'µ',
                orText: 'micro',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one millionth`,
              example: {
                text: `Although micro means "one-millionth", many people use it to express simply "a great deal of smallness.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'n',
                orText: 'nano',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one billionth`,
              example: {
                text: 'The teacher said the word "nano" can also be used for anything very small, such as nanotechnology.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'IPS',
                orText: 'instructions per second',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `an very raw measurement of computer processor speed`,
              example: {
                text: 'IPS is a base measurement of computer speed often expressed in millions (MIPS).',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
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
          scorePass: 2,
          data: {
            audioUrl:
              'https://www.english4it.com/media/sounds/readings/143911/29.mp3?f=1661487165',
            read: `<div class="max-width-small paper mb-2 reading-text reading-well">
                        <h2 class="title">IT Acronyms and Measurements</h2> 
<p style="margin-top:12px">
                        The world of IT is full of acronyms and abbreviations. So is the world of measurements. That's pretty much a guarantee that everyone working with IT measurements is going to get confused. For example, what is the difference between an MB and an Mbit? What does ERP or CMS stand for? 
                        The above are examples of standard acronyms we hear all the time. Inside every organization there is likely to be a whole range of industry-specific acronyms as well. For instance, in my company we often talk of LMS, CAT, SEO, SL20, and many, many more. 
                        </p>
                        
                        <p style="margin-top:12px">
                        If someone mentions an unfamiliar acronym in your presence, you should ask the person to clarify and explain it. Most likely you will not be the only person in the room who feels lost. Asking questions is not seen as a sign of weakness in a modern IT department. It is a sign of curiosity and seeking to better oneself and one's knowledge about a subject. But let's not kid ourselves... in your IT career, you will have acronyms for everything. Soon it will be you confusing newbies with acronyms of your own.
                        </p>
                        
                        <h3>It needs acronyms because information is constantly expanding out of control</h3>
                        
                        <p style="margin-top:12px">
                        Here are some examples of information explosion:
                        </p>
                        
                        <p style="margin-top:12px">
                        · The CPU at the heart of Apple's iPhone 4 is more powerful than a Cray supercomputer costing millions of dollars from the 1970's.
                        </p>
                        
                        <p style="margin-top:12px">
                        · The software that powers the space shuttle runs on a single MB of RAM. The minimum RAM requirement for Windows 7 is 1 GB ( or 1,000 times as much).
                        </p>
                        
                        <p style="margin-top:12px">
                        · If automobiles had improved their performance at the same rate as computers over the past 50 years, we might all be driving $500 cars that go 5,000 kilometers per hour, and get 500 kilometers per liter of fuel. They would probably fly too. Cool.
                        </p>
                        
                        <p style="margin-top:12px">
                        · In 1980, a 10MB hard drive cost over $4,000 and was considered to be a lot of storage. Today, you can't even buy a 10MB hard drive. It would be worthless and pointless. Even Windows 95, released way back in April 1995, required a 55MB minimum hard drive. Now you can get a TB drive for under a hundred dollars.
                        </p>
                        
                        <p style="margin-top:12px">
                        · Did you know that in 2010 Youtube transfers more data in one day then the entire Internet did in the year 2000? 
                        </p>
                        
                        <h3>
                        Acronyms and abbreviations are essential to IT. Learning them is easier than you think.
                        </h3>
                        
                        <p style="margin-top:12px">
                        Computers tend to get more powerful on an order of magnitude over previous generations. Some people have even tried to quantify this phenomenon. One example is Moore's Law. A simple way to explain Moore's Law is that a brand new computer is completely outdated in five years.
                        </p>
                        
                        <p style="margin-top:12px">
                        How do you remember the difference between a kilobyte, megabyte, gigabyte, and a terabyte without going crazy? 
                        </p>
                        
                        <p style="margin-top:12px">
                        This is how. Break the terms down into their components. The word "megabyte" consists of two different words... "mega" and "byte". 
                        </p>
                        
                        <p style="margin-top:12px">
                        "Mega" is a multiplier prefix found at the start of measurement words which means 1,000,000 (or a million times). 
                        </p>
                        
                        <p style="margin-top:12px">
                        One "byte" is equal (normally) to 8 "bits".
                        </p>
                        
                        <p style="margin-top:12px">
                        A "bit" is equal to 1 switch "on" or "off" (either a 1 or 0).
                        </p>
                        
                        <p style="margin-top:12px">
                        It takes between 1 and 3 bytes to hold a letter... depending on what kind of character encoding you are using. 
                        </p>
                        
                        <p style="margin-top:12px">
                        So a megabyte is equal to 8,000,000 bits.... or roughly equivalent to 500,000 letters of the alphabet. This is about the length of a short novel. 
                        </p>
                        
                        <p style="margin-top:12px">
                        the prefix <a class="show-modal-vocab" >giga</a> means 1,000,000,000 or one billion times.
                        </p>
                        
                        <p style="margin-top:12px">
                        So how many bits is in a gigabyte? That's right... 8,000,000,000. Enough to store 1,000 novels.
                        </p>
                        
                        <p style="margin-top:12px">
                        Once you learn the prefixes and basic units of measure, it's all very easy.
                        </p>
                        
                        <p style="margin-top:12px">
                        <a class="show-modal-vocab" >kilo</a> = 1,000 <br>
                        <a class="show-modal-vocab" >mega</a> = 1,000,000 <br>
                        giga = 1,000,000,000 <br>
                        <a class="show-modal-vocab" >tera</a> = 1,000,000,000,000 <br>
                        peta = 1,000,000,000,000,000 <br>
                        exa = 1,000,000,000,000,000,000 <br>
                        
                        </p><p style="margin-top:12px">
                        There are bigger units of measurement that an exabyte, such as a zettabyte and a yottabyte, but we will not discuss them in this course at this time. But your children and grandchildren will have to know them!
                        </p>
                        
                        <p style="margin-top:12px">
                        How big is an exabyte? For instance, every word ever spoken by every member of mankind would fill about 5 exabytes of storage space. The Internet transfers around 21 exabytes of data every month. 
                        </p>
                        
                        <p style="margin-top:12px">
                        Now those are the "big number" multipliers. In IT however, things are not always big. They can also be very small. Unfortunately the "small multipliers" are often used erroneously. For example the words "microprocessor" and "nanotechnology" use mathematical prefixes, but not accurately. What they really mean in general is "really damn small". 
                        </p>
                        
                        <p style="margin-top:12px">
                        <a class="show-modal-vocab" >milli</a> = .001 <br>
                        <a class="show-modal-vocab" >micro</a> = .000 001 <br>
                        <a class="show-modal-vocab" >nano</a> = .000 000 001 <br>
                        pico = .000 000 000 0001 <br>
                        
                        </p><p style="margin-top:12px">
                        Now that we know the prefixes... it's time to learn the units. We have already discussed byte and bit. This is a common measurement in computing. Although computers are much faster now than they were in 1940 (around the time they were invented), they are still digital, meaning that they can only understand zeros and ones (0 and 1).
                        </p>
                        
                        <p style="margin-top:12px">
                        You can put all the prefixes you learned (especially the big ones) onto any the following units of measurement related to IT:
                        </p>
                        
                        <p style="margin-top:12px">
                        <a class="show-modal-vocab" >bit</a> <br>
                        <a class="show-modal-vocab" >byte</a> <br>
                        <a class="show-modal-vocab" >bps</a> <br>
                        <a class="show-modal-vocab" >hz</a> <br>
                        <a class="show-modal-vocab" >flops</a> <br>
                        <a class="show-modal-vocab" >IPS</a> <br>
                        </p>
                        
                        <p style="margin-top:12px">
                        What can you do with these measurements? Almost everything! Compute <a class="show-modal-vocab" >bandwidth</a>, measure processor speed in TFLOPs with a <a class="show-modal-vocab" >benchmark</a>ing program, compare quality of digital cameras or monitors, and much, much more.
                        </p>
                        
                        <p style="margin-top:12px">
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
          scorePass: 4,
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
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              ans: 'floating point operations per second',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              ans: 'nano',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              ans: 'fault tolerance',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
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
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              question:
                'Logarithms are used in many areas of science and engineering including computer science and geology.',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              question:
                'Modern hard drives can store 500 gigabytes of data or more.',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              question:
                'How long will it be before the first 5-gigahertz processors become affordable?',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              question:
                'Computer processing power can increase by an order of magnitude between generations.',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              question:
                'The website performed very poorly because it was graphically heavy and required more bandwidth than was available.',
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
              vocab: {
                text: 'acronym',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `an abbreviation; a way of writing a longer string of words more concisely`,
              example: {
                text: 'IT is an acronym for Information Technology.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'bandwidth',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `a measurement of the capacity of data which can be moved between two points in a given period of time`,
              example: {
                text: 'The website performed very poorly because it was graphically heavy and required more bandwidth than was available.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'benchmark',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `a measurement or standard that serves as a point of reference by which process performance is measured`,
              example: {
                text: 'The magazine article used PCMark 7 scores as a benchmark for computer performance.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'bit',
                orText: 'binary digit',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `he smallest unit of storage; normally referred to as a '1' or '0'`,
              example: {
                text: 'The DBA "flipped a bit" in the database, changing a value from a 0 to 1.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'byte',
                orText: 'binary term',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `8 bit`,
              example: {
                text: 'One byte of data is enough memory to hold a single ASCII character.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'fault tolerance',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `The ability of a system component to fail without causing the entire system to shut down; this is
            often accomplished with redundancy`,
              example: {
                text: `Due to low fault tolerances in the new gaming console's GPU, the manufacturer had to issue a total recall.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'FLOPS',
                orText: 'floating point operations per second',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `a common measurement of computer speed dealing with decimal calculations in a given
            amount of time`,
              example: {
                text: 'The more FLOPS a computer can do, the faster it is.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'frequency',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `the number of cycles per unit time of a sound wave, most often measured in hertz`,
              example: {
                text: `The new processor ran at much higher frequency than the one it replaced, going from 1.8 GHZ
        up to 4 GHZ.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'G',
                orText: 'giga',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one billion`,
              example: {
                text: `The word giga originally comes from the Greek word for 'giant'.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'GB',
                orText: 'gigabyte',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one billion bytes`,
              example: {
                text: `Modern hard drives can store 500 gigabytes of data or more.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'K',
                orText: 'kilo',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one thousand
      `,
              example: {
                text: 'A kilobyte is 1024 bytes.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'M',
                orText: 'mega',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one million`,
              example: {
                text: `One megabyte is 1,048,576 bytes.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'T',
                orText: 'tera',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one trillion`,
              example: {
                text: `There are 1,099,511,627,776 bytes in a terabyte.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'm',
                orText: 'milli',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `a prefix meaning one thousandth`,
              example: {
                text: 'One millitesla is one-thousandth of a tesla.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'µ',
                orText: 'micro',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one millionth`,
              example: {
                text: `Although micro means "one-millionth", many people use it to express simply "a great deal of smallness.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'n',
                orText: 'nano',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one billionth`,
              example: {
                text: 'The teacher said the word "nano" can also be used for anything very small, such as nanotechnology.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'IPS',
                orText: 'instructions per second',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `an very raw measurement of computer processor speed`,
              example: {
                text: 'IPS is a base measurement of computer speed often expressed in millions (MIPS).',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
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
          scorePass: 2,
          data: {
            audioUrl:
              'https://www.english4it.com/media/sounds/readings/143911/29.mp3?f=1661487165',
            read: `<div class="max-width-small paper mb-2 reading-text reading-well">
                        <h2 class="title">IT Acronyms and Measurements</h2> 
<p style="margin-top:12px">
                        The world of IT is full of acronyms and abbreviations. So is the world of measurements. That's pretty much a guarantee that everyone working with IT measurements is going to get confused. For example, what is the difference between an MB and an Mbit? What does ERP or CMS stand for? 
                        The above are examples of standard acronyms we hear all the time. Inside every organization there is likely to be a whole range of industry-specific acronyms as well. For instance, in my company we often talk of LMS, CAT, SEO, SL20, and many, many more. 
                        </p>
                        
                        <p style="margin-top:12px">
                        If someone mentions an unfamiliar acronym in your presence, you should ask the person to clarify and explain it. Most likely you will not be the only person in the room who feels lost. Asking questions is not seen as a sign of weakness in a modern IT department. It is a sign of curiosity and seeking to better oneself and one's knowledge about a subject. But let's not kid ourselves... in your IT career, you will have acronyms for everything. Soon it will be you confusing newbies with acronyms of your own.
                        </p>
                        
                        <h3>It needs acronyms because information is constantly expanding out of control</h3>
                        
                        <p style="margin-top:12px">
                        Here are some examples of information explosion:
                        </p>
                        
                        <p style="margin-top:12px">
                        · The CPU at the heart of Apple's iPhone 4 is more powerful than a Cray supercomputer costing millions of dollars from the 1970's.
                        </p>
                        
                        <p style="margin-top:12px">
                        · The software that powers the space shuttle runs on a single MB of RAM. The minimum RAM requirement for Windows 7 is 1 GB ( or 1,000 times as much).
                        </p>
                        
                        <p style="margin-top:12px">
                        · If automobiles had improved their performance at the same rate as computers over the past 50 years, we might all be driving $500 cars that go 5,000 kilometers per hour, and get 500 kilometers per liter of fuel. They would probably fly too. Cool.
                        </p>
                        
                        <p style="margin-top:12px">
                        · In 1980, a 10MB hard drive cost over $4,000 and was considered to be a lot of storage. Today, you can't even buy a 10MB hard drive. It would be worthless and pointless. Even Windows 95, released way back in April 1995, required a 55MB minimum hard drive. Now you can get a TB drive for under a hundred dollars.
                        </p>
                        
                        <p style="margin-top:12px">
                        · Did you know that in 2010 Youtube transfers more data in one day then the entire Internet did in the year 2000? 
                        </p>
                        
                        <h3>
                        Acronyms and abbreviations are essential to IT. Learning them is easier than you think.
                        </h3>
                        
                        <p style="margin-top:12px">
                        Computers tend to get more powerful on an order of magnitude over previous generations. Some people have even tried to quantify this phenomenon. One example is Moore's Law. A simple way to explain Moore's Law is that a brand new computer is completely outdated in five years.
                        </p>
                        
                        <p style="margin-top:12px">
                        How do you remember the difference between a kilobyte, megabyte, gigabyte, and a terabyte without going crazy? 
                        </p>
                        
                        <p style="margin-top:12px">
                        This is how. Break the terms down into their components. The word "megabyte" consists of two different words... "mega" and "byte". 
                        </p>
                        
                        <p style="margin-top:12px">
                        "Mega" is a multiplier prefix found at the start of measurement words which means 1,000,000 (or a million times). 
                        </p>
                        
                        <p style="margin-top:12px">
                        One "byte" is equal (normally) to 8 "bits".
                        </p>
                        
                        <p style="margin-top:12px">
                        A "bit" is equal to 1 switch "on" or "off" (either a 1 or 0).
                        </p>
                        
                        <p style="margin-top:12px">
                        It takes between 1 and 3 bytes to hold a letter... depending on what kind of character encoding you are using. 
                        </p>
                        
                        <p style="margin-top:12px">
                        So a megabyte is equal to 8,000,000 bits.... or roughly equivalent to 500,000 letters of the alphabet. This is about the length of a short novel. 
                        </p>
                        
                        <p style="margin-top:12px">
                        the prefix <a class="show-modal-vocab" >giga</a> means 1,000,000,000 or one billion times.
                        </p>
                        
                        <p style="margin-top:12px">
                        So how many bits is in a gigabyte? That's right... 8,000,000,000. Enough to store 1,000 novels.
                        </p>
                        
                        <p style="margin-top:12px">
                        Once you learn the prefixes and basic units of measure, it's all very easy.
                        </p>
                        
                        <p style="margin-top:12px">
                        <a class="show-modal-vocab" >kilo</a> = 1,000 <br>
                        <a class="show-modal-vocab" >mega</a> = 1,000,000 <br>
                        giga = 1,000,000,000 <br>
                        <a class="show-modal-vocab" >tera</a> = 1,000,000,000,000 <br>
                        peta = 1,000,000,000,000,000 <br>
                        exa = 1,000,000,000,000,000,000 <br>
                        
                        </p><p style="margin-top:12px">
                        There are bigger units of measurement that an exabyte, such as a zettabyte and a yottabyte, but we will not discuss them in this course at this time. But your children and grandchildren will have to know them!
                        </p>
                        
                        <p style="margin-top:12px">
                        How big is an exabyte? For instance, every word ever spoken by every member of mankind would fill about 5 exabytes of storage space. The Internet transfers around 21 exabytes of data every month. 
                        </p>
                        
                        <p style="margin-top:12px">
                        Now those are the "big number" multipliers. In IT however, things are not always big. They can also be very small. Unfortunately the "small multipliers" are often used erroneously. For example the words "microprocessor" and "nanotechnology" use mathematical prefixes, but not accurately. What they really mean in general is "really damn small". 
                        </p>
                        
                        <p style="margin-top:12px">
                        <a class="show-modal-vocab" >milli</a> = .001 <br>
                        <a class="show-modal-vocab" >micro</a> = .000 001 <br>
                        <a class="show-modal-vocab" >nano</a> = .000 000 001 <br>
                        pico = .000 000 000 0001 <br>
                        
                        </p><p style="margin-top:12px">
                        Now that we know the prefixes... it's time to learn the units. We have already discussed byte and bit. This is a common measurement in computing. Although computers are much faster now than they were in 1940 (around the time they were invented), they are still digital, meaning that they can only understand zeros and ones (0 and 1).
                        </p>
                        
                        <p style="margin-top:12px">
                        You can put all the prefixes you learned (especially the big ones) onto any the following units of measurement related to IT:
                        </p>
                        
                        <p style="margin-top:12px">
                        <a class="show-modal-vocab" >bit</a> <br>
                        <a class="show-modal-vocab" >byte</a> <br>
                        <a class="show-modal-vocab" >bps</a> <br>
                        <a class="show-modal-vocab" >hz</a> <br>
                        <a class="show-modal-vocab" >flops</a> <br>
                        <a class="show-modal-vocab" >IPS</a> <br>
                        </p>
                        
                        <p style="margin-top:12px">
                        What can you do with these measurements? Almost everything! Compute <a class="show-modal-vocab" >bandwidth</a>, measure processor speed in TFLOPs with a <a class="show-modal-vocab" >benchmark</a>ing program, compare quality of digital cameras or monitors, and much, much more.
                        </p>
                        
                        <p style="margin-top:12px">
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
          scorePass: 4,
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
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              ans: 'floating point operations per second',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              ans: 'nano',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              ans: 'fault tolerance',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
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
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              question:
                'Logarithms are used in many areas of science and engineering including computer science and geology.',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              question:
                'Modern hard drives can store 500 gigabytes of data or more.',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              question:
                'How long will it be before the first 5-gigahertz processors become affordable?',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              question:
                'Computer processing power can increase by an order of magnitude between generations.',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              question:
                'The website performed very poorly because it was graphically heavy and required more bandwidth than was available.',
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
              vocab: {
                text: 'acronym',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `an abbreviation; a way of writing a longer string of words more concisely`,
              example: {
                text: 'IT is an acronym for Information Technology.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'bandwidth',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `a measurement of the capacity of data which can be moved between two points in a given period of time`,
              example: {
                text: 'The website performed very poorly because it was graphically heavy and required more bandwidth than was available.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'benchmark',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `a measurement or standard that serves as a point of reference by which process performance is measured`,
              example: {
                text: 'The magazine article used PCMark 7 scores as a benchmark for computer performance.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'bit',
                orText: 'binary digit',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `he smallest unit of storage; normally referred to as a '1' or '0'`,
              example: {
                text: 'The DBA "flipped a bit" in the database, changing a value from a 0 to 1.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'byte',
                orText: 'binary term',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `8 bit`,
              example: {
                text: 'One byte of data is enough memory to hold a single ASCII character.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'fault tolerance',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `The ability of a system component to fail without causing the entire system to shut down; this is
            often accomplished with redundancy`,
              example: {
                text: `Due to low fault tolerances in the new gaming console's GPU, the manufacturer had to issue a total recall.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'FLOPS',
                orText: 'floating point operations per second',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `a common measurement of computer speed dealing with decimal calculations in a given
            amount of time`,
              example: {
                text: 'The more FLOPS a computer can do, the faster it is.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'frequency',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `the number of cycles per unit time of a sound wave, most often measured in hertz`,
              example: {
                text: `The new processor ran at much higher frequency than the one it replaced, going from 1.8 GHZ
        up to 4 GHZ.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'G',
                orText: 'giga',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one billion`,
              example: {
                text: `The word giga originally comes from the Greek word for 'giant'.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'GB',
                orText: 'gigabyte',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one billion bytes`,
              example: {
                text: `Modern hard drives can store 500 gigabytes of data or more.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'K',
                orText: 'kilo',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one thousand
      `,
              example: {
                text: 'A kilobyte is 1024 bytes.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'M',
                orText: 'mega',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one million`,
              example: {
                text: `One megabyte is 1,048,576 bytes.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'T',
                orText: 'tera',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one trillion`,
              example: {
                text: `There are 1,099,511,627,776 bytes in a terabyte.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'm',
                orText: 'milli',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `a prefix meaning one thousandth`,
              example: {
                text: 'One millitesla is one-thousandth of a tesla.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'µ',
                orText: 'micro',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one millionth`,
              example: {
                text: `Although micro means "one-millionth", many people use it to express simply "a great deal of smallness.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'n',
                orText: 'nano',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one billionth`,
              example: {
                text: 'The teacher said the word "nano" can also be used for anything very small, such as nanotechnology.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'IPS',
                orText: 'instructions per second',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `an very raw measurement of computer processor speed`,
              example: {
                text: 'IPS is a base measurement of computer speed often expressed in millions (MIPS).',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
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
          scorePass: 2,
          data: {
            audioUrl:
              'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
            read: `<div class="max-width-small paper mb-2 reading-text reading-well">
                        <h2 class="title">IT Acronyms and Measurements</h2> 
<p style="margin-top:12px">
                        The world of IT is full of acronyms and abbreviations. So is the world of measurements. That's pretty much a guarantee that everyone working with IT measurements is going to get confused. For example, what is the difference between an MB and an Mbit? What does ERP or CMS stand for? 
                        The above are examples of standard acronyms we hear all the time. Inside every organization there is likely to be a whole range of industry-specific acronyms as well. For instance, in my company we often talk of LMS, CAT, SEO, SL20, and many, many more. 
                        </p>
                        
                        <p style="margin-top:12px">
                        If someone mentions an unfamiliar acronym in your presence, you should ask the person to clarify and explain it. Most likely you will not be the only person in the room who feels lost. Asking questions is not seen as a sign of weakness in a modern IT department. It is a sign of curiosity and seeking to better oneself and one's knowledge about a subject. But let's not kid ourselves... in your IT career, you will have acronyms for everything. Soon it will be you confusing newbies with acronyms of your own.
                        </p>
                        
                        <h3>It needs acronyms because information is constantly expanding out of control</h3>
                        
                        <p style="margin-top:12px">
                        Here are some examples of information explosion:
                        </p>
                        
                        <p style="margin-top:12px">
                        · The CPU at the heart of Apple's iPhone 4 is more powerful than a Cray supercomputer costing millions of dollars from the 1970's.
                        </p>
                        
                        <p style="margin-top:12px">
                        · The software that powers the space shuttle runs on a single MB of RAM. The minimum RAM requirement for Windows 7 is 1 GB ( or 1,000 times as much).
                        </p>
                        
                        <p style="margin-top:12px">
                        · If automobiles had improved their performance at the same rate as computers over the past 50 years, we might all be driving $500 cars that go 5,000 kilometers per hour, and get 500 kilometers per liter of fuel. They would probably fly too. Cool.
                        </p>
                        
                        <p style="margin-top:12px">
                        · In 1980, a 10MB hard drive cost over $4,000 and was considered to be a lot of storage. Today, you can't even buy a 10MB hard drive. It would be worthless and pointless. Even Windows 95, released way back in April 1995, required a 55MB minimum hard drive. Now you can get a TB drive for under a hundred dollars.
                        </p>
                        
                        <p style="margin-top:12px">
                        · Did you know that in 2010 Youtube transfers more data in one day then the entire Internet did in the year 2000? 
                        </p>
                        
                        <h3>
                        Acronyms and abbreviations are essential to IT. Learning them is easier than you think.
                        </h3>
                        
                        <p style="margin-top:12px">
                        Computers tend to get more powerful on an order of magnitude over previous generations. Some people have even tried to quantify this phenomenon. One example is Moore's Law. A simple way to explain Moore's Law is that a brand new computer is completely outdated in five years.
                        </p>
                        
                        <p style="margin-top:12px">
                        How do you remember the difference between a kilobyte, megabyte, gigabyte, and a terabyte without going crazy? 
                        </p>
                        
                        <p style="margin-top:12px">
                        This is how. Break the terms down into their components. The word "megabyte" consists of two different words... "mega" and "byte". 
                        </p>
                        
                        <p style="margin-top:12px">
                        "Mega" is a multiplier prefix found at the start of measurement words which means 1,000,000 (or a million times). 
                        </p>
                        
                        <p style="margin-top:12px">
                        One "byte" is equal (normally) to 8 "bits".
                        </p>
                        
                        <p style="margin-top:12px">
                        A "bit" is equal to 1 switch "on" or "off" (either a 1 or 0).
                        </p>
                        
                        <p style="margin-top:12px">
                        It takes between 1 and 3 bytes to hold a letter... depending on what kind of character encoding you are using. 
                        </p>
                        
                        <p style="margin-top:12px">
                        So a megabyte is equal to 8,000,000 bits.... or roughly equivalent to 500,000 letters of the alphabet. This is about the length of a short novel. 
                        </p>
                        
                        <p style="margin-top:12px">
                        the prefix <a class="show-modal-vocab" >giga</a> means 1,000,000,000 or one billion times.
                        </p>
                        
                        <p style="margin-top:12px">
                        So how many bits is in a gigabyte? That's right... 8,000,000,000. Enough to store 1,000 novels.
                        </p>
                        
                        <p style="margin-top:12px">
                        Once you learn the prefixes and basic units of measure, it's all very easy.
                        </p>
                        
                        <p style="margin-top:12px">
                        <a class="show-modal-vocab" >kilo</a> = 1,000 <br>
                        <a class="show-modal-vocab" >mega</a> = 1,000,000 <br>
                        giga = 1,000,000,000 <br>
                        <a class="show-modal-vocab" >tera</a> = 1,000,000,000,000 <br>
                        peta = 1,000,000,000,000,000 <br>
                        exa = 1,000,000,000,000,000,000 <br>
                        
                        </p><p style="margin-top:12px">
                        There are bigger units of measurement that an exabyte, such as a zettabyte and a yottabyte, but we will not discuss them in this course at this time. But your children and grandchildren will have to know them!
                        </p>
                        
                        <p style="margin-top:12px">
                        How big is an exabyte? For instance, every word ever spoken by every member of mankind would fill about 5 exabytes of storage space. The Internet transfers around 21 exabytes of data every month. 
                        </p>
                        
                        <p style="margin-top:12px">
                        Now those are the "big number" multipliers. In IT however, things are not always big. They can also be very small. Unfortunately the "small multipliers" are often used erroneously. For example the words "microprocessor" and "nanotechnology" use mathematical prefixes, but not accurately. What they really mean in general is "really damn small". 
                        </p>
                        
                        <p style="margin-top:12px">
                        <a class="show-modal-vocab" >milli</a> = .001 <br>
                        <a class="show-modal-vocab" >micro</a> = .000 001 <br>
                        <a class="show-modal-vocab" >nano</a> = .000 000 001 <br>
                        pico = .000 000 000 0001 <br>
                        
                        </p><p style="margin-top:12px">
                        Now that we know the prefixes... it's time to learn the units. We have already discussed byte and bit. This is a common measurement in computing. Although computers are much faster now than they were in 1940 (around the time they were invented), they are still digital, meaning that they can only understand zeros and ones (0 and 1).
                        </p>
                        
                        <p style="margin-top:12px">
                        You can put all the prefixes you learned (especially the big ones) onto any the following units of measurement related to IT:
                        </p>
                        
                        <p style="margin-top:12px">
                        <a class="show-modal-vocab" >bit</a> <br>
                        <a class="show-modal-vocab" >byte</a> <br>
                        <a class="show-modal-vocab" >bps</a> <br>
                        <a class="show-modal-vocab" >hz</a> <br>
                        <a class="show-modal-vocab" >flops</a> <br>
                        <a class="show-modal-vocab" >IPS</a> <br>
                        </p>
                        
                        <p style="margin-top:12px">
                        What can you do with these measurements? Almost everything! Compute <a class="show-modal-vocab" >bandwidth</a>, measure processor speed in TFLOPs with a <a class="show-modal-vocab" >benchmark</a>ing program, compare quality of digital cameras or monitors, and much, much more.
                        </p>
                        
                        <p style="margin-top:12px">
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
          scorePass: 4,
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
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              ans: 'floating point operations per second',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              ans: 'nano',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              ans: 'fault tolerance',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
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
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              question:
                'Logarithms are used in many areas of science and engineering including computer science and geology.',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              question:
                'Modern hard drives can store 500 gigabytes of data or more.',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              question:
                'How long will it be before the first 5-gigahertz processors become affordable?',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              question:
                'Computer processing power can increase by an order of magnitude between generations.',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              question:
                'The website performed very poorly because it was graphically heavy and required more bandwidth than was available.',
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
              vocab: {
                text: 'acronym',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `an abbreviation; a way of writing a longer string of words more concisely`,
              example: {
                text: 'IT is an acronym for Information Technology.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'bandwidth',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `a measurement of the capacity of data which can be moved between two points in a given period of time`,
              example: {
                text: 'The website performed very poorly because it was graphically heavy and required more bandwidth than was available.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'benchmark',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `a measurement or standard that serves as a point of reference by which process performance is measured`,
              example: {
                text: 'The magazine article used PCMark 7 scores as a benchmark for computer performance.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'bit',
                orText: 'binary digit',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `he smallest unit of storage; normally referred to as a '1' or '0'`,
              example: {
                text: 'The DBA "flipped a bit" in the database, changing a value from a 0 to 1.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'byte',
                orText: 'binary term',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `8 bit`,
              example: {
                text: 'One byte of data is enough memory to hold a single ASCII character.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'fault tolerance',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `The ability of a system component to fail without causing the entire system to shut down; this is
            often accomplished with redundancy`,
              example: {
                text: `Due to low fault tolerances in the new gaming console's GPU, the manufacturer had to issue a total recall.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'FLOPS',
                orText: 'floating point operations per second',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `a common measurement of computer speed dealing with decimal calculations in a given
            amount of time`,
              example: {
                text: 'The more FLOPS a computer can do, the faster it is.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'frequency',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `the number of cycles per unit time of a sound wave, most often measured in hertz`,
              example: {
                text: `The new processor ran at much higher frequency than the one it replaced, going from 1.8 GHZ
        up to 4 GHZ.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'G',
                orText: 'giga',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one billion`,
              example: {
                text: `The word giga originally comes from the Greek word for 'giant'.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'GB',
                orText: 'gigabyte',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one billion bytes`,
              example: {
                text: `Modern hard drives can store 500 gigabytes of data or more.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'K',
                orText: 'kilo',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one thousand
      `,
              example: {
                text: 'A kilobyte is 1024 bytes.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'M',
                orText: 'mega',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one million`,
              example: {
                text: `One megabyte is 1,048,576 bytes.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'T',
                orText: 'tera',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one trillion`,
              example: {
                text: `There are 1,099,511,627,776 bytes in a terabyte.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'm',
                orText: 'milli',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `a prefix meaning one thousandth`,
              example: {
                text: 'One millitesla is one-thousandth of a tesla.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'µ',
                orText: 'micro',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one millionth`,
              example: {
                text: `Although micro means "one-millionth", many people use it to express simply "a great deal of smallness.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'n',
                orText: 'nano',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one billionth`,
              example: {
                text: 'The teacher said the word "nano" can also be used for anything very small, such as nanotechnology.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'IPS',
                orText: 'instructions per second',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `an very raw measurement of computer processor speed`,
              example: {
                text: 'IPS is a base measurement of computer speed often expressed in millions (MIPS).',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
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
          scorePass: 2,
          data: {
            audioUrl:
              'https://www.english4it.com/media/sounds/readings/143911/29.mp3?f=1661487165',
            read: `<div class="max-width-small paper mb-2 reading-text reading-well">
                        <h2 class="title">IT Acronyms and Measurements</h2> 
<p style="margin-top:12px">
                        The world of IT is full of acronyms and abbreviations. So is the world of measurements. That's pretty much a guarantee that everyone working with IT measurements is going to get confused. For example, what is the difference between an MB and an Mbit? What does ERP or CMS stand for? 
                        The above are examples of standard acronyms we hear all the time. Inside every organization there is likely to be a whole range of industry-specific acronyms as well. For instance, in my company we often talk of LMS, CAT, SEO, SL20, and many, many more. 
                        </p>
                        
                        <p style="margin-top:12px">
                        If someone mentions an unfamiliar acronym in your presence, you should ask the person to clarify and explain it. Most likely you will not be the only person in the room who feels lost. Asking questions is not seen as a sign of weakness in a modern IT department. It is a sign of curiosity and seeking to better oneself and one's knowledge about a subject. But let's not kid ourselves... in your IT career, you will have acronyms for everything. Soon it will be you confusing newbies with acronyms of your own.
                        </p>
                        
                        <h3>It needs acronyms because information is constantly expanding out of control</h3>
                        
                        <p style="margin-top:12px">
                        Here are some examples of information explosion:
                        </p>
                        
                        <p style="margin-top:12px">
                        · The CPU at the heart of Apple's iPhone 4 is more powerful than a Cray supercomputer costing millions of dollars from the 1970's.
                        </p>
                        
                        <p style="margin-top:12px">
                        · The software that powers the space shuttle runs on a single MB of RAM. The minimum RAM requirement for Windows 7 is 1 GB ( or 1,000 times as much).
                        </p>
                        
                        <p style="margin-top:12px">
                        · If automobiles had improved their performance at the same rate as computers over the past 50 years, we might all be driving $500 cars that go 5,000 kilometers per hour, and get 500 kilometers per liter of fuel. They would probably fly too. Cool.
                        </p>
                        
                        <p style="margin-top:12px">
                        · In 1980, a 10MB hard drive cost over $4,000 and was considered to be a lot of storage. Today, you can't even buy a 10MB hard drive. It would be worthless and pointless. Even Windows 95, released way back in April 1995, required a 55MB minimum hard drive. Now you can get a TB drive for under a hundred dollars.
                        </p>
                        
                        <p style="margin-top:12px">
                        · Did you know that in 2010 Youtube transfers more data in one day then the entire Internet did in the year 2000? 
                        </p>
                        
                        <h3>
                        Acronyms and abbreviations are essential to IT. Learning them is easier than you think.
                        </h3>
                        
                        <p style="margin-top:12px">
                        Computers tend to get more powerful on an order of magnitude over previous generations. Some people have even tried to quantify this phenomenon. One example is Moore's Law. A simple way to explain Moore's Law is that a brand new computer is completely outdated in five years.
                        </p>
                        
                        <p style="margin-top:12px">
                        How do you remember the difference between a kilobyte, megabyte, gigabyte, and a terabyte without going crazy? 
                        </p>
                        
                        <p style="margin-top:12px">
                        This is how. Break the terms down into their components. The word "megabyte" consists of two different words... "mega" and "byte". 
                        </p>
                        
                        <p style="margin-top:12px">
                        "Mega" is a multiplier prefix found at the start of measurement words which means 1,000,000 (or a million times). 
                        </p>
                        
                        <p style="margin-top:12px">
                        One "byte" is equal (normally) to 8 "bits".
                        </p>
                        
                        <p style="margin-top:12px">
                        A "bit" is equal to 1 switch "on" or "off" (either a 1 or 0).
                        </p>
                        
                        <p style="margin-top:12px">
                        It takes between 1 and 3 bytes to hold a letter... depending on what kind of character encoding you are using. 
                        </p>
                        
                        <p style="margin-top:12px">
                        So a megabyte is equal to 8,000,000 bits.... or roughly equivalent to 500,000 letters of the alphabet. This is about the length of a short novel. 
                        </p>
                        
                        <p style="margin-top:12px">
                        the prefix <a class="show-modal-vocab" >giga</a> means 1,000,000,000 or one billion times.
                        </p>
                        
                        <p style="margin-top:12px">
                        So how many bits is in a gigabyte? That's right... 8,000,000,000. Enough to store 1,000 novels.
                        </p>
                        
                        <p style="margin-top:12px">
                        Once you learn the prefixes and basic units of measure, it's all very easy.
                        </p>
                        
                        <p style="margin-top:12px">
                        <a class="show-modal-vocab" >kilo</a> = 1,000 <br>
                        <a class="show-modal-vocab" >mega</a> = 1,000,000 <br>
                        giga = 1,000,000,000 <br>
                        <a class="show-modal-vocab" >tera</a> = 1,000,000,000,000 <br>
                        peta = 1,000,000,000,000,000 <br>
                        exa = 1,000,000,000,000,000,000 <br>
                        
                        </p><p style="margin-top:12px">
                        There are bigger units of measurement that an exabyte, such as a zettabyte and a yottabyte, but we will not discuss them in this course at this time. But your children and grandchildren will have to know them!
                        </p>
                        
                        <p style="margin-top:12px">
                        How big is an exabyte? For instance, every word ever spoken by every member of mankind would fill about 5 exabytes of storage space. The Internet transfers around 21 exabytes of data every month. 
                        </p>
                        
                        <p style="margin-top:12px">
                        Now those are the "big number" multipliers. In IT however, things are not always big. They can also be very small. Unfortunately the "small multipliers" are often used erroneously. For example the words "microprocessor" and "nanotechnology" use mathematical prefixes, but not accurately. What they really mean in general is "really damn small". 
                        </p>
                        
                        <p style="margin-top:12px">
                        <a class="show-modal-vocab" >milli</a> = .001 <br>
                        <a class="show-modal-vocab" >micro</a> = .000 001 <br>
                        <a class="show-modal-vocab" >nano</a> = .000 000 001 <br>
                        pico = .000 000 000 0001 <br>
                        
                        </p><p style="margin-top:12px">
                        Now that we know the prefixes... it's time to learn the units. We have already discussed byte and bit. This is a common measurement in computing. Although computers are much faster now than they were in 1940 (around the time they were invented), they are still digital, meaning that they can only understand zeros and ones (0 and 1).
                        </p>
                        
                        <p style="margin-top:12px">
                        You can put all the prefixes you learned (especially the big ones) onto any the following units of measurement related to IT:
                        </p>
                        
                        <p style="margin-top:12px">
                        <a class="show-modal-vocab" >bit</a> <br>
                        <a class="show-modal-vocab" >byte</a> <br>
                        <a class="show-modal-vocab" >bps</a> <br>
                        <a class="show-modal-vocab" >hz</a> <br>
                        <a class="show-modal-vocab" >flops</a> <br>
                        <a class="show-modal-vocab" >IPS</a> <br>
                        </p>
                        
                        <p style="margin-top:12px">
                        What can you do with these measurements? Almost everything! Compute <a class="show-modal-vocab" >bandwidth</a>, measure processor speed in TFLOPs with a <a class="show-modal-vocab" >benchmark</a>ing program, compare quality of digital cameras or monitors, and much, much more.
                        </p>
                        
                        <p style="margin-top:12px">
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
          scorePass: 4,
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
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              ans: 'floating point operations per second',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              ans: 'nano',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              ans: 'fault tolerance',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
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
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              question:
                'Logarithms are used in many areas of science and engineering including computer science and geology.',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              question:
                'Modern hard drives can store 500 gigabytes of data or more.',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              question:
                'How long will it be before the first 5-gigahertz processors become affordable?',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              question:
                'Computer processing power can increase by an order of magnitude between generations.',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              question:
                'The website performed very poorly because it was graphically heavy and required more bandwidth than was available.',
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
              vocab: {
                text: 'acronym',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `an abbreviation; a way of writing a longer string of words more concisely`,
              example: {
                text: 'IT is an acronym for Information Technology.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'bandwidth',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `a measurement of the capacity of data which can be moved between two points in a given period of time`,
              example: {
                text: 'The website performed very poorly because it was graphically heavy and required more bandwidth than was available.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'benchmark',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `a measurement or standard that serves as a point of reference by which process performance is measured`,
              example: {
                text: 'The magazine article used PCMark 7 scores as a benchmark for computer performance.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'bit',
                orText: 'binary digit',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `he smallest unit of storage; normally referred to as a '1' or '0'`,
              example: {
                text: 'The DBA "flipped a bit" in the database, changing a value from a 0 to 1.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'byte',
                orText: 'binary term',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `8 bit`,
              example: {
                text: 'One byte of data is enough memory to hold a single ASCII character.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'fault tolerance',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `The ability of a system component to fail without causing the entire system to shut down; this is
            often accomplished with redundancy`,
              example: {
                text: `Due to low fault tolerances in the new gaming console's GPU, the manufacturer had to issue a total recall.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'FLOPS',
                orText: 'floating point operations per second',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `a common measurement of computer speed dealing with decimal calculations in a given
            amount of time`,
              example: {
                text: 'The more FLOPS a computer can do, the faster it is.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'frequency',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `the number of cycles per unit time of a sound wave, most often measured in hertz`,
              example: {
                text: `The new processor ran at much higher frequency than the one it replaced, going from 1.8 GHZ
        up to 4 GHZ.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'G',
                orText: 'giga',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one billion`,
              example: {
                text: `The word giga originally comes from the Greek word for 'giant'.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'GB',
                orText: 'gigabyte',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one billion bytes`,
              example: {
                text: `Modern hard drives can store 500 gigabytes of data or more.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'K',
                orText: 'kilo',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one thousand
      `,
              example: {
                text: 'A kilobyte is 1024 bytes.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'M',
                orText: 'mega',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one million`,
              example: {
                text: `One megabyte is 1,048,576 bytes.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'T',
                orText: 'tera',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one trillion`,
              example: {
                text: `There are 1,099,511,627,776 bytes in a terabyte.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'm',
                orText: 'milli',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `a prefix meaning one thousandth`,
              example: {
                text: 'One millitesla is one-thousandth of a tesla.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'µ',
                orText: 'micro',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one millionth`,
              example: {
                text: `Although micro means "one-millionth", many people use it to express simply "a great deal of smallness.`,
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'n',
                orText: 'nano',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `one billionth`,
              example: {
                text: 'The teacher said the word "nano" can also be used for anything very small, such as nanotechnology.',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
            },
            {
              vocab: {
                text: 'IPS',
                orText: 'instructions per second',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              },
              description: `an very raw measurement of computer processor speed`,
              example: {
                text: 'IPS is a base measurement of computer speed often expressed in millions (MIPS).',
                audioUrl:
                  'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
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
          scorePass: 2,
          data: {
            audioUrl:
              'https://www.english4it.com/media/sounds/readings/143911/29.mp3?f=1661487165',
            read: `<div class="max-width-small paper mb-2 reading-text reading-well">
                        <h2 class="title">IT Acronyms and Measurements</h2> 
<p style="margin-top:12px">
                        The world of IT is full of acronyms and abbreviations. So is the world of measurements. That's pretty much a guarantee that everyone working with IT measurements is going to get confused. For example, what is the difference between an MB and an Mbit? What does ERP or CMS stand for? 
                        The above are examples of standard acronyms we hear all the time. Inside every organization there is likely to be a whole range of industry-specific acronyms as well. For instance, in my company we often talk of LMS, CAT, SEO, SL20, and many, many more. 
                        </p>
                        
                        <p style="margin-top:12px">
                        If someone mentions an unfamiliar acronym in your presence, you should ask the person to clarify and explain it. Most likely you will not be the only person in the room who feels lost. Asking questions is not seen as a sign of weakness in a modern IT department. It is a sign of curiosity and seeking to better oneself and one's knowledge about a subject. But let's not kid ourselves... in your IT career, you will have acronyms for everything. Soon it will be you confusing newbies with acronyms of your own.
                        </p>
                        
                        <h3>It needs acronyms because information is constantly expanding out of control</h3>
                        
                        <p style="margin-top:12px">
                        Here are some examples of information explosion:
                        </p>
                        
                        <p style="margin-top:12px">
                        · The CPU at the heart of Apple's iPhone 4 is more powerful than a Cray supercomputer costing millions of dollars from the 1970's.
                        </p>
                        
                        <p style="margin-top:12px">
                        · The software that powers the space shuttle runs on a single MB of RAM. The minimum RAM requirement for Windows 7 is 1 GB ( or 1,000 times as much).
                        </p>
                        
                        <p style="margin-top:12px">
                        · If automobiles had improved their performance at the same rate as computers over the past 50 years, we might all be driving $500 cars that go 5,000 kilometers per hour, and get 500 kilometers per liter of fuel. They would probably fly too. Cool.
                        </p>
                        
                        <p style="margin-top:12px">
                        · In 1980, a 10MB hard drive cost over $4,000 and was considered to be a lot of storage. Today, you can't even buy a 10MB hard drive. It would be worthless and pointless. Even Windows 95, released way back in April 1995, required a 55MB minimum hard drive. Now you can get a TB drive for under a hundred dollars.
                        </p>
                        
                        <p style="margin-top:12px">
                        · Did you know that in 2010 Youtube transfers more data in one day then the entire Internet did in the year 2000? 
                        </p>
                        
                        <h3>
                        Acronyms and abbreviations are essential to IT. Learning them is easier than you think.
                        </h3>
                        
                        <p style="margin-top:12px">
                        Computers tend to get more powerful on an order of magnitude over previous generations. Some people have even tried to quantify this phenomenon. One example is Moore's Law. A simple way to explain Moore's Law is that a brand new computer is completely outdated in five years.
                        </p>
                        
                        <p style="margin-top:12px">
                        How do you remember the difference between a kilobyte, megabyte, gigabyte, and a terabyte without going crazy? 
                        </p>
                        
                        <p style="margin-top:12px">
                        This is how. Break the terms down into their components. The word "megabyte" consists of two different words... "mega" and "byte". 
                        </p>
                        
                        <p style="margin-top:12px">
                        "Mega" is a multiplier prefix found at the start of measurement words which means 1,000,000 (or a million times). 
                        </p>
                        
                        <p style="margin-top:12px">
                        One "byte" is equal (normally) to 8 "bits".
                        </p>
                        
                        <p style="margin-top:12px">
                        A "bit" is equal to 1 switch "on" or "off" (either a 1 or 0).
                        </p>
                        
                        <p style="margin-top:12px">
                        It takes between 1 and 3 bytes to hold a letter... depending on what kind of character encoding you are using. 
                        </p>
                        
                        <p style="margin-top:12px">
                        So a megabyte is equal to 8,000,000 bits.... or roughly equivalent to 500,000 letters of the alphabet. This is about the length of a short novel. 
                        </p>
                        
                        <p style="margin-top:12px">
                        the prefix <a class="show-modal-vocab" >giga</a> means 1,000,000,000 or one billion times.
                        </p>
                        
                        <p style="margin-top:12px">
                        So how many bits is in a gigabyte? That's right... 8,000,000,000. Enough to store 1,000 novels.
                        </p>
                        
                        <p style="margin-top:12px">
                        Once you learn the prefixes and basic units of measure, it's all very easy.
                        </p>
                        
                        <p style="margin-top:12px">
                        <a class="show-modal-vocab" >kilo</a> = 1,000 <br>
                        <a class="show-modal-vocab" >mega</a> = 1,000,000 <br>
                        giga = 1,000,000,000 <br>
                        <a class="show-modal-vocab" >tera</a> = 1,000,000,000,000 <br>
                        peta = 1,000,000,000,000,000 <br>
                        exa = 1,000,000,000,000,000,000 <br>
                        
                        </p><p style="margin-top:12px">
                        There are bigger units of measurement that an exabyte, such as a zettabyte and a yottabyte, but we will not discuss them in this course at this time. But your children and grandchildren will have to know them!
                        </p>
                        
                        <p style="margin-top:12px">
                        How big is an exabyte? For instance, every word ever spoken by every member of mankind would fill about 5 exabytes of storage space. The Internet transfers around 21 exabytes of data every month. 
                        </p>
                        
                        <p style="margin-top:12px">
                        Now those are the "big number" multipliers. In IT however, things are not always big. They can also be very small. Unfortunately the "small multipliers" are often used erroneously. For example the words "microprocessor" and "nanotechnology" use mathematical prefixes, but not accurately. What they really mean in general is "really damn small". 
                        </p>
                        
                        <p style="margin-top:12px">
                        <a class="show-modal-vocab" >milli</a> = .001 <br>
                        <a class="show-modal-vocab" >micro</a> = .000 001 <br>
                        <a class="show-modal-vocab" >nano</a> = .000 000 001 <br>
                        pico = .000 000 000 0001 <br>
                        
                        </p><p style="margin-top:12px">
                        Now that we know the prefixes... it's time to learn the units. We have already discussed byte and bit. This is a common measurement in computing. Although computers are much faster now than they were in 1940 (around the time they were invented), they are still digital, meaning that they can only understand zeros and ones (0 and 1).
                        </p>
                        
                        <p style="margin-top:12px">
                        You can put all the prefixes you learned (especially the big ones) onto any the following units of measurement related to IT:
                        </p>
                        
                        <p style="margin-top:12px">
                        <a class="show-modal-vocab" >bit</a> <br>
                        <a class="show-modal-vocab" >byte</a> <br>
                        <a class="show-modal-vocab" >bps</a> <br>
                        <a class="show-modal-vocab" >hz</a> <br>
                        <a class="show-modal-vocab" >flops</a> <br>
                        <a class="show-modal-vocab" >IPS</a> <br>
                        </p>
                        
                        <p style="margin-top:12px">
                        What can you do with these measurements? Almost everything! Compute <a class="show-modal-vocab" >bandwidth</a>, measure processor speed in TFLOPs with a <a class="show-modal-vocab" >benchmark</a>ing program, compare quality of digital cameras or monitors, and much, much more.
                        </p>
                        
                        <p style="margin-top:12px">
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
          scorePass: 4,
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
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              ans: 'floating point operations per second',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              ans: 'nano',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              ans: 'fault tolerance',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
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
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              question:
                'Logarithms are used in many areas of science and engineering including computer science and geology.',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              question:
                'Modern hard drives can store 500 gigabytes of data or more.',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              question:
                'How long will it be before the first 5-gigahertz processors become affordable?',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              question:
                'Computer processing power can increase by an order of magnitude between generations.',
            },
            {
              audioUrl:
                'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
              question:
                'The website performed very poorly because it was graphically heavy and required more bandwidth than was available.',
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
                'Your writing will be graded on both content and proper grammar.',
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
          status: 2,
          type: 2,
          data: {
            ans: [0, 0, 0],
          },
        },
        {
          description: 'Pick the correct answer from a list.',
          status: 2,
          type: 3,
          data: { ans: [2, 1, 0, 1, 1] },
        },
        {
          description: 'Listen to the word and type it in.',
          status: 2,
          countSubmit: 2,
          type: 4,
          data: {
            // ans: ['', 'nano', 'fault tolerance', 'operations'],
            ans: ['', '', '', ''],
          },
        },
        {
          description: 'Type in the correct answer for each definition.',
          status: 0,
          countSubmit: 2,
          type: 5,
          data: { ans: ['gygabybte', 'fault tolerance', 'benchmark'] },
        },
        {
          description: 'Record yourself speaking English.',
          status: 0,
          type: 6,
          audioUrl:
            'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
        },
        {
          description: 'Pick a question and write about it.',
          status: 0,
          type: 7,
          data: {
            question: 'Do you think people in IT use too many acronyms? Why?',
            ans: '',
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
            ans: [0, 0, 1],
          },
        },
        {
          description: 'Pick the correct answer from a list.',
          status: 2,
          type: 3,
          data: { ans: [0, 1, 0, 1, 1] },
        },
        {
          description: 'Listen to the word and type it in.',
          status: 2,
          type: 4,
          data: {
            ans: [
              'floating point operations per second',
              'nano',
              'fault tolerance',
              'operations',
            ],
          },
        },
        {
          description: 'Type in the correct answer for each definition.',
          status: 2,
          type: 5,
          countSubmit: 3,
          data: { ans: ['gygabybte', 'fault tolerance', 'benchmark'] },
        },
        {
          description: 'Record yourself speaking English.',
          status: 2,
          type: 6,
          audioUrl:
            'https://www.english4it.com/media/sounds/dictionary/143300/139.mp3?f=1661483599',
        },
        {
          description: 'Pick a question and write about it.',
          status: 2,
          type: 7,
          data: {
            question: 'Do you think people in IT use too many acronyms? Why?',
            ans: `Write your answer using your favorite text editor, save it, and then paste a copy in the form below.Write your answer using your favorite text editor, save it, and then paste a copy in the form below.Write your answer using your favorite text editor, save it, and then paste a copy in the form below.Write your answer using your favorite text editor, save it, and then paste a copy in the form below.Write your answer using your favorite text editor, save it, and then paste a copy in the form below.Write your answer using your favorite text editor, save it, and then paste a copy in the form below.Write your answer using your favorite text editor, save it, and then paste a copy in the form below.Write your answer using your favorite text editor, save it, and then paste a copy in the form below.Write your answer using your favorite text editor, save it, and then paste a copy in the form below.Write your answer using your favorite text editor, save it, and then paste a copy in the form below.Write your answer using your favorite text editor, save it, and then paste a copy in the form below.Write your answer using your favorite text editor, save it, `,
          },
        },
      ],
    },
  ],
};
export default MockData;
