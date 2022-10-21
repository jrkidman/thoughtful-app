// possible object structure for database


const user = {
    name: string,
    email: string,
    phoneNumber: string,
    // zipcode: string,
    // gender: string,
    // orientation: string,
    dateOfBirth: date,
    anniversary: date,
    importantDates: [
        { 
            event: string, 
            date: date, 
        }],
    partnerName: string,
    partnerBirthday: date,
    partnerPhoneNumber: string,
    preferredLoveLanguages: [
        wordsOfAffirmation, 
        physicalTouch, 
        giftGiving, 
        qualityTime, 
        actsOfService],
    frequencyOfReminders: [
        twiceADay, 
        onceADay, 
        weekdays, 
        fourXWeek, 
        threeXWeek, 
        twoXWeek, 
        oneceXWeek, 
        WeekendsOnly],
}

const prompts = {
    wordsOfAffirmation: [],
    physicalTouch: [],
    giftGiving: [],
    qualityTime: [],
    actsOfService: [],
}