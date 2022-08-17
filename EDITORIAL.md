## Plaine & Easie Specification Editorial Process

The editorial process is designed to capture the process and discussion behind changes to the specification, promote
transparency, and preserve an audit trail for the historical development of the specification in response to feedback.

The process is divided into three main activities:

1. Reporting an issue, or requesting a change, through the Issues section of this repository. Discussion may follow
to clarify the scope of a change, or to present alternate courses of action.
2. A Pull Request against the text of the specification enacts the change. The changes may go through several revisions, 
and the history of those revisions are captured in the Pull Request.
3. Approval by the Editors and merging the Pull Request. At least two approvals by the Editors, not including the author 
of the Pull Request, is required to merge a change. Once a change has been merged, it is part of the specification.

Each of these steps serves to document the reason for the change and the person who requested it, the various iterations 
and discussions the change has gone through, and then a record of the approving editors who accepted the change. 

More details about each of these steps follows.

### Issue Reporting

Individuals who have identified a change they wish to see should start by opening an issue on this repository. Please
do not open Pull Requests to enact a change without first having an issue describing it. In your issue, provide as much
detail as possible about the motivation for the change. Concrete use cases are extremely helpful for understanding 
motivation.

### Pull Requests and Revisions

Once an issue has been described, a member of the Editors, or a community member on invitation from the Editors, can 
open a pull request to make the changes to the specification. We use [ReSpec](https://respec.org) as the tool for 
presenting the specifications; see the section below on how ReSpec works. Each Pull Request should limit itself to 
solving one or, at most, two related issues. Editors other than the original author of the Pull Request can ask for 
further changes.

### Merging and Approval

By convention, the original author of the pull request cannot approve their own change. Once a change has been approved
by two other editors it may be merged into the specification. Typically the last approving editor also does the merge. 

Once merged, the change becomes part of the history of the specification. Since we use the git version control system,
these changes are preserved and the history of the changes comes "for free" with the system. Anyone can go back through
the history log of the changes and see when a change was made. 

When viewing a file, the "Blame" button at the top of the file will even annotate the whole code to show you who changed
every section of the underlying HTML, and will link back to the pull request that initiated that change.

## Editorial Guidelines

Prior to Version 2, the Plaine & Easie Code specification was written primarily for an audience of encoders;
that is, people who were responsible for creating Plaine & Easie encodings when cataloguing sources in RISM. As such,
it was a combination of specification and encoding guidelines, and had a number of under-specified, vague, or conflicting
rules. In Version 2, these two purposes were separated into dedicated documents, and the specifications are now written 
to provide a comprehensive set of the rules of the encoding scheme, while the guidelines build on the specification to 
provide further assistance with encoding scenarios.

Changes to the Version 1 specification should only be made to fix language or resolve ambiguity without changing the core
encoding scheme. Since this is the most widely adopted form of the specification, and is used outside of RISM, changes 
to the scheme have knock-on effects for others.

The Version 2 specification strives to provide unambiguous language for people who want an authoritative reference for 
what is, and what is not, allowed in Plaine & Easie. In addition to assisting encoders by knowing what they can include, 
it is also meant to serve as a reference for software developers and data scientists, to know what data they can expect 
when building tools that use Plaine & Easie code, and to understand what constitutes "valid" or "invalid" data.

When writing the specifications, it is important to keep in mind the concepts of "normative" and "non-normative". These
terms refer to the style and content of the sections of the specification. In a normative section, the content should be
written to set out the rules for a given component. To provide clarity, a restricted set of words drawn from 
[RFC 2119](https://www.rfc-editor.org/rfc/rfc2119.txt) set out the parameters, and provide an easy way to identify the 
core rules of the code. These words are spelled in all-caps in the specification.

These words include:

 - MUST / MUST NOT: A hard requirement or prohibition; violating this requirement results in invalid PAE.
 - SHOULD / SHOULD NOT: Recommended; violations do not affect validity, but they may raise warnings.
 - MAY: Optional.

Non-normative sections, in contrast, are meant to provide additional context or to describe additional technologies
without setting out a hard-and-fast set of rules for them. Non-normative notes may be included in normative sections,
but normative content cannot be included in non-normative sections. The RFC 2119 words should be avoided in non-normative
sections (the words themselves may be included, but not styled in upper-case).

By way of example, a specification for a peanut butter sandwich might go something like this:

    The sandwich MUST include two slices of bread, and MUST include peanut butter. Peanut butter SHOULD be spread evenly
    across the surface of the bread. Peanut butter MAY be spread on both slices. After spreading, both slices MUST be
    pressed together, and the peanut butter MUST be between the slices.

    Non-normative note: Both crunchy and smooth peanut butter can be used to make a peanut butter sandwich. Some
    implementations of peanut butter sandwiches also include other ingredients, such as jam or bananas.

Although a somewhat trivial example, we can easily tell from these rules that the requirements for a peanut butter
sandwich are:

 - Two slices of bread
 - Peanut butter
 - Slices must be pressed together
 - Peanut butter must be in the middle.

Optionally, the peanut butter should be evenly spread (recommended, but there's no rule saying that it can't just be a
blob in the middle), and optionally the peanut butter can be on both slices (it does not affect the nature of the 
sandwich if it's on one or both slices).

The non-normative note provides some additional context about the sandwich. It answers questions that do not affect
the core specification (both crunchy and smooth are peanut butters, so we didn't need to specify this but it may
be a question that a reader might have).

You will also notice that nothing is said about other forms of peanut butter sandwiches, like a single piece of
bread folded over; In our scheme, this is an invalid form of sandwich because it does not meet the two-slice rule. 
This is not to say that in the greater world this is invalid, but in our specific universe that we have constructed, it 
is not a valid form of sandwich.

To bring this back to Plaine & Easie, it is clear that we are not specifying how *all* music notation works, but we are
only concerned with describing how it works within a limited context. So if we say that a clef MUST specify line numbers
from 1-5, we are not saying that other forms of clefs on 6-line staves do not exist; we are simply saying that Plaine &
Easie does not support it.

### Style

Spelling follows the US form of words (flavor, neighbor, digitize). Serial commas are used in lists. Dates, if necessary,
are given in YYYY-MM-DD form. Measurements are given in metric.

Do not, except under specific circumstances, change font face, size, color, or other style features.

### ReSpec and Markup

The specification is written in plain HTML but it uses [ReSpec](https://respec.org), a tool developed by the W3C, 
to enhance and augment the plain HTML with additional functionality. Some examples of the additional things that ReSpec 
does is to add notes that a section is non-normative, creates a table-of-contents for the sections, adds nicely 
formatted front matter to the top with editors and other administrative information, among other things. These features
are controlled by adding special CSS classes or IDs to the HTML elements, which then mark them to be processed specially.

The easiest way to write ReSpec to get it to format it the way you want is to copy what has been done in previous 
sections. The ReSpec documentation also provides examples of how you can mark some things up, but it is not exhaustive,
so you may have to resort to trying something and seeing if it works.

### Previewing Pull Requests

When a pull request is opened, a GitHub action will publish the version of the specification so that others can preview
how it looks. The URL will contain the number of the pull request in the URL. Subsequent updated to the pull request
will also update the preview. 

For example, https://rism-digital.github.io/pae-code-spec/pr-preview/pr-49/ will provide a preview of Pull Request #49.

You can always find a link to the preview in the Pull Request itself.

### Rendering Examples with Verovio

At present, previewing Plaine & Easie code with Verovio within the specifications is possible. Rendering is only available
within a table of examples. For example:

```html
<table class="simple" style="width: 100%">
    <thead>
    <tr>
        <th>Code</th>
        <th>Notation</th>
    </tr>
    </thead>
    <tbody>
    <tr class="notation-example">
        <td class="notation-code">
            <script type="application/json">
                {
                    "clef": "G-2",
                    "keysig": "bBEA",
                    "timesig": "4/4",
                    "data": "{''6E'B8G}{GA}-''C{'3B8..G}"
                }
            </script>
            <code>{''6E'B8G}{GA}-''C{'3B8..G}</code>
        </td>
        <td class="notation-result"></td>
    </tr>
    </tbody>
</table>
```

The important elements about this markup are:

 - The `notation-example` class on the `<tr>` element. This signals that the row contains some markup that should be
passed to Verovio.
 - The `notation-code` class on the `<td>` element. Within the `<td>` you should embed a script tag with a JSON-formatted
Plaine & Easie document. This will be the format used by Verovio to render the example. It will not be shown to users.
 - The `<code>` tags within the `notation-code` element are what will be shown to the users. This means you can restrict
the example being shown to just the elements you are trying to illustrate, while omitting any additional code needed to
render, but unnecssary for the example.
 - The `notation-result` `td` must always be blank. The SVG output of the rendering will be placed in this cell.

Any other `<td>` elements within the `<tr>` can be present, but will be ignored.

