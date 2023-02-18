export default function calculateGender(genderRate: number) {
  if (genderRate === 8) {
    return "always-female";
  } else if (genderRate === 0) {
    return "always-male";
  } else if (genderRate === -1) {
    return "gender-unknown";
  } else {
    return "male";
  }
}
