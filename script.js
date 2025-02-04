// Handle petal size changes based on slider values
const sliders = document.querySelectorAll('.slider');
const petals = document.querySelectorAll('.petals path');
const val = document.querySelectorAll('.slider-val');
const inputBoxes = document.querySelectorAll('.input-box');

const inputBoxData = [

    {
        1: 'Students at this level begin to take responsibility for planning their inquiries and are developing strategies to explore their interests.',
        2: 'Students at this level take initiative and frame inquiry questions around their area of interest.',
        3: 'Students at this level make informed and deliberate decisions about their learning progress.',
        4: 'Students at this level are highly motivated and strategic about their learning.',
        5: 'Students at this level are open to ideas that challenge their current thinking and they pursue new knowledge to develop improved solutions.'
    },
    {
        1: 'Students at this level are willing to have a go at using mathematics they are familiar with to understand situations.',
        2: 'Students at this level reliably use the mathematics they know to help solve problems they are working through.',
        3: 'Students at this level make use of their growing repertoire of mathematical strategies to explore unfamiliar situations.',
        4: 'Students at this level are competent and confident users of mathematics in their lives.',
        5: 'Students at this level understand the systematic nature of mathematics and the power of it in modelling the physical or social environment.'
    },
    {
        1: 'Students at this level notice and explore phenomena and ideas, making connections to their own experience.',
        2: 'Students at this level ask questions and plan and undertake processes to explore their areas of interest.',      
        3: 'Students at this level develop inquiry questions related to their interests and conduct investigations to test their predictions.',
        4: 'Students at this level pose and test hypotheses, applying investigative methods to clarify and explore their new understandings.',
        5: 'Students at this level systematically refine hypotheses to develop authoritative knowledge from their investigations.'
    },
    {
        1: 'Students at this level use familiar communication tools in order to convey their ideas and opinions.',
        2: 'Students at this level are prepared to try out new modes of communication in order to expand their repertoire.',
        3: 'Students at this level communicate with presence and purpose.',
        4: 'Students at this level adapt their communication to achieve impact.',     
        5: 'Students at this level use a blend of tools to design and refine their communication in order to deliver a compelling message that expands perspectives.'
    },
    {
        1: 'Students at this level can describe the social frameworks and systems they are embedded in.',
        2: 'Students at this level recognise that there are different ways to investigate social issues.',
        3: 'Students at this level investigate social issues in depth by applying a range of tools.',
        4: 'Students at this level recognise the connections and distinctions between social issues through systematic investigation.',
        5: 'Students at this level define and analyse social issues using relevant frameworks and perspectives and take responsible social action.'
    },
    {
        1: 'Students at this level are starting to develop awareness of themselves and their potential, and to pursue opportunities for personal growth.',
        2: 'Students at this level can identify their strengths and challenges and make decisions to support their personal growth with increasing self-awareness.',
        3: 'Students at this level are developing increased personal, physical and social awareness and are able to analyse their strengths and draw from their experience to prioritise what is required for personal growth.',
        4: 'Students at this level show sense of self and strength of character and appreciate the need for sustained effort.',
        5: 'Students at this level are confident and insightful, holding themselves accountable for their actions.'
     },
];

sliders.forEach((slider, index) => {
    slider.addEventListener('input', (event) => {
        const scale = event.target.value / 100;
        petals[index].style.transform = `scale(${scale * 0.8})`;

        // Calculate the level based on the slider value
        const level = Math.round(((event.target.value / 100) - 0.5) * (5 - 1) / (1.5 - 0.5) + 1);

        // Ensure level is within the range of 1 to 5
        const boundedLevel = Math.max(1, Math.min(5, level));

        // Update the text value for the slider
        val[index].innerHTML = boundedLevel;

        // Update the corresponding input box with the appropriate description
        inputBoxes[index].innerHTML = inputBoxData[index][boundedLevel];
    });
});

document.getElementById('saveGraphButton').addEventListener('click', function() {
    // Get the SVG element
    var svgElement = document.getElementById('flower');
    
    // Serialize the SVG to a string
    var svgData = new XMLSerializer().serializeToString(svgElement);

    // Add the CSS styles directly to the SVG
    var styles = `
        .petal1 { fill: #8A2BE2; transform-origin: center; }
        .petal2 { fill: #FF6347; transform-origin: center; }
        .petal3 { fill: #FF1493; transform-origin: center; }
        .petal4 { fill: #40E0D0; transform-origin: center; }
        .petal5 { fill: #ADFF2F; transform-origin: center; }
        .petal6 { fill: #FFD700; transform-origin: center; }
    `;
    
    // Add styles as a <style> element inside the SVG
    var styleElement = `<style>${styles}</style>`;
    svgData = svgData.replace('</svg>', styleElement + '</svg>');

    // Create a Blob from the SVG data
    var blob = new Blob([svgData], { type: 'image/svg+xml' });

    // Create a link to trigger the download
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'flower.svg';

    // Trigger the download
    link.click();
});
