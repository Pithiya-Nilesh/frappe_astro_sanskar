from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in astro_sanskar/__init__.py
from astro_sanskar import __version__ as version

setup(
	name="astro_sanskar",
	version=version,
	description="asd",
	author="fasdf",
	author_email="asd",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
