function withData(maxSpeakersToShow) {
    return function(Component) {
        const speakers = [
            { name : "Douglas Crockford", imageSrc : 'speaker-component-1124' },
            { name : "Tamara Baker", imageSrc : 'speaker-component-1530'},
            { name : "Eugene Chuvrov",imageSrc : 'speaker-component-10803'}
        ];
    
        return function() {
            const limitSpeakers = speakers.slice(0, maxSpeakersToShow);
            return <Component speakers={limitSpeakers}></Component>;
        };
    };
};
export default withData;