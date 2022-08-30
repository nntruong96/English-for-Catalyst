/**
 * Copyright (c) 2022 - KuKuLu Vietnam Limited
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
const styles = {
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
};
export default styles;
