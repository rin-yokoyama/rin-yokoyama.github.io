'''
Created on 2019/11/26

@author: Rin
'''
print "Content-type: text/html\n\n"

import cgitb; cgitb.enable()
import cgi
import sys
import math

def NeutronEnergy(t,f):
    v = f/(t*1.e-9) # velocity in m/s
    c = 299792458. # the speed of light in m/s
    beta = v*v/(c*c)
    gamma = 1./math.sqrt(1.-beta)
    mass = 939565.4133 # neutron mass in keV
    return mass*(gamma-1.)

        
form = cgi.FieldStorage()
result = 'error'
try:
    tof = float(form.getvalue('t','100.0'))
    fl = float(form.getvalue('f','1.05'))
except:
    result = 'error'
    print '<p>invalid input</p>'
    sys.exit()
        
if tof < 0 :
    result = 'ToF must be a positive value.'
elif fl < 0:
    result = 'Flight length must be a positive value.'
else:
    result = str(NeutronEnergy(tof,fl)) + ' (keV)'

print '<p>ToF:' + str(tof) + ' (ns),'
print ' Flight length:' + str(fl) + ' (m)</p>'
print '<p>Neutron energy: ' + result + '</p>'
