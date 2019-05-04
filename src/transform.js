module.exports.groupAdultsByAgeRange = function groupAdultsByAgeRange(adults) {

    const TwentyAndYounger = adults.filter((adult)=> {
      return (adult.age >= 18) && (adult.age <= 20);
    });
    const TwentyOneUntill30 = adults.filter((adult)=> {
      return (adult.age >= 21) && (adult.age <= 30);
    });
    const ThiryOneUntill40 = adults.filter((adult)=> {
      return (adult.age >= 31) && (adult.age <= 40);
    });
    const FourtyOneUntill50 = adults.filter((adult)=> {
      return (adult.age >= 41) && (adult.age <= 50);
    });
    const FiftyOneAndOlder = adults.filter((adult)=> {
      return (adult.age >= 51);
    });
  
    const result = {};
  
    if (TwentyAndYounger.length > 0) {
      result['20 and younger'] = TwentyAndYounger
    };
    if (TwentyOneUntill30.length > 0) {
      result['21-30'] = TwentyOneUntill30
    };
    if (ThiryOneUntill40.length > 0) {
      result['31-40'] = ThiryOneUntill40
    };
    if (FourtyOneUntill50.length > 0) {
      result['41-50'] = FourtyOneUntill50
    };
    if (FiftyOneAndOlder.length > 0) {
      result['51 and older'] = FiftyOneAndOlder
    };
  
    return result;
  };