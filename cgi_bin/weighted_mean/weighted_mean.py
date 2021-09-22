'''
Created on 2014/07/15

@author: Rin
'''
#calculates weighted mean value

print "Content-type: text/html\n\n"

import cgitb; cgitb.enable()
import cgi
import sys
import math
import StringIO
import re

#obtaining input data from the form #######################
form = cgi.FieldStorage()
try:
    input_str = str(form.getvalue('data',''))
except:
    result = 'error'
    print '<p>invalid input</p>'
    sys.exit()
###########################################################

#substituting spaces and cammas with tabs##################
input_str = re.sub(' ','\t',input_str)
input_str = re.sub(',','\t',input_str)
###########################################################

#filling values, errors and weights #######################
data_strIO = StringIO.StringIO(input_str)
value = []
error = []
weight = []
wvalue = []
for line in data_strIO:
    data = line.split('\t')
    i_col = 0
    #skipping clustering tabs ##############################
    while str(data[i_col]) == '':
        i_col += 1
    ########################################################
    value.append(float(data[i_col]))
    i_col += 1
    #skipping again ########################################
    while str(data[i_col]) == '':
        i_col += 1
    ########################################################
    error.append(float(data[i_col]))
###########################################################

#calculation of the weighted mean value and its error #####
for i in range(len(value)):
    weight.append(1.0/(error[i]*error[i]))
    wvalue.append(value[i]*weight[i])

wmean = sum(wvalue)/sum(weight)
wm_weight = sum(weight)
wm_error = math.sqrt(1.0/wm_weight)

wdev = []
for i in range(len(value)):
    dev = value[i]-wmean
    wdev.append(weight[i]*dev*dev)

std_dev = math.sqrt(sum(wdev)/((len(value)-1)*sum(weight)))
###########################################################

#returning result in text/html ############################
print '<p>number of points: ' + str(len(value)) + '<br/>'
print 'mean value: ' + str(wmean) + '<br/>'
print 'statisitcal error: ' + str(wm_error) + '<br/>'
print 'standard deviation: ' + str(std_dev) + '<br/>'
if std_dev < 0.3*wm_error:
    print '<span class="style_emph">given errors may be '
    print 'overestimated. deviation seems to be much '
    print 'smaller.</span><br/>'
if std_dev > 1.5*wm_error:
    print '<span class="style_emph">given errors may be '
    print 'underestimated. There may be some systematic '
    print 'errors which is not take into account.<br/>'
if std_dev > wm_error:
    sys_error = math.sqrt(std_dev*std_dev-wm_error*wm_error)
    print 'systematic error: ' + str(sys_error) + '<br/>'
    if std_dev > 1.5*wm_error:
        print '</span>'
print '</p>'
###########################################################

#end of weighted_value.py #################################
