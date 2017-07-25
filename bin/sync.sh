#!/bin/sh

rsync -avz -e "ssh -i az_ayu.pem" --progress dist ec2-user@ec2-34-205-247-42.compute-1.amazonaws.com:/home/ec2-user
rsync -avz -e "ssh -i az_ayu.pem" --progress bin ec2-user@ec2-34-205-247-42.compute-1.amazonaws.com:/home/ec2-user
rsync -avz -e "ssh -i az_ayu.pem" --progress node_modules ec2-user@ec2-34-205-247-42.compute-1.amazonaws.com:/home/ec2-user
rsync -avz -e "ssh -i az_ayu.pem" --progress app.js ec2-user@ec2-34-205-247-42.compute-1.amazonaws.com:/home/ec2-user
rsync -avz -e "ssh -i az_ayu.pem" --progress routes ec2-user@ec2-34-205-247-42.compute-1.amazonaws.com:/home/ec2-user
