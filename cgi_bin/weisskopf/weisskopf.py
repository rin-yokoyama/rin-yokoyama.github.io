'''
Created on 2014/07/14

@author: Rin
'''
print "Content-type: text/html\n\n"

import cgitb; cgitb.enable()
import cgi
import sys
import math

def WeisskopfFunc(e,m,t):
    if t == 'e1':
        return 6.76*1.0E-6/(math.pow(e,3.0)*math.pow(m,2.0/3.0))
    if t == 'm2':
        return 3.10*1.0E+7/(math.pow(e,5.0)*math.pow(m,2.0/3.0))
    if t == 'e3':
        return 2.04*1.0E+19/(math.pow(e,7.0)*math.pow(m,2.0))
    if t == 'm4':
        return 2.12*1.0E+32/(math.pow(e,9.0)*math.pow(m,2.0))
    if t == 'e5':
        return 2.89*1.0E+44/(math.pow(e,11.0)*math.pow(m,10.0/3.0))
    if t == 'm1':
        return 2.20*1.0E-5/(math.pow(e,3.0))
    if t == 'e2':
        return 9.52*1.0E+6/(math.pow(e,5.0)*math.pow(m,4.0/3.0))
    if t == 'm3':
        return 6.66*1.0E+19/(math.pow(e,7.0)*math.pow(m,4.0/3.0))
    if t == 'e4':
        return 6.50*1.0E+31/(math.pow(e,9.0)*math.pow(m,8.0/3.0))
    if t == 'm5':
        return 9.42*1.0E+44/(math.pow(e,11.0)*math.pow(m,8.0/3.0))
    else:
        return 'error'
        
form = cgi.FieldStorage()
result = 'error'
try:
    transition = str(form.getvalue('t','error'))
    energy = float(form.getvalue('e','0'))
    mass = float(form.getvalue('m','0'))
except:
    result = 'error'
    print '<p>invalid input</p>'
    sys.exit()
        
if energy < 1 or energy > 10000 :
    result = 'input energy must be in the range: 1 to 10E+4'
elif mass < 1 or mass > 300:
    result = 'input mass must be in the range: 1 to 300'
else:
    result = str(WeisskopfFunc(energy,mass,transition)) + ' (s)'

print '<p>transition:' + transition + ','
print ' energy:' + str(energy) + '(keV), mass:' + str(int(mass)) + '</p>'
print '<p>Weisskopf half-life: ' + result + '</p>'
