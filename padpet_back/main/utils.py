
def parse_msg(*msg):
    p_msg = ''
    msg = msg[0]
    for w in msg:

        if not (type(w) == str): 
            w = str(w) + ' '
        p_msg += w.decode("utf8")

    return p_msg



def i_print(*msg):
    try:
        p_msg = parse_msg(msg)
        print(p_msg)
    except:
        print(msg)
