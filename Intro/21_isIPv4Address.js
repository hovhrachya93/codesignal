// An IP address is a numerical label assigned to each device
// (e.g., computer, printer) participating in a computer network
// that uses the Internet Protocol for communication.
// There are two versions of the Internet protocol,
// and thus two versions of addresses. One of them is the IPv4 address.
// Given a string, find out if it satisfies the IPv4 address naming rules.

function isIPv4Address(inputString) {
    if (/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(inputString)) {
      return true;
    }
    return false;
  }


// function isIPv4Address(s) {
//     var r = s.split(".")
//     return r.length === 4 && r.every(x => x != "" && !isNaN(x) && x >= 0 && x < 256)
// }


// function isIPv4Address(s) {
//     return s.split(".").every(i => i != "" && Number(i) <= 255 && Number(i) >= 0) && s.split(".").length == 4
// }


  
  