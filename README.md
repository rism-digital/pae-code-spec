## Plaine & Easie Code Specification

The Plaine & Easie Code is a text-based music notation encoding system, primarily designed to be used
for encoding small, monophonic extracts from a larger musical composition. 

The Plaine & Easie code system was first proposed by Barry S. Brook, with input from several others, in 1964, 
as a means of capturing incipits for more precisely identifying musical compositions in manuscripts. Incipits were
a means of uniquely identifying compositions that could not otherwise be uniquely identified by the title or composer
of the work.

Plaine & Easie code was used in the RISM cataloguing systems, first typewritten on index cards, and then in 
software databases. In 2004 the Plaine & Easie code was [adopted](https://www.loc.gov/marc/marbi/2004/2004-05.html) as 
part of the MAchine Readable Catalog (MARC) standard. Currently, the RISM uses Muscat as its cataloguing system which
has Plaine & Easie support integrated.

RISM now holds well over 1 million incipits encoded using the Plaine & Easie code; a significant corpus of notated music
and an impressive global effort. These incipits have been the subject of a number of tools, databases,
and studies, and with an increasing number of software tools and projects using it, further improvements and enhancements
to the code, and to the documents that describe it, were felt to be necessary. In some areas, the lack of clear specifications,
or inconsistent behaviours, have made it challenging for ensuring consistency across the whole corpus, which in turn
made it difficult to build data authoring and validation tools. 

This repository hosts two different versions of the Plaine & Easie Code specification. The first, which we are calling
"Version 1", represents the status of the code as it was until 2022. We have decided to forego any significant changes
to this version of the specification, as it represents the most widely adopted form of the code, and changes to this
specification would risk introducing confusion.

The second version, "Version 2", represents work-in-progress for changes to the Plaine & Easie Code. These changes are
largely based in the goal of making the Plaine & Easie Code more consistent, such that the large existing corpus of 
incipits can be more easily used in notation search, data analysis, and data science.

### References

Brook, B., et al. 1964. Notating music with ordinary typewriter characters (A Plaine and Easie code system for Musicke). 
_Fontes Artis Musicae_ 11 (3). pp. 142–159.

Brook, B. 1965. The simplified "Plaine and Easie Code System" for notating music: A proposal for international adoption. 
_Fontes Artis Musicae_ 12 (2/3). pp. 156–160.

MARC Development Office. 2004. Proposal No.: 2004-05, Changes needed to Accommodate RISM Data -- Music Incipits. 
https://www.loc.gov/marc/marbi/2004/2004-05.html
