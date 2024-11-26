# CNE430-FinalProject: Online Resume on AWS
## Project Overview
### Build and host an online resume on a secure website using a range of AWS services: [S3](https://aws.amazon.com/s3/), [Route 53](https://aws.amazon.com/route53/), [CloudFront](https://aws.amazon.com/cloudfront/), and [AWS Certificate Manager](https://aws.amazon.com/certificate-manager/)to provide scalability, security, and reliability.
![figure #Architecture.jpg](Architecture.jpg)
## Build a S3 Static Website
* Create HTNL, CSS and JavaScript files for:
	- Main page
	- John Doe's Resume Page
	- Alex Johnson's Resume Page
	- Ryan Miller's Resume Page
* Create a S3 Bucket and upload fies to this bucket.
* Configure [S3](https://aws.amazon.com/s3/) to host a static website with public access.
## Associate the website with a custom domain name using [Route 53](https://aws.amazon.com/route53/)
* Create public hosted zone for the custom domain name on [Route 53](https://aws.amazon.com/route53/).
* Update Domain Name records to point to the [S3](https://aws.amazon.com/s3/) website endpoint
## Create TLS/SSL Certificate using [AWS Certificate Manager](https://aws.amazon.com/certificate-manager/)
* Using [AWS Certificate Manager](https://aws.amazon.com/certificate-manager/) us-east-1 region to issued certificate for custom domain name.
## Distribute the website by using [CloudFront](https://aws.amazon.com/cloudfront/)
* Setting up Origin Access Control to [CloudFront](https://aws.amazon.com/cloudfront/).
* Updating the A Record in [Route 53](https://aws.amazon.com/route53/) to point to [CloudFront](https://aws.amazon.com/cloudfront/)
## Documents
Step by step installation document: [Installation Guide](https://github.com/luongvv-rtc/CNE430-FinalProject/Installation_Document.pdf)
## References
* YouTube. (n.d.). YouTube. https://www.youtube.com/watch?v=x7YjX2_zGsk  
* freeCodeCamp. (2023, November 8). How to build an online résumé on AWS using S3, Route 53, CloudFront, and ACM. freeCodeCamp.org. https://www.freecodecamp.org/news/aws-
project-build-a-resume 
## Special Thanks
Thank you, Christine Sutton, for all the guidance on this project and during the course.

Thank you, [Tyler Sabin](https://github.com/tsabin2023) and [Abiyu Tamirat](https://github.com/AbiyuTamirat2), for your contribution and collaboration for this project.

