function equity(situation,outs){
  if (situation == "flop") {
    return (100*(outs/47 + (47-outs)/47*outs/46)).toPrecision(3);
  }
  if (situation == "turn") {
    return (100*outs/46).toPrecision(3);
  }
  return 0;
}
