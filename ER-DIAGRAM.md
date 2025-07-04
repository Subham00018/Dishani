# EduCompare App - Entity-Relationship Diagram

This diagram outlines the logical data structure of the EduCompare application. It's based on the data types defined in `src/lib/types.ts`.

The current implementation in `src/lib/data.ts` uses a denormalized structure where Course, Placement, and Scholarship details are embedded within the College object. This ER diagram represents the normalized, logical relationships between these entities as they would exist in a relational database.

## Mermaid Diagram

```mermaid
erDiagram
    COLLEGE {
        string id PK "Unique identifier (e.g., 'iit-bombay')"
        string name "College Name (e.g., 'IIT Bombay')"
        string logoUrl
        string campusPhotoUrl
        string location
        int ranking "National Ranking"
        string feeStructure "Overall fee note"
        string about "Description of the college"
        string website
    }

    COURSE {
        string name "Course Name (e.g., 'Computer Science')"
        string fee "Fee for the specific course"
    }

    PLACEMENT {
        string overview "General placement overview"
        string averagePackage
        string highestPackage
        string topRecruiters "Array of recruiter names"
    }

    SCHOLARSHIP {
        string description "Name/description of the scholarship"
    }

    ENTRANCE_EXAM {
        string id PK "Unique identifier (e.g., 'jee-advanced')"
        string name "Exam Name (e.g., 'JEE Advanced 2024')"
        string date
        string description
        string bannerImageUrl
    }

    COLLEGE ||--|{ PLACEMENT : "has"
    COLLEGE ||--o{ COURSE : "offers"
    COLLEGE ||--o{ SCHOLARSHIP : "provides"
    COLLEGE }o--o{ ENTRANCE_EXAM : "accepts / is for"

```

### Relationships Explained:

*   **COLLEGE `||--|{` PLACEMENT**: One-to-One. Each college has one set of placement details.
*   **COLLEGE `||--o{` COURSE**: One-to-Many. Each college offers many courses.
*   **COLLEGE `||--o{` SCHOLARSHIP**: One-to-Many. Each college provides many scholarships.
*   **COLLEGE `}o--o{` ENTRANCE_EXAM**: Many-to-Many. A college can accept scores from multiple exams, and an exam is relevant for multiple colleges.
