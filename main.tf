provider "aws" {
  access_key = "access_key"
  secret_key = "secret_key"
  region     = "ap-southeast-1"
}

resource "aws_instance" "demo-server" {
  ami           = "ami-0c5199d385b432989"
  instance_type = "t2.micro"
  count = 2
  key_name = "atisak"

  tags {
    Name = "ubuntu-demo-terraform"
  }
}
