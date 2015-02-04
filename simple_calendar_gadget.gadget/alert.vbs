sub alert(prompt)
  MsgBox prompt, 48 , "simple calendar gadget"
end sub

function confirm(prompt)
  dim res
  res = MsgBox (prompt, 33, "simple calendar gadget")
  if res=1 then
    confirm = true
  else
    confirm = false
  end if
end function
