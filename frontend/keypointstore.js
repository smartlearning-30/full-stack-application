/*##########################################################################################################*/
/*--------------------  THIS PAGE CONTAINS KEYPOINT,QUESTIONS AND QUIZ JAVA SCRIPT  -----------------------*/
/*#########################################################################################################*/
window.keypoints = {
    python: {
        title: "Python Cheat Sheet",
        content: `
        <h6>1. Python Introduction</h6>
                <ul>
                    <li>High-level, interpreted programming language created by Guido van Rossum in 1991</li>
                    <li>Used in web development, software development, data analysis, AI, and more</li>
                    <li>Simple syntax, easy readability, and cross-platform compatibility</li>
                    <li>Python 3 is the latest major version</li>
                    <li>Uses indentation for code blocks instead of braces</li>
                </ul>

                <h6>2. Python Features</h6>
                <ul>
                    <li>Easy to learn and use with simple syntax</li>
                    <li>Interpreted language (executes line by line)</li>
                    <li>Cross-platform compatibility (Windows, Linux, macOS)</li>
                    <li>Free and open-source</li>
                    <li>Supports object-oriented, procedural, and functional programming</li>
                    <li>Large standard library (e.g., NumPy, Pandas, Django, Flask)</li>
                    <li>Extensible (can integrate with C/C++)</li>
                </ul>

                <h6>3. Python Variables</h6>
                <ul>
                    <li>Variables store data in memory</li>
                    <li>No explicit declaration needed (dynamic typing)</li>
                    <li>Naming rules:
                        <ul>
                            <li>Start with a letter or underscore (_)</li>
                            <li>Case-sensitive (myVar ≠ myvar)</li>
                            <li>Cannot use Python keywords</li>
                        </ul>
                    </li>
                    <li>Assignment: <code>x = 10</code></li>
                </ul>

                <h6>4. Python Data Types</h6>
                <ul>
                    <li><strong>Numeric Types:</strong>
                        <ul>
                            <li><code>int</code> (e.g., 5)</li>
                            <li><code>float</code> (e.g., 3.14)</li>
                            <li><code>complex</code> (e.g., 2 + 3j)</li>
                        </ul>
                    </li>
                    <li><strong>Sequence Types:</strong>
                        <ul>
                            <li><code>str</code> (e.g., "Hello")</li>
                            <li><code>list</code> (mutable)</li>
                            <li><code>tuple</code> (immutable)</li>
                        </ul>
                    </li>
                    <li><strong>Boolean:</strong> <code>True</code> or <code>False</code></li>
                    <li><strong>None:</strong> Represents absence of value (<code>None</code>)</li>
                </ul>

                <h6>5. Python Keywords</h6>
                <ul>
                    <li>Reserved words with special meanings (e.g., <code>if</code>, <code>else</code>, <code>for</code>, <code>while</code>)</li>
                    <li>Cannot be used as variable names</li>
                    <li>Examples: <code>True</code>, <code>False</code>, <code>None</code>, <code>and</code>, <code>or</code>, <code>def</code>, <code>class</code>, <code>import</code></li>
                </ul>

                <h6>6. Python Operators</h6>
                <ul>
                    <li><strong>Arithmetic:</strong> <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code>, <code>**</code></li>
                    <li><strong>Comparison:</strong> <code>==</code>, <code>!=</code>, <code>></code>, <code><</code></li>
                    <li><strong>Logical:</strong> <code>and</code>, <code>or</code>, <code>not</code></li>
                    <li><strong>Assignment:</strong> <code>=</code>, <code>+=</code>, <code>-=</code></li>
                    <li><strong>Membership:</strong> <code>in</code>, <code>not in</code></li>
                    <li><strong>Identity:</strong> <code>is</code>, <code>is not</code></li>
                </ul>

                <h6>7. Python Loops</h6>
                <ul>
                    <li><strong>for loop:</strong> Iterates over sequences (lists, strings, etc.)
                        <pre><code>for i in range(5):
    print(i)</code></pre>
                    </li>
                    <li><strong>while loop:</strong> Runs while a condition is true
                        <pre><code>while x < 5:
    print(x)
    x += 1</code></pre>
                    </li>
                    <li><strong>Control statements:</strong> <code>break</code>, <code>continue</code>, <code>pass</code></li>
                </ul>

                <h6>8. Python Strings</h6>
                <ul>
                    <li>Immutable sequences of characters</li>
                    <li>Concatenation: <code>"Hello" + "World"</code></li>
                    <li>Methods: <code>lower()</code>, <code>upper()</code>, <code>split()</code>, <code>replace()</code></li>
                    <li>Multi-line strings: <code>"""Line 1\nLine 2"""</code></li>
                </ul>

                <h6>9. Python Lists</h6>
                <ul>
                    <li>Ordered, mutable collections: <code>[1, 2, 3]</code></li>
                    <li>Methods: <code>append()</code>, <code>remove()</code>, <code>pop()</code>, <code>sort()</code></li>
                    <li>Slicing: <code>list[1:3]</code></li>
                </ul>

                <h6>10. Python Tuples</h6>
                <ul>
                    <li>Ordered, immutable collections: <code>(1, 2, 3)</code></li>
                    <li>Faster than lists for fixed data</li>
                    <li>Methods: <code>count()</code>, <code>index()</code></li>
                </ul>

                <h6>11. Python Dictionary</h6>
                <ul>
                    <li>Key-value pairs: <code>{"name": "Alice", "age": 25}</code></li>
                    <li>Unordered, mutable</li>
                    <li>Methods: <code>keys()</code>, <code>values()</code>, <code>items()</code></li>
                </ul>

                <h6>12. Python Lambda Functions</h6>
                <ul>
                    <li>Anonymous functions: <code>lambda x, y: x + y</code></li>
                    <li>Used with <code>map()</code>, <code>filter()</code>, <code>reduce()</code></li>
                    <li>Example:
                        <pre><code>square = lambda x: x ** 2
print(square(5))  # Output: 25</code></pre>
                    </li>
                </ul>

                <h6>13. Python Modules</h6>
                <ul>
                    <li>Reusable code in .py files</li>
                    <li>Import: <code>import module_name</code></li>
                    <li>Standard modules: <code>math</code>, <code>os</code>, <code>sys</code></li>
                </ul>

                <h6>14. Python Exceptions</h6>
                <ul>
                    <li><code>try-except</code>: Handle errors gracefully
                        <pre><code>try:
    print(10 / 0)
except ZeroDivisionError:
    print("Error: Division by zero!")</code></pre>
                    </li>
                    <li><code>finally</code>: Always executes (e.g., for cleanup)</li>
                    <li><code>raise</code>: Manually trigger exceptions</li>
                </ul>
            </div>
        `
    },
    dbms: {
        title: "DBMS Cheat Sheet",
        content: `
        <h6>1. Introduction to DBMS</h6>
            <ul>
                <li>DBMS stands for Database Management System.</li>
                <li>It is software for storing, retrieving, and managing data efficiently.</li>
                <li>Ensures data integrity and security.</li>
                <li>Supports CRUD operations (Create, Read, Update, Delete).</li>
                <li>Allows multi-user access and concurrent transactions.</li>
                <li>Popular DBMS examples: MySQL, PostgreSQL, Oracle, SQL Server.</li>
                <li>Advantages include systematic data management, reduced redundancy, and consistency.</li>
            </ul>

            <h6>2. DBMS Features</h6>
            <ul>
                <li>Data Abstraction: Hides complex storage details (physical, logical, and view levels).</li>
                <li>Data Independence: Changes in database structure don’t affect applications.</li>
                <li>Data Integrity: Enforced via constraints like primary and foreign keys.</li>
                <li>Security: Includes authentication, authorization, and encryption.</li>
                <li>Backup & Recovery: Protects data against loss or failure.</li>
            </ul>

            <h6>3. Types of DBMS</h6>
            <ul>
                <li>Relational DBMS (RDBMS): Uses tables (e.g., MySQL, Oracle).</li>
                <li>Hierarchical DBMS: Organizes data in a tree-like structure (e.g., IBM IMS).</li>
                <li>Network DBMS: Graph structure supporting many-to-many relationships.</li>
                <li>NoSQL DBMS: For unstructured or semi-structured data (e.g., MongoDB, Cassandra).</li>
                <li>Object-oriented DBMS: Stores data as objects with associated methods.</li>
            </ul>

            <h6>4. DBMS Architecture</h6>
            <ul>
                <li>Three-Level Architecture:</li>
                <ul>
                    <li>Internal Level: Deals with physical storage and indexing.</li>
                    <li>Conceptual Level: Defines logical structure like tables and relationships.</li>
                    <li>External Level: Provides user-specific views of the data.</li>
                </ul>
            </ul>

            <h6>5. DBMS Models</h6>
            <ul>
                <li>Relational Model: Organizes data in tables with rows, columns, and keys.</li>
                <li>Hierarchical Model: Uses parent-child relationships in a tree format.</li>
                <li>Network Model: Allows flexible many-to-many relationships via graphs.</li>
                <li>Object-oriented Model: Stores data as objects containing attributes and methods.</li>
            </ul>

            <h6>6. Normalization</h6>
            <ul>
                <li>Goal: Minimize redundancy and improve data integrity.</li>
                <li>1NF (First Normal Form): Ensures atomic values and no repeating groups.</li>
                <li>2NF (Second Normal Form): Removes partial dependencies on a composite key.</li>
                <li>3NF (Third Normal Form): Eliminates transitive dependencies.</li>
            </ul>

            <h6>7. SQL Basics</h6>
            <ul>
                <li>SELECT: Retrieve data (e.g., SELECT * FROM employees;).</li>
                <li>INSERT: Add new data (e.g., INSERT INTO employees VALUES (1, 'John');).</li>
                <li>UPDATE: Modify existing data (e.g., UPDATE employees SET salary = 5000 WHERE id = 1;).</li>
                <li>DELETE: Remove data (e.g., DELETE FROM employees WHERE id = 1;).</li>
            </ul>

            <h6>8. Transactions</h6>
            <ul>
                <li>ACID Properties:</li>
                <ul>
                    <li>Atomicity: All operations succeed or fail together.</li>
                    <li>Consistency: Maintains a valid database state.</li>
                    <li>Isolation: Transactions do not interfere with each other.</li>
                    <li>Durability: Committed data is permanently saved.</li>
                </ul>
            </ul>

            <h6>9. Database Security</h6>
            <ul>
                <li>Authentication: Verifies user identity (e.g., via username and password).</li>
                <li>Authorization: Grants/restricts access using roles (e.g., GRANT, REVOKE).</li>
                <li>Encryption: Secures sensitive data using methods like AES and RSA.</li>
                <li>Auditing: Monitors and logs access for security and compliance.</li>
            </ul>

        `
    },
    java: {
        title: "Java Cheat Sheet",
        content: `
        <h6>1. Java Introduction</h6>
        <ul>
            <li>Java is a high-level, object-oriented programming language.</li>
            <li>Platform-independent due to the Java Virtual Machine (JVM).</li>
            <li>Widely used in web, mobile (especially Android), and enterprise applications.</li>
            <li>Latest stable version is Java 17 (as of 2023).</li>
        </ul>

        <h6>2. Java Features</h6>
        <ul>
            <li>Supports object-oriented programming (OOP).</li>
            <li>Platform independence using JVM.</li>
            <li>Strong memory management with automatic garbage collection.</li>
            <li>Built-in support for multithreading.</li>
            <li>Robust security features.</li>
        </ul>

        <h6>3. Java Variables</h6>
        <ul>
            <li>Java is statically typed: type must be declared before use.</li>
            <li>Three types of variables:</li>
            <ul>
                <li><strong>Local Variables</strong>: Declared inside methods.</li>
                <li><strong>Instance Variables</strong>: Declared inside a class but outside methods.</li>
                <li><strong>Static Variables</strong>: Shared across all objects of a class.</li>
            </ul>
            <li>Declaration syntax: <code>type variableName;</code></li>
        </ul>

        <h6>4. Java Data Types</h6>
        <ul>
            <li><strong>Primitive Types</strong>: <code>int</code>, <code>float</code>, <code>char</code>, <code>boolean</code>, etc.</li>
            <li>Stored directly in memory.</li>
            <li><strong>Reference Types</strong>: Objects and arrays.</li>
            <li>Store references (addresses) to memory locations.</li>
        </ul>

        <h6>5. Java Keywords</h6>
        <ul>
            <li>Reserved words with special meanings in Java.</li>
            <li>Examples: <code>class</code>, <code>public</code>, <code>static</code>, <code>void</code>, <code>new</code></li>
            <li>Cannot be used as variable or method names.</li>
            <li>Java has over 50 keywords.</li>
        </ul>

        <h6>6. Java Operators</h6>
        <ul>
            <li><strong>Arithmetic Operators</strong>: <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code></li>
            <li><strong>Relational Operators</strong>: <code>==</code>, <code>!=</code>, <code>></code>, <code><</code>, <code>>=</code>, <code><=</code></li>
            <li><strong>Logical Operators</strong>: <code>&&</code> (AND), <code>||</code> (OR), <code>!</code> (NOT)</li>
            <li><strong>Assignment Operators</strong>: <code>=</code>, <code>+=</code>, <code>-=</code>, etc.</li>
        </ul>

        <h6>7. Java Control Statements</h6>
        <ul>
            <li><strong>Conditional Statements</strong>:</li>
            <ul>
                <li><code>if-else</code></li>
                <li><code>switch-case</code></li>
            </ul>
            <li><strong>Looping Statements</strong>:</li>
            <ul>
                <li><code>for</code></li>
                <li><code>while</code></li>
                <li><code>do-while</code></li>
            </ul>
        </ul>

        <h6>8. Java Strings</h6>
        <ul>
            <li>Strings are immutable sequences of characters.</li>
            <li>Created using the <code>String</code> class.</li>
            <li>Common methods: <code>length()</code>, <code>charAt()</code>, <code>substring()</code></li>
            <li>String pooling improves memory efficiency.</li>
        </ul>

        <h6>9. Java Arrays</h6>
        <ul>
            <li>Fixed-size data structures that store elements of the same type.</li>
            <li>Uses zero-based indexing.</li>
            <li>Declaration example: <code>int[] numbers = new int[5];</code></li>
        </ul>

        <h6>10. Java Collections Framework</h6>
        <ul>
            <li><strong>List</strong>: Ordered and allows duplicates (e.g., <code>ArrayList</code>, <code>LinkedList</code>).</li>
            <li><strong>Set</strong>: Unordered and no duplicates (e.g., <code>HashSet</code>, <code>TreeSet</code>).</li>
            <li><strong>Map</strong>: Key-value pairs (e.g., <code>HashMap</code>, <code>TreeMap</code>).</li>
        </ul>

        <h6>11. Java Exception Handling</h6>
        <ul>
            <li><code>try-catch</code>: Catches and handles exceptions.</li>
            <li><code>finally</code>: Executes code regardless of exception occurrence.</li>
            <li><code>throw</code>: Manually throw an exception.</li>
            <li><code>throws</code>: Declare exceptions a method can throw.</li>
        </ul>

        <h6>12. Java Multithreading</h6>
        <ul>
            <li>Allows concurrent execution of two or more threads.</li>
            <li>Two ways to create threads:</li>
            <ul>
                <li>Extend the <code>Thread</code> class.</li>
                <li>Implement the <code>Runnable</code> interface.</li>
            </ul>
            <li>Synchronization ensures thread safety.</li>
        </ul>

        `
    },
    os: {
        title: "Operating System Cheat Sheet",
        content: `
        <h6>1. Operating System Introduction</h6>
        <ul>
            <li>An Operating System is system software that manages hardware and software resources.</li>
            <li>Core functions include:</li>
            <ul>
                <li>Process management</li>
                <li>Memory management</li>
                <li>File system management</li>
                <li>Device management</li>
                <li>Security and access control</li>
            </ul>
        </ul>

        <h6>2. Types of Operating Systems</h6>
        <ul>
            <li><strong>Batch OS</strong>: Processes are executed in groups without user interaction.</li>
            <li><strong>Time-Sharing OS</strong>: Allows multiple users to access the system simultaneously.</li>
            <li><strong>Distributed OS</strong>: Manages multiple computers as a single system over a network.</li>
            <li><strong>Real-Time OS</strong>: Provides immediate processing with minimal delays, used in embedded systems.</li>
        </ul>

        <h6>3. Processes in OS</h6>
        <ul>
            <li>A process is a program in execution and is the basic unit of work in an OS.</li>
            <li>Typical process states:</li>
            <ul>
                <li>New → Ready → Running → Waiting → Terminated</li>
            </ul>
            <li>Each process is represented by a <strong>Process Control Block (PCB)</strong> that stores information such as state, program counter, CPU registers, etc.</li>
        </ul>

        <h6>4. Threads in OS</h6>
        <ul>
            <li>Threads are lightweight subprocesses within a process.</li>
            <li>Benefits of threads:</li>
            <ul>
                <li>Less resource-intensive compared to full processes</li>
                <li>Allow concurrent execution, improving performance</li>
            </ul>
            <li>Types of threads:</li>
            <ul>
                <li>User-level threads</li>
                <li>Kernel-level threads</li>
            </ul>
        </ul>

        <h6>5. Memory Management</h6>
        <ul>
            <li>Handles allocation and deallocation of memory to processes.</li>
            <li>Key techniques:</li>
            <ul>
                <li><strong>Paging</strong>: Divides memory into fixed-size pages.</li>
                <li><strong>Segmentation</strong>: Divides memory into variable-size segments.</li>
                <li><strong>Virtual Memory</strong>: Uses disk space to simulate extra RAM.</li>
            </ul>
        </ul>

        <h6>6. File Systems</h6>
        <ul>
            <li>Organizes and stores files on storage devices.</li>
            <li>Common file systems include:</li>
            <ul>
                <li><strong>FAT</strong> (File Allocation Table)</li>
                <li><strong>NTFS</strong> (New Technology File System)</li>
                <li><strong>ext4</strong> (Linux file system)</li>
            </ul>
        </ul>

        <h6>7. Deadlocks</h6>
        <ul>
            <li>A state where multiple processes are blocked, each waiting for a resource held by another.</li>
            <li>Four necessary conditions for a deadlock:</li>
            <ul>
                <li>Mutual Exclusion</li>
                <li>Hold and Wait</li>
                <li>No Preemption</li>
                <li>Circular Wait</li>
            </ul>
            <li>Prevention techniques involve breaking one or more of these conditions.</li>
        </ul>

        <h6>8. Scheduling Algorithms</h6>
        <ul>
            <li>Used by the OS to decide the execution order of processes.</li>
            <li>Common scheduling algorithms:</li>
            <ul>
                <li><strong>FCFS</strong> (First-Come First-Served)</li>
                <li><strong>SJN</strong> (Shortest Job Next)</li>
                <li><strong>Round Robin</strong></li>
                <li><strong>Priority Scheduling</strong></li>
                <li><strong>Multilevel Queue Scheduling</strong></li>
            </ul>
        </ul>

        <h6>9. Virtual Memory</h6>
        <ul>
            <li>A memory management technique that uses disk space to extend physical RAM.</li>
            <li>Key concepts:</li>
            <ul>
                <li>Paging and use of page tables</li>
                <li>Page replacement algorithms like <strong>FIFO</strong>, <strong>LRU</strong></li>
                <li><strong>Thrashing</strong>: Too much paging reduces performance</li>
                <li><strong>Demand Paging</strong>: Pages loaded into memory only when needed</li>
            </ul>
        </ul>

        <h6>10. OS Security</h6>
        <ul>
            <li>Protects the operating system from internal and external threats.</li>
            <li>Key security measures:</li>
            <ul>
                <li>User authentication (e.g., passwords, biometrics)</li>
                <li>Access Control Lists (ACLs)</li>
                <li>Data encryption methods</li>
                <li>Firewalls and antivirus programs</li>
                <li>Regular updates and patches</li>
            </ul>
        </ul>
        `
    },
    dsa: {
        title: "Data Structures Cheat Sheet",
        content: `
        <h6>1. Data Structures Introduction</h6>
        <ul>
            <li>Organized way to store and manage data.</li>
            <li>Enables efficient data access and modification.</li>
            <li>Benefits:</li>
            <ul>
                <li>Improves algorithm performance</li>
                <li>Facilitates data manipulation</li>
                <li>Essential for handling large datasets</li>
            </ul>
        </ul>

        <h6>2. Types of Data Structures</h6>
        <ul>
            <li><strong>Linear Structures:</strong></li>
            <ul>
                <li>Arrays (fixed-size contiguous memory)</li>
                <li>Linked Lists (dynamic nodes with pointers)</li>
                <li>Stacks (LIFO principle)</li>
                <li>Queues (FIFO principle)</li>
            </ul>
            <li><strong>Non-Linear Structures:</strong></li>
            <ul>
                <li>Trees (hierarchical relationships)</li>
                <li>Graphs (network connections)</li>
                <li>Hash Tables (key-value pairs)</li>
            </ul>
        </ul>

        <h6>3. Arrays</h6>
        <ul>
            <li>Contiguous memory blocks.</li>
            <li>Fixed size (static).</li>
            <li>Operations:</li>
            <ul>
                <li>Random access: <code>O(1)</code></li>
                <li>Insertion/deletion: <code>O(n)</code></li>
            </ul>
            <li>Used for matrices, lookup tables.</li>
        </ul>

        <h6>4. Linked Lists</h6>
        <ul>
            <li>Dynamic node-based structure.</li>
            <li>Types:</li>
            <ul>
                <li>Singly Linked (one pointer)</li>
                <li>Doubly Linked (two pointers)</li>
                <li>Circular Linked (loop)</li>
            </ul>
            <li>Operations:</li>
            <ul>
                <li>Insertion/deletion: <code>O(1)</code></li>
                <li>Traversal: <code>O(n)</code></li>
            </ul>
        </ul>

        <h6>5. Stacks</h6>
        <ul>
            <li>LIFO (Last-In-First-Out) structure.</li>
            <li>Operations:</li>
            <ul>
                <li>Push (add)</li>
                <li>Pop (remove)</li>
                <li>Peek (view top)</li>
            </ul>
            <li>Applications:</li>
            <ul>
                <li>Function calls</li>
                <li>Undo operations</li>
                <li>Expression evaluation</li>
            </ul>
        </ul>

        <h6>6. Queues</h6>
        <ul>
            <li>FIFO (First-In-First-Out) structure.</li>
            <li>Operations:</li>
            <ul>
                <li>Enqueue (add)</li>
                <li>Dequeue (remove)</li>
                <li>Front (peek)</li>
            </ul>
            <li>Applications:</li>
            <ul>
                <li>Task scheduling</li>
                <li>Print spooling</li>
                <li>BFS algorithms</li>
            </ul>
        </ul>

        <h6>7. Trees</h6>
        <ul>
            <li>Hierarchical structure with root node.</li>
            <li>Types:</li>
            <ul>
                <li>Binary Trees (max 2 children)</li>
                <li>BST (ordered nodes)</li>
                <li>AVL / Red-Black Trees (self-balancing)</li>
            </ul>
            <li>Applications:</li>
            <ul>
                <li>File systems</li>
                <li>Database indexing</li>
                <li>Decision algorithms</li>
            </ul>
        </ul>

        <h6>8. Graphs</h6>
        <ul>
            <li>Network of nodes (vertices) and connections (edges).</li>
            <li>Types:</li>
            <ul>
                <li>Directed / Undirected</li>
                <li>Weighted / Unweighted</li>
            </ul>
            <li>Applications:</li>
            <ul>
                <li>Social networks</li>
                <li>GPS navigation</li>
                <li>Recommendation systems</li>
            </ul>
        </ul>

        <h6>9. Hash Tables</h6>
        <ul>
            <li>Key-value storage with hash function.</li>
            <li>Operations:</li>
            <ul>
                <li>Insert: <code>O(1)</code> average</li>
                <li>Delete: <code>O(1)</code> average</li>
                <li>Search: <code>O(1)</code> average</li>
            </ul>
            <li>Applications:</li>
            <ul>
                <li>Database indexing</li>
                <li>Caching</li>
                <li>Compiler symbol tables</li>
            </ul>
        </ul>
        `
    },
    c_programming: {
        title: "C Programming Cheat Sheet",
        content: `
        <h6>1. C Language Introduction</h6>
        <ul>
            <li>High-level, general-purpose programming language.</li>
            <li>Developed in 1972 by Dennis Ritchie.</li>
            <li>Key characteristics:</li>
            <ul>
                <li>Structured programming language</li>
                <li>Low-level memory access</li>
                <li>Efficient system programming</li>
            </ul>
            <li>Why learn C:</li>
            <ul>
                <li>Foundation for other languages</li>
                <li>Used in operating systems and embedded systems</li>
                <li>High performance and portability</li>
            </ul>
        </ul>

        <h6>2. Features of C</h6>
        <ul>
            <li>Simple and easy to learn.</li>
            <li>Efficient memory management.</li>
            <li>Structured programming support.</li>
            <li>Portable across platforms.</li>
            <li>Rich set of built-in operators.</li>
            <li>Extensible through functions and libraries.</li>
        </ul>

        <h6>3. C Variables</h6>
        <ul>
            <li>Variables are storage locations with specific data types.</li>
            <li>Types of variables:</li>
            <ul>
                <li>Local (function scope)</li>
                <li>Global (file scope)</li>
                <li>Static (persistent between function calls)</li>
            </ul>
            <li>Declaration syntax: <code>type variable_name;</code></li>
        </ul>

        <h6>4. C Data Types</h6>
        <ul>
            <li><strong>Basic Types:</strong></li>
            <ul>
                <li><code>int</code> (integer)</li>
                <li><code>float</code> (floating point)</li>
                <li><code>char</code> (character)</li>
                <li><code>double</code> (double precision)</li>
            </ul>
            <li><strong>Derived Types:</strong></li>
            <ul>
                <li>Arrays</li>
                <li>Pointers</li>
                <li>Structures</li>
                <li>Unions</li>
            </ul>
        </ul>

        <h6>5. C Operators</h6>
        <ul>
            <li><strong>Arithmetic:</strong> +, -, *, /, %</li>
            <li><strong>Relational:</strong> ==, !=, >, <, >=, <=</li>
            <li><strong>Logical:</strong> &&, ||, !</li>
            <li><strong>Bitwise:</strong> &, |, ^, ~, <<, >></li>
            <li><strong>Assignment:</strong> =, +=, -=, etc.</li>
        </ul>

        <h6>6. C Control Statements</h6>
        <ul>
            <li><strong>Conditional:</strong></li>
            <ul>
                <li>if-else</li>
                <li>switch-case</li>
            </ul>
            <li><strong>Loops:</strong></li>
            <ul>
                <li>for</li>
                <li>while</li>
                <li>do-while</li>
            </ul>
            <li><strong>Jump:</strong></li>
            <ul>
                <li>break</li>
                <li>continue</li>
                <li>goto</li>
                <li>return</li>
            </ul>
        </ul>

        <h6>7. C Functions</h6>
        <ul>
            <li>Functions are blocks of reusable code.</li>
            <li>Types:</li>
            <ul>
                <li>Standard library functions</li>
                <li>User-defined functions</li>
            </ul>
            <li>Components:</li>
            <ul>
                <li>Declaration</li>
                <li>Definition</li>
                <li>Call</li>
            </ul>
            <li>Supports recursion.</li>
        </ul>

        <h6>8. C Strings</h6>
        <ul>
            <li>Strings are character arrays terminated by null character (<code>'\0'</code>).</li>
            <li>Stored in contiguous memory.</li>
            <li>Common operations:</li>
            <ul>
                <li>Input/output</li>
                <li>Manipulation</li>
                <li>Comparison</li>
            </ul>
            <li>Standard library functions: <code>strlen()</code>, <code>strcpy()</code>, <code>strcat()</code></li>
        </ul>

        <h6>9. C Arrays</h6>
        <ul>
            <li>Arrays are collections of similar data items.</li>
            <li>Size is fixed at declaration time.</li>
            <li>Index starts at 0.</li>
            <li>Types of arrays:</li>
            <ul>
                <li>One-dimensional</li>
                <li>Multi-dimensional</li>
            </ul>
            <li>Used for matrices, strings, etc.</li>
        </ul>

        <h6>10. C Pointers</h6>
        <ul>
            <li>Pointers are variables that store memory addresses.</li>
            <li>Key concepts:</li>
            <ul>
                <li>Declaration: <code>type *ptr;</code></li>
                <li>Address-of operator: <code>&</code></li>
                <li>Dereference operator: <code>*</code></li>
            </ul>
            <li>Uses:</li>
            <ul>
                <li>Dynamic memory allocation</li>
                <li>Array handling</li>
                <li>Function arguments</li>
            </ul>
        </ul>

        <h6>11. C Structures</h6>
        <ul>
            <li>User-defined composite data types.</li>
            <li>Used to group variables of different types under one name.</li>
            <li>Syntax:</li>
            <pre><code>struct tag {
            type member1;
            type member2;
            ...
        };</code></pre>
            <li>Access members using the dot operator (<code>.</code>).</li>
        </ul>

        `
    }
};


/*################################################################*/
/*--------------------   Questions   -----------------------------*/
/*################################################################*/
const questions = {
    dbms: [
        {
            question: "What does DBMS stand for?",
            options: [
                "a) Data Backup Management System",
                "b) Database Management System",
                "c) Digital Business Management Software",
                "d) None of the above"
            ],
            answer: "b",
            hint: "It is used to manage databases efficiently.",
            explanation: "DBMS stands for Database Management System, which is software that manages and organizes data efficiently."
        },
        {
            question: "Which of the following is NOT a type of database model?",
            options: [
                "a) Hierarchical",
                "b) Network",
                "c) Relational",
                "d) Tree"
            ],
            answer: "d",
            hint: "Think about common database models used in industry.",
            explanation: "Tree is not a database model; Hierarchical, Network, and Relational are commonly used database models."
        },
        {
            question: "Which language is used to query databases?",
            options: [
                "a) SQL",
                "b) HTML",
                "c) C++",
                "d) Python"
            ],
            answer: "a",
            hint: "It is a standard language for relational databases.",
            explanation: "SQL (Structured Query Language) is used to query and manipulate relational databases."
        },
        {
            question: "Which component of DBMS is responsible for ensuring ACID properties?",
            options: [
                "a) Transaction Manager",
                "b) Data Dictionary",
                "c) Query Processor",
                "d) Storage Manager"
            ],
            answer: "a",
            hint: "Think about managing transactions properly.",
            explanation: "The Transaction Manager ensures ACID (Atomicity, Consistency, Isolation, Durability) properties in DBMS."
        },
        {
            question: "Which normal form ensures that there are no partial dependencies?",
            options: [
                "a) 1NF",
                "b) 2NF",
                "c) 3NF",
                "d) BCNF"
            ],
            answer: "b",
            hint: "It comes after the first normal form.",
            explanation: "2NF removes partial dependencies, meaning no non-prime attribute should depend on only a part of a candidate key."
        },
        {
            question: "Which SQL command is used to remove all records from a table but keep its structure?",
            options: [
                "a) DELETE",
                "b) DROP",
                "c) TRUNCATE",
                "d) REMOVE"
            ],
            answer: "c",
            hint: "It resets the table without deleting its schema.",
            explanation: "TRUNCATE removes all records but keeps the table structure intact, unlike DROP which removes the entire table."
        },
        {
            question: "Which of the following is a NoSQL database?",
            options: [
                "a) MySQL",
                "b) PostgreSQL",
                "c) MongoDB",
                "d) Oracle"
            ],
            answer: "c",
            hint: "It is a document-oriented NoSQL database.",
            explanation: "MongoDB is a NoSQL database that stores data in JSON-like format rather than traditional tables."
        },
        {
            question: "What is the role of an index in a database?",
            options: [
                "a) To store data",
                "b) To speed up data retrieval",
                "c) To enforce constraints",
                "d) To manage transactions"
            ],
            answer: "b",
            hint: "It improves query performance.",
            explanation: "An index is used to speed up data retrieval by allowing efficient searching in a table."
        },
        {
            question: "Which SQL clause is used to filter records based on a condition?",
            options: [
                "a) WHERE",
                "b) ORDER BY",
                "c) GROUP BY",
                "d) HAVING"
            ],
            answer: "a",
            hint: "It is used before the result is grouped or ordered.",
            explanation: "WHERE is used to filter records before they are grouped or sorted."
        },
        {
            question: "Which type of join returns only matching rows from both tables?",
            options: [
                "a) INNER JOIN",
                "b) LEFT JOIN",
                "c) RIGHT JOIN",
                "d) FULL JOIN"
            ],
            answer: "a",
            hint: "It includes only common records between tables.",
            explanation: "INNER JOIN returns only the rows that have matching values in both tables."
        },
        {
            question: "What is the purpose of a primary key in a database table?",
            options: [
                "a) To provide a default value for columns",
                "b) To uniquely identify each record in the table",
                "c) To establish relationships between tables",
                "d) Both b and c"
            ],
            answer: "d",
            hint: "Think about what makes each row unique.",
            explanation: "A primary key uniquely identifies each record and is used to establish relationships between tables."
        },
        {
            question: "Which SQL statement is used to add new data to a database?",
            options: [
                "a) ADD",
                "b) INSERT",
                "c) CREATE",
                "d) UPDATE"
            ],
            answer: "b",
            hint: "It begins with the letter 'I'.",
            explanation: "The INSERT statement is used to add new records to a table."
        },
        {
            question: "What does the SQL 'LIKE' operator do?",
            options: [
                "a) Compares two values for equality",
                "b) Searches for a specified pattern in a column",
                "c) Performs mathematical operations",
                "d) Joins multiple tables together"
            ],
            answer: "b",
            hint: "It's used with wildcard characters.",
            explanation: "The LIKE operator is used in WHERE clauses to search for a specified pattern in a column."
        },
        {
            question: "Which of these is NOT a valid SQL constraint?",
            options: [
                "a) UNIQUE",
                "b) NOT NULL",
                "c) CHECK",
                "d) VERIFY"
            ],
            answer: "d",
            hint: "Three of these are standard SQL constraints.",
            explanation: "VERIFY is not a valid SQL constraint. The valid constraints are UNIQUE, NOT NULL, CHECK, PRIMARY KEY, FOREIGN KEY, etc."
        },
        {
            question: "What is a view in SQL?",
            options: [
                "a) A physical copy of data from multiple tables",
                "b) A virtual table based on the result-set of a SQL statement",
                "c) A graphical representation of database schema",
                "d) A stored procedure that returns data"
            ],
            answer: "b",
            hint: "It's not physically stored data.",
            explanation: "A view is a virtual table that displays data from one or more tables without storing the data itself."
        },
        {
            question: "Which SQL function is used to count the number of rows?",
            options: [
                "a) SUM()",
                "b) COUNT()",
                "c) TOTAL()",
                "d) NUMBER()"
            ],
            answer: "b",
            hint: "It starts with 'C'.",
            explanation: "COUNT() is an aggregate function that returns the number of rows matching specified criteria."
        },
        {
            question: "What is the purpose of the GROUP BY clause?",
            options: [
                "a) To filter groups",
                "b) To sort the result set",
                "c) To group rows that have the same values",
                "d) To join tables together"
            ],
            answer: "c",
            hint: "It's often used with aggregate functions.",
            explanation: "GROUP BY groups rows that have the same values into summary rows, typically to perform aggregate functions on each group."
        },
        {
            question: "Which of these is a characteristic of a relational database?",
            options: [
                "a) Data is stored in documents",
                "b) Data is organized in tables with relationships",
                "c) Data has no predefined schema",
                "d) Data is stored in key-value pairs"
            ],
            answer: "b",
            hint: "Think about how tables relate to each other.",
            explanation: "Relational databases organize data into tables (relations) that can be linked based on data common to each."
        },
        {
            question: "What is a foreign key?",
            options: [
                "a) A key that uniquely identifies a record in a table",
                "b) A field that links to the primary key in another table",
                "c) A key that is used for encryption",
                "d) A special type of index"
            ],
            answer: "b",
            hint: "It creates relationships between tables.",
            explanation: "A foreign key is a field in one table that uniquely identifies a row in another table (via its primary key)."
        },
        {
            question: "Which SQL statement is used to modify existing data?",
            options: [
                "a) MODIFY",
                "b) ALTER",
                "c) UPDATE",
                "d) CHANGE"
            ],
            answer: "c",
            hint: "It begins with 'U'.",
            explanation: "The UPDATE statement is used to modify existing records in a table."
        }
        ],
        python: [
            {
                "question": "What is the output of `print(2 ** 3)` in Python?",
                "options": ["a) 6", "b) 8", "c) 9", "d) 16"],
                "answer": "b",
                "hint": "This operator is used for exponentiation.",
                "explanation": "`2 ** 3` means 2 raised to the power of 3, which equals 8."
            },
            {
                "question": "Which data type is immutable in Python?",
                "options": ["a) List", "b) Dictionary", "c) String", "d) Set"],
                "answer": "c",
                "hint": "This type cannot be changed after creation.",
                "explanation": "Strings in Python are immutable, meaning they cannot be modified after creation."
            },
            {
                "question": "Which of these is used to take user input in Python?",
                "options": ["a) input()", "b) scan()", "c) read()", "d) gets()"],
                "answer": "a",
                "hint": "This function returns a string from the user.",
                "explanation": "`input()` is the standard function for taking user input in Python."
            },
            {
                "question": "What will `type([])` return in Python?",
                "options": ["a) list", "b) tuple", "c) dictionary", "d) set"],
                "answer": "a",
                "hint": "Square brackets `[]` represent this data structure.",
                "explanation": "An empty list in Python is represented as `[]`, and its type is `list`."
            },
            {
                "question": "Which keyword is used to define a function in Python?",
                "options": ["a) function", "b) define", "c) def", "d) func"],
                "answer": "c",
                "hint": "It is a short form of 'define'.",
                "explanation": "Functions in Python are defined using the `def` keyword."
            },
            {
                "question": "What is the output of `bool('False')` in Python?",
                "options": ["a) True", "b) False", "c) None", "d) Error"],
                "answer": "a",
                "hint": "Non-empty strings in Python are truthy.",
                "explanation": "`bool('False')` returns `True` because any non-empty string is considered `True` in Python."
            },
            {
                "question": "Which of these is NOT a valid Python variable name?",
                "options": ["a) my_var", "b) 2var", "c) _variable", "d) var_123"],
                "answer": "b",
                "hint": "Variable names cannot start with a digit.",
                "explanation": "In Python, variable names cannot start with a number, making `2var` invalid."
            },
            {
                "question": "Which module is used for regular expressions in Python?",
                "options": ["a) regex", "b) re", "c) reg", "d) match"],
                "answer": "b",
                "hint": "It has just two letters.",
                "explanation": "The `re` module provides functions for working with regular expressions."
            },
            {
                "question": "What is the output of `len({'a': 1, 'b': 2, 'c': 3})`?",
                "options": ["a) 1", "b) 2", "c) 3", "d) 6"],
                "answer": "c",
                "hint": "It returns the number of keys in a dictionary.",
                "explanation": "The `len()` function returns the number of keys in a dictionary, which is 3."
            },
            {
                "question": "Which Python data type is unordered and does not allow duplicate values?",
                "options": ["a) List", "b) Tuple", "c) Set", "d) Dictionary"],
                "answer": "c",
                "hint": "This data structure is similar to mathematical sets.",
                "explanation": "A `set` in Python is unordered and does not allow duplicate values."
            },
            {
                "question": "Which keyword is used to exit a loop prematurely?",
                "options": ["a) exit", "b) break", "c) return", "d) continue"],
                "answer": "b",
                "hint": "It stops the loop immediately.",
                "explanation": "The `break` statement is used to exit a loop prematurely."
            },
            {
                "question": "Which function is used to open a file in Python?",
                "options": ["a) read()", "b) write()", "c) open()", "d) file()"],
                "answer": "c",
                "hint": "This function can open files in different modes.",
                "explanation": "The `open()` function is used to open files in Python."
            },
            {
                "question": "Which of these is NOT a valid way to create a list?",
                "options": [
                    "a) list()",
                    "b) []",
                    "c) list([])",
                    "d) new list()"
                ],
                "answer": "d",
                "hint": "Python does not use `new` for object creation.",
                "explanation": "Python does not support `new list()`, unlike some other languages."
            },
            {
                "question": "Which of these is NOT a built-in Python function?",
                "options": ["a) print()", "b) len()", "c) sqrt()", "d) append()"],
                "answer": "d",
                "hint": "This is a method, not a function.",
                "explanation": "`append()` is a list method, not a built-in function."
            },
            {
                "question": "How do you comment multiple lines in Python?",
                "options": [
                    "a) /* */",
                    "b) //",
                    "c) ''' '''",
                    "d) <!-- -->"
                ],
                "answer": "c",
                "hint": "Python uses triple quotes for multi-line strings and comments.",
                "explanation": "Triple single or double quotes can be used for multi-line comments in Python."
            },
            {
                "question": "Which of these statements will NOT raise an error in Python?",
                "options": [
                    "a) print(10 / 0)",
                    "b) int('abc')",
                    "c) print('Hello')",
                    "d) open('nonexistent.txt').read()"
                ],
                "answer": "c",
                "hint": "It's a simple print statement.",
                "explanation": "All other statements cause errors, but `print('Hello')` works fine."
            },
            {
                "question": "Which function is used to find the data type of a variable?",
                "options": ["a) typeof()", "b) gettype()", "c) type()", "d) datatype()"],
                "answer": "c",
                "hint": "This function is commonly used to check object types.",
                "explanation": "The `type()` function returns the type of a variable in Python."
            },
            {
                "question": "Which of these is used to handle exceptions in Python?",
                "options": ["a) try-except", "b) if-else", "c) switch-case", "d) error-catch"],
                "answer": "a",
                "hint": "Python does not have switch-case.",
                "explanation": "`try-except` is used to handle exceptions in Python."
            },
            {
                "question": "Which function is used to get the length of a string?",
                "options": ["a) size()", "b) length()", "c) len()", "d) count()"],
                "answer": "c",
                "hint": "This function is also used for lists and dictionaries.",
                "explanation": "`len()` is used to get the length of strings, lists, and other sequences in Python."
            },
            {
                "question": "Which of these is used to create an empty set in Python?",
                "options": ["a) {}", "b) set()", "c) []", "d) set([])"],
                "answer": "b",
                "hint": "Curly brackets `{}` create dictionaries by default.",
                "explanation": "`set()` is used to create an empty set in Python."
            }
        ],
    java: [
        {
            question: "Which of these is NOT a feature of Java?",
            options: [
                "a) Platform Independence",
                "b) Object-Oriented",
                "c) Pointer Arithmetic",
                "d) Multithreading"
            ],
            answer: "c",
            hint: "Java is known for not having this C/C++ feature.",
            explanation: "Java doesn't support pointer arithmetic for security reasons."
        },
        {
            question: "What is the default value of a boolean variable in Java?",
            options: ["a) true", "b) false", "c) null", "d) 0"],
            answer: "b",
            hint: "Think about default primitive values.",
            explanation: "boolean defaults to false, just like other primitives have defaults."
        },
        {
            question: "Which keyword is used to define a constant in Java?",
            options: ["a) static", "b) final", "c) const", "d) immutable"],
            answer: "b",
            hint: "This keyword prevents reassignment of variables.",
            explanation: "The `final` keyword is used to declare constants in Java."
        },
        {
            question: "Which of these is a valid way to start a thread in Java?",
            options: [
                "a) Extending the Thread class",
                "b) Implementing the Runnable interface",
                "c) Both a and b",
                "d) None of the above"
            ],
            answer: "c",
            hint: "There are two common ways to create a thread.",
            explanation: "A thread can be started by extending `Thread` or implementing `Runnable`."
        },
        {
            question: "What is the size of an int in Java?",
            options: ["a) 16 bits", "b) 32 bits", "c) 64 bits", "d) Depends on the system"],
            answer: "b",
            hint: "It is fixed, unlike in C/C++.",
            explanation: "Java's `int` type is always 32 bits, regardless of platform."
        },
        {
            question: "Which class is the parent of all Java classes?",
            options: ["a) Object", "b) Class", "c) Base", "d) Super"],
            answer: "a",
            hint: "Every class in Java directly or indirectly inherits from this class.",
            explanation: "The `Object` class is the root of Java's class hierarchy."
        },
        {
            question: "Which keyword is used to prevent method overriding?",
            options: ["a) static", "b) final", "c) private", "d) abstract"],
            answer: "b",
            hint: "This keyword ensures a method cannot be modified by subclasses.",
            explanation: "The `final` keyword prevents method overriding in Java."
        },
        {
            question: "Which exception is thrown when a division by zero occurs in Java?",
            options: [
                "a) ArithmeticException",
                "b) NumberFormatException",
                "c) NullPointerException",
                "d) IOException"
            ],
            answer: "a",
            hint: "It's a mathematical error.",
            explanation: "Java throws an `ArithmeticException` for division by zero."
        },
        {
            question: "Which Java access modifier makes a member accessible within the same package?",
            options: ["a) private", "b) protected", "c) default", "d) public"],
            answer: "c",
            hint: "When no access modifier is specified, this is the default.",
            explanation: "The default access modifier allows package-level visibility."
        },
        {
            question: "Which collection class maintains elements in insertion order?",
            options: ["a) HashSet", "b) TreeSet", "c) LinkedHashSet", "d) PriorityQueue"],
            answer: "c",
            hint: "It extends HashSet but preserves order.",
            explanation: "`LinkedHashSet` maintains insertion order, unlike `HashSet`."
        },
        {
            question: "Which of these is NOT a wrapper class in Java?",
            options: ["a) Integer", "b) Float", "c) Character", "d) String"],
            answer: "d",
            hint: "This class is not used to wrap a primitive type.",
            explanation: "`String` is not a wrapper class; it's a built-in immutable class."
        },
        {
            question: "Which statement is used to exit a loop in Java?",
            options: ["a) exit", "b) break", "c) return", "d) stop"],
            answer: "b",
            hint: "It is commonly used inside loops and switch cases.",
            explanation: "The `break` statement exits the current loop immediately."
        },
        {
            question: "Which data structure follows the LIFO principle?",
            options: ["a) Queue", "b) Stack", "c) LinkedList", "d) Tree"],
            answer: "b",
            hint: "It follows 'Last In, First Out' order.",
            explanation: "A `Stack` is a LIFO data structure."
        },
        {
            question: "What is the return type of the `hashCode()` method in Java?",
            options: ["a) int", "b) long", "c) String", "d) Object"],
            answer: "a",
            hint: "It returns a numeric value used for hashing.",
            explanation: "The `hashCode()` method returns an `int` value."
        },
        {
            question: "Which of these is true about Java interfaces?",
            options: [
                "a) They can have method implementations.",
                "b) They support multiple inheritance.",
                "c) They cannot have static methods.",
                "d) They cannot have private methods."
            ],
            answer: "b",
            hint: "Unlike classes, interfaces support this feature.",
            explanation: "Java interfaces support multiple inheritance, unlike classes."
        },
        {
            question: "What is the superclass of all exception classes in Java?",
            options: ["a) Exception", "b) Throwable", "c) Error", "d) RuntimeException"],
            answer: "b",
            hint: "It is the root of the exception hierarchy.",
            explanation: "`Throwable` is the superclass of all exceptions and errors."
        },
        {
            question: "Which of these is NOT a valid Java keyword?",
            options: ["a) synchronized", "b) volatile", "c) typedef", "d) transient"],
            answer: "c",
            hint: "This keyword exists in C but not in Java.",
            explanation: "`typedef` is a C keyword and does not exist in Java."
        },
        {
            question: "What is the primary purpose of the `super` keyword in Java?",
            options: [
                "a) To call a superclass constructor",
                "b) To create a new object",
                "c) To prevent inheritance",
                "d) To implement an interface"
            ],
            answer: "a",
            hint: "It is used when referring to parent class members.",
            explanation: "The `super` keyword allows access to superclass members and constructors."
        },
        {
            question: "Which package contains the `Scanner` class in Java?",
            options: [
                "a) java.util",
                "b) java.io",
                "c) java.lang",
                "d) java.net"
            ],
            answer: "a",
            hint: "It belongs to a package that includes collections and utility classes.",
            explanation: "The `Scanner` class is part of the `java.util` package."
        },
        {
            question: "Which of these is NOT a valid Java identifier?",
            options: [
                "a) myVariable",
                "b) _123var",
                "c) 7days",
                "d) $amount"
            ],
            answer: "c",
            hint: "Java identifiers cannot start with a digit.",
            explanation: "`7days` is invalid because Java identifiers must not start with a number (though they can contain digits)."
        }
    ],
    operating_system: [
        {
            "question": "What is the main purpose of an operating system?",
            "options": [
                "a) To make computer hardware usable",
                "b) To provide user interface",
                "c) To manage computer resources",
                "d) All of the above"
            ],
            "answer": "d",
            "hint": "OS has multiple fundamental purposes.",
            "explanation": "An OS manages hardware, provides UI, and allocates resources."
        },
        {
            "question": "Which of these is an example of a real-time operating system?",
            "options": [
                "a) Windows 10",
                "b) macOS",
                "c) Linux",
                "d) VxWorks"
            ],
            "answer": "d",
            "hint": "It is commonly used in embedded systems.",
            "explanation": "VxWorks is a real-time operating system used in embedded applications."
        },
        {
            "question": "Which of these is NOT a type of operating system?",
            "options": [
                "a) Batch OS",
                "b) Multiprogramming OS",
                "c) Distributed OS",
                "d) Firewall OS"
            ],
            "answer": "d",
            "hint": "This term relates to network security, not OS types.",
            "explanation": "There is no 'Firewall OS'; firewalls are security mechanisms."
        },
        {
            "question": "Which part of the OS is responsible for process scheduling?",
            "options": [
                "a) Kernel",
                "b) File System",
                "c) Shell",
                "d) UI"
            ],
            "answer": "a",
            "hint": "It is the core of the OS.",
            "explanation": "The kernel handles process scheduling and other low-level functions."
        },
        {
            "question": "Which memory management scheme does NOT require contiguous memory allocation?",
            "options": [
                "a) Paging",
                "b) Segmentation",
                "c) Contiguous Allocation",
                "d) Both a and b"
            ],
            "answer": "d",
            "hint": "These methods allow flexible memory allocation.",
            "explanation": "Paging and segmentation do not require contiguous memory."
        },
        {
            "question": "Which of these is NOT a CPU scheduling algorithm?",
            "options": [
                "a) FIFO",
                "b) Round Robin",
                "c) Shortest Job Next",
                "d) LRU"
            ],
            "answer": "d",
            "hint": "It is a page replacement algorithm.",
            "explanation": "LRU (Least Recently Used) is for page replacement, not CPU scheduling."
        },
        {
            "question": "What is the role of the bootloader in an OS?",
            "options": [
                "a) Manages RAM allocation",
                "b) Loads the OS into memory",
                "c) Handles process scheduling",
                "d) Manages files and directories"
            ],
            "answer": "b",
            "hint": "It is the first step in OS startup.",
            "explanation": "The bootloader loads the OS into memory when a computer starts."
        },
        {
            "question": "Which of these is a characteristic of a microkernel?",
            "options": [
                "a) Large in size",
                "b) Runs most services in kernel mode",
                "c) Runs minimal functionality in kernel mode",
                "d) Does not support multitasking"
            ],
            "answer": "c",
            "hint": "It is designed for minimalism and stability.",
            "explanation": "A microkernel keeps most OS services in user mode for better stability."
        },
        {
            "question": "Which scheduling algorithm gives priority to the shortest task first?",
            "options": [
                "a) FCFS",
                "b) Round Robin",
                "c) SJF",
                "d) Priority Scheduling"
            ],
            "answer": "c",
            "hint": "It focuses on task duration.",
            "explanation": "SJF (Shortest Job First) selects the shortest task to execute next."
        },
        {
            "question": "Which of these is NOT an advantage of a distributed OS?",
            "options": [
                "a) Resource sharing",
                "b) Faster execution",
                "c) Increased security",
                "d) Increased complexity"
            ],
            "answer": "c",
            "hint": "Distributed systems have security challenges.",
            "explanation": "A distributed OS increases complexity and has security challenges."
        },
        {
            "question": "What is the main purpose of virtual memory?",
            "options": [
                "a) Increase RAM",
                "b) Expand storage capacity",
                "c) Use secondary storage as extra memory",
                "d) Improve processor speed"
            ],
            "answer": "c",
            "hint": "It allows running large programs with limited RAM.",
            "explanation": "Virtual memory uses disk storage as an extension of RAM."
        },
        {
            "question": "Which process state means the process is waiting for an event?",
            "options": [
                "a) Ready",
                "b) Running",
                "c) Waiting",
                "d) Terminated"
            ],
            "answer": "c",
            "hint": "It is neither running nor ready.",
            "explanation": "The 'Waiting' state means the process is waiting for an event (like I/O)."
        },
        {
            "question": "Which of these is an example of a deadlock prevention technique?",
            "options": [
                "a) Banker's Algorithm",
                "b) Preemptive Scheduling",
                "c) Avoiding mutual exclusion",
                "d) Interrupts"
            ],
            "answer": "c",
            "hint": "Deadlocks require multiple conditions to occur.",
            "explanation": "Avoiding mutual exclusion prevents deadlocks by allowing resource sharing."
        },
        {
            "question": "Which of these best describes a monolithic kernel?",
            "options": [
                "a) Minimalistic kernel with external services",
                "b) All services run in kernel mode",
                "c) Uses microservices for OS functions",
                "d) No kernel involvement in OS operations"
            ],
            "answer": "b",
            "hint": "It has all services built into it.",
            "explanation": "A monolithic kernel runs all OS services in kernel mode."
        },
        {
            "question": "Which of these is NOT a function of an operating system?",
            "options": [
                "a) Process management",
                "b) Memory management",
                "c) User authentication",
                "d) Application development"
            ],
            "answer": "d",
            "hint": "The OS does not create software.",
            "explanation": "OS manages resources, but application development is done by programmers."
        },
        {
            "question": "Which of these OS types allows multiple users to access the system simultaneously?",
            "options": [
                "a) Single-user OS",
                "b) Multi-user OS",
                "c) Embedded OS",
                "d) Real-time OS"
            ],
            "answer": "b",
            "hint": "It is designed for shared access.",
            "explanation": "A multi-user OS allows multiple users to work on the system at the same time."
        },
        {
            "question": "What does the term 'thrashing' refer to in OS?",
            "options": [
                "a) A virus attack",
                "b) Excessive swapping of processes between RAM and disk",
                "c) CPU overheating",
                "d) Inefficient disk usage"
            ],
            "answer": "b",
            "hint": "It slows down system performance.",
            "explanation": "Thrashing happens when excessive paging reduces system performance."
        },
        {
            "question": "Which of these file systems is used in Windows?",
            "options": [
                "a) NTFS",
                "b) ext4",
                "c) FAT32",
                "d) Both a and c"
            ],
            "answer": "d",
            "hint": "Windows supports multiple file systems.",
            "explanation": "Windows supports NTFS and FAT32 file systems."
        },
        {
            "question": "Which OS component interacts directly with hardware?",
            "options": [
                "a) Shell",
                "b) Kernel",
                "c) File System",
                "d) User Interface"
            ],
            "answer": "b",
            "hint": "It is the core of the OS.",
            "explanation": "The kernel directly interacts with hardware to manage resources."
        }
    ],
    data_structures: [
        {
            "question": "Which data structure uses LIFO principle?",
            "options": ["a) Queue", "b) Stack", "c) Array", "d) Tree"],
            "answer": "b",
            "hint": "Think about how items are added/removed.",
            "explanation": "Stack uses Last-In-First-Out (LIFO) principle."
        },
        {
            "question": "Which of these data structures follows FIFO?",
            "options": ["a) Stack", "b) Queue", "c) Graph", "d) Tree"],
            "answer": "b",
            "hint": "Think about how a line works in real life.",
            "explanation": "Queue follows First-In-First-Out (FIFO) principle."
        },
        {
            "question": "Which data structure is used for implementing recursion?",
            "options": ["a) Queue", "b) Stack", "c) Heap", "d) Linked List"],
            "answer": "b",
            "hint": "Function calls are stored in this structure.",
            "explanation": "Stack is used for function calls and recursion."
        },
        {
            "question": "Which of these is NOT a linear data structure?",
            "options": ["a) Stack", "b) Queue", "c) Graph", "d) Array"],
            "answer": "c",
            "hint": "It has a complex structure with nodes and edges.",
            "explanation": "Graph is a non-linear data structure."
        },
        {
            "question": "What is the worst-case time complexity of searching in an unsorted array?",
            "options": ["a) O(1)", "b) O(n)", "c) O(log n)", "d) O(n^2)"],
            "answer": "b",
            "hint": "You may have to check every element.",
            "explanation": "In an unsorted array, searching requires checking each element, leading to O(n) complexity."
        },
        {
            "question": "Which data structure is best suited for implementing a priority queue?",
            "options": ["a) Stack", "b) Queue", "c) Heap", "d) Linked List"],
            "answer": "c",
            "hint": "It is optimized for quick retrieval of the highest priority element.",
            "explanation": "A heap efficiently manages a priority queue."
        },
        {
            "question": "Which of these is NOT a type of tree traversal?",
            "options": ["a) Inorder", "b) Preorder", "c) Postorder", "d) Reverseorder"],
            "answer": "d",
            "hint": "There are three standard traversal techniques.",
            "explanation": "Reverseorder is not a standard tree traversal method."
        },
        {
            "question": "Which data structure is commonly used to implement graphs?",
            "options": ["a) Adjacency Matrix", "b) Adjacency List", "c) Both a and b", "d) None of the above"],
            "answer": "c",
            "hint": "There are two main ways to represent graphs.",
            "explanation": "Graphs are represented using adjacency matrices or adjacency lists."
        },
        {
            "question": "What is the main advantage of a linked list over an array?",
            "options": ["a) Fast access time", "b) Efficient memory usage", "c) Less memory overhead", "d) Static size"],
            "answer": "b",
            "hint": "Think about dynamic memory allocation.",
            "explanation": "Linked lists dynamically allocate memory, avoiding wastage seen in arrays."
        },
        {
            "question": "Which of these is NOT a type of linked list?",
            "options": ["a) Singly linked list", "b) Doubly linked list", "c) Circular linked list", "d) Triply linked list"],
            "answer": "d",
            "hint": "There are three standard linked list types.",
            "explanation": "A triply linked list is not a standard linked list type."
        },
        {
            "question": "Which sorting algorithm has an average case time complexity of O(n log n)?",
            "options": ["a) Bubble Sort", "b) Insertion Sort", "c) Quick Sort", "d) Selection Sort"],
            "answer": "c",
            "hint": "It is a divide and conquer algorithm.",
            "explanation": "Quick Sort has an average complexity of O(n log n)."
        },
        {
            "question": "Which data structure is commonly used for implementing an undo feature?",
            "options": ["a) Queue", "b) Stack", "c) Linked List", "d) Tree"],
            "answer": "b",
            "hint": "It follows LIFO, making it suitable for undo operations.",
            "explanation": "Stack is used to implement undo functionality in applications."
        },
        {
            "question": "Which of these operations has O(1) time complexity in a hash table?",
            "options": ["a) Search", "b) Insertion", "c) Deletion", "d) All of the above"],
            "answer": "d",
            "hint": "Hashing provides constant-time operations in ideal cases.",
            "explanation": "Hash tables provide O(1) average time complexity for insertion, search, and deletion."
        },
        {
            "question": "Which tree is balanced by maintaining a height difference of at most 1 between subtrees?",
            "options": ["a) Binary Search Tree", "b) AVL Tree", "c) B-Tree", "d) Heap"],
            "answer": "b",
            "hint": "It was named after its inventors Adelson-Velsky and Landis.",
            "explanation": "AVL Tree maintains balance by ensuring a height difference of at most 1."
        },
        {
            "question": "Which of these data structures is best for implementing BFS (Breadth-First Search)?",
            "options": ["a) Stack", "b) Queue", "c) Heap", "d) Linked List"],
            "answer": "b",
            "hint": "BFS processes nodes level by level.",
            "explanation": "Queue is used to implement BFS as it follows FIFO."
        },
        {
            "question": "Which data structure is used to implement a call stack?",
            "options": ["a) Queue", "b) Stack", "c) Linked List", "d) Hash Table"],
            "answer": "b",
            "hint": "Function calls follow LIFO.",
            "explanation": "Stack is used to implement a call stack for function execution."
        },
        {
            "question": "Which of these algorithms is NOT a comparison-based sorting algorithm?",
            "options": ["a) Merge Sort", "b) Quick Sort", "c) Radix Sort", "d) Heap Sort"],
            "answer": "c",
            "hint": "It sorts by processing digits individually.",
            "explanation": "Radix Sort is not comparison-based; it sorts numbers digit by digit."
        },
        {
            "question": "What is the maximum number of children a node can have in a binary tree?",
            "options": ["a) 1", "b) 2", "c) 3", "d) Unlimited"],
            "answer": "b",
            "hint": "Each node can have at most two children.",
            "explanation": "A binary tree has at most two children per node."
        },
        {
            "question": "Which of these data structures provides the best time complexity for searching?",
            "options": ["a) Unsorted Array", "b) Sorted Array", "c) Hash Table", "d) Linked List"],
            "answer": "c",
            "hint": "It uses key-value pairs for quick lookup.",
            "explanation": "Hash tables offer O(1) average time complexity for search operations."
        }
    ],
    c: [
        {
            "question": "What is the correct syntax for a function prototype in C?",
            "options": [
                "a) functionName()",
                "b) returnType functionName(parameters);",
                "c) def functionName():",
                "d) functionName: returnType"
            ],
            "answer": "b",
            "hint": "C requires explicit return types.",
            "explanation": "C function prototypes specify return type, name, and parameters."
        },
        {
            "question": "Which of these is NOT a valid variable type in C?",
            "options": ["a) int", "b) float", "c) string", "d) char"],
            "answer": "c",
            "hint": "C does not have a built-in string type.",
            "explanation": "C uses character arrays or pointers for strings, not a built-in 'string' type."
        },
        {
            "question": "What will `sizeof(int)` return on most 32-bit systems?",
            "options": ["a) 2", "b) 4", "c) 8", "d) 16"],
            "answer": "b",
            "hint": "Think about memory allocation for integers.",
            "explanation": "On a 32-bit system, an integer is usually 4 bytes."
        },
        {
            "question": "Which operator is used to access the value at a memory address?",
            "options": ["a) &", "b) *", "c) ->", "d) %"],
            "answer": "b",
            "hint": "It is also used in pointer dereferencing.",
            "explanation": "The `*` operator is used to dereference a pointer and access the value at the memory address."
        },
        {
            "question": "Which header file is required for input and output operations in C?",
            "options": ["a) stdio.h", "b) conio.h", "c) stdlib.h", "d) iostream"],
            "answer": "a",
            "hint": "It contains printf and scanf functions.",
            "explanation": "`stdio.h` is required for standard input and output operations in C."
        },
        {
            "question": "What is the default return type of a function if not specified?",
            "options": ["a) void", "b) int", "c) char", "d) float"],
            "answer": "b",
            "hint": "C assumes this type by default.",
            "explanation": "If no return type is specified, C assumes `int` as the default."
        },
        {
            "question": "Which loop is guaranteed to execute at least once?",
            "options": ["a) for", "b) while", "c) do-while", "d) None"],
            "answer": "c",
            "hint": "The condition is checked after execution.",
            "explanation": "The `do-while` loop executes at least once because the condition is checked at the end."
        },
        {
            "question": "Which of these functions is used to dynamically allocate memory in C?",
            "options": ["a) malloc()", "b) alloc()", "c) memory()", "d) new()"],
            "answer": "a",
            "hint": "It is declared in `stdlib.h`.",
            "explanation": "The `malloc()` function allocates dynamic memory in C."
        },
        {
            "question": "What will be the output of `printf(\"%d\", 5/2);`?",
            "options": ["a) 2", "b) 2.5", "c) 3", "d) 5"],
            "answer": "a",
            "hint": "Integer division truncates decimal values.",
            "explanation": "Integer division in C results in `2`, as it truncates the decimal part."
        },
        {
            "question": "Which keyword is used to prevent a variable from being modified?",
            "options": ["a) static", "b) const", "c) volatile", "d) extern"],
            "answer": "b",
            "hint": "It ensures the value remains constant.",
            "explanation": "The `const` keyword makes a variable read-only."
        },
        {
            "question": "What does `return 0;` signify in the `main()` function?",
            "options": [
                "a) Program ended successfully",
                "b) Program encountered an error",
                "c) Nothing",
                "d) It restarts the program"
            ],
            "answer": "a",
            "hint": "It is a standard return value in `main`.",
            "explanation": "Returning 0 from `main()` indicates successful program execution."
        },
        {
            "question": "Which of these is NOT a storage class in C?",
            "options": ["a) auto", "b) register", "c) global", "d) extern"],
            "answer": "c",
            "hint": "C does not use this keyword for storage class.",
            "explanation": "C does not have a `global` storage class; global variables are defined outside functions."
        },
        {
            "question": "Which of the following is true about arrays in C?",
            "options": [
                "a) They can store multiple data types",
                "b) They have a fixed size",
                "c) They grow dynamically",
                "d) They can only be declared with pointers"
            ],
            "answer": "b",
            "hint": "Array size must be known at compile-time.",
            "explanation": "Arrays in C have a fixed size that must be declared initially."
        },
        {
            "question": "Which of these functions is used to copy a string?",
            "options": ["a) strcpy()", "b) strcat()", "c) strcmp()", "d) strlen()"],
            "answer": "a",
            "hint": "It is defined in `string.h`.",
            "explanation": "`strcpy()` is used to copy a string from one location to another."
        },
        {
            "question": "What will `printf(\"%c\", 'A' + 1);` print?",
            "options": ["a) A", "b) B", "c) 66", "d) Error"],
            "answer": "b",
            "hint": "Character arithmetic follows ASCII values.",
            "explanation": "Adding 1 to 'A' (ASCII 65) results in 'B' (ASCII 66)."
        },
        {
            "question": "Which of these is NOT a valid identifier in C?",
            "options": ["a) _var1", "b) int", "c) variable123", "d) myVar"],
            "answer": "b",
            "hint": "Reserved words cannot be used as variable names.",
            "explanation": "`int` is a keyword and cannot be used as an identifier."
        },
        {
            "question": "What will be the output of `printf(\"%d\", sizeof(double));` on a 64-bit system?",
            "options": ["a) 4", "b) 8", "c) 16", "d) 32"],
            "answer": "b",
            "hint": "Double precision requires more memory.",
            "explanation": "On a 64-bit system, `double` typically occupies 8 bytes."
        },
        {
            "question": "Which of these statements is used to terminate a loop immediately?",
            "options": ["a) exit()", "b) break", "c) continue", "d) return"],
            "answer": "b",
            "hint": "It stops the loop without checking the condition.",
            "explanation": "The `break` statement is used to exit a loop immediately."
        },
        {
            "question": "Which of the following is true about pointer arithmetic?",
            "options": [
                "a) Adding an integer to a pointer moves it by that number of bytes",
                "b) Adding an integer to a pointer moves it by that number of elements",
                "c) Subtracting a pointer from another gives an absolute value",
                "d) Multiplication of pointers is allowed"
            ],
            "answer": "b",
            "hint": "Pointer arithmetic considers data type size.",
            "explanation": "Adding an integer to a pointer moves it by that number of elements, not bytes."
        }
    ]    
};




/*################################################################*/
/*--------------------   Quiz JavaScript   -----------------------*/
/*################################################################*/
const pageToSubject = {
    'dbmsquiz.html': 'dbms',
    'dbmsquiz': 'dbms', // in case .html is omitted
    'pythonquiz.html': 'python',
    'pythonquiz': 'python',
    'javaquiz.html': 'java',
    'javaquiz': 'java',
    'osquiz.html': 'operating_system',
    'osquiz': 'operating_system',
    'dsquiz.html': 'data_structures',
    'dsquiz': 'data_structures',
    'cquiz.html': 'c',
    'cquiz': 'c'
};
function getCurrentPage() {
    // Get the full path
    const path = window.location.pathname.toLowerCase();
    
    // Extract just the filename
    const filename = path.split('/').pop();
    
    // Handle cases where the path might end with a slash
    if (!filename || filename === '/') {
        return 'dbmsquiz.html'; // default
    }
    
    return filename;
}
const currentPage = getCurrentPage();
console.log('Current page:', currentPage);
const subject = pageToSubject[currentPage] || 'dbms';
console.log('Mapped subject:', subject);
const currentQuestions = questions[subject];
const totalQuestions = currentQuestions.length;
let currentQuestionIndex = 0;
let score = 0;
let timer;
// Shuffle questions
function shuffleQuestions() {
    for (let i = currentQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [currentQuestions[i], currentQuestions[j]] = [currentQuestions[j], currentQuestions[i]];
    }
}
// Start the quiz
function startQuiz() {
    shuffleQuestions();
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('quizResult').innerHTML = '';
    document.getElementById('restartButton').style.display = 'none';
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('hint').style.display = 'none';
    document.getElementById('explanation').innerHTML = '';
    startTimer();
    displayQuestion();
}
// Display current question
function displayQuestion() {
    const quizForm = document.getElementById('quizForm');
    quizForm.innerHTML = '';
    document.getElementById('hint').style.display = 'none';
    document.getElementById('explanation').innerHTML = '';
    if (currentQuestionIndex < totalQuestions) {
        const question = currentQuestions[currentQuestionIndex];
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML = `<h4>${currentQuestionIndex + 1}. ${question.question}</h4>`;
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'options';
        question.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.className = 'option-btn';
            button.addEventListener('click', () => checkAnswer(button, question.answer, question.explanation));
            optionsDiv.appendChild(button);
        });
        questionDiv.appendChild(optionsDiv);
        quizForm.appendChild(questionDiv);
        // Hint button
        const hintButton = document.createElement('button');
        hintButton.textContent = "Show Hint";
        hintButton.className = 'action-btn';
        hintButton.id = 'hintButton';
        hintButton.addEventListener('click', () => toggleHint(question.hint));
        quizForm.appendChild(hintButton);
        // Next button
        const nextButton = document.createElement('button');
        nextButton.textContent = "Next Question";
        nextButton.className = 'action-btn next-button';
        nextButton.style.display = 'none';
        nextButton.addEventListener('click', () => {
            currentQuestionIndex++;
            if (currentQuestionIndex < totalQuestions) {
                displayQuestion();
            } else {
                endQuiz();
            }
        });
        quizForm.appendChild(nextButton);
        updateProgress();
    } else {
        endQuiz();
    }
}
//hint button
function toggleHint(hint) {
    const hintDiv = document.getElementById('hint');
    if (hintDiv.style.display === 'none' || hintDiv.style.display === '') {
        hintDiv.innerHTML = `<strong>Hint:</strong> ${hint}`;
        hintDiv.style.display = 'block';
    } else {
        hintDiv.style.display = 'none';
    }
}
// Update progress bar
function updateProgress() {
    const progress = (currentQuestionIndex / totalQuestions) * 100;
    document.getElementById('progress').style.width = `${progress}%`;
}
// Check the answer
function checkAnswer(button, correctAnswer, explanation) {
    const hintButton = document.getElementById('hintButton');
    if (hintButton) {
        hintButton.style.display = 'none';
    }
    const buttons = button.parentElement.querySelectorAll('button.option-btn');
    buttons.forEach(btn => {
        btn.disabled = true;
    });
    document.querySelector('.next-button').style.display = 'block';
    if (button.textContent.charAt(0) === correctAnswer) {
        button.classList.add('correct');
        score++;
        showFeedback("Correct! 🎉", "correct");
    } else {
        button.classList.add('incorrect');
        showFeedback("Incorrect! ❌", "incorrect");
        buttons.forEach(btn => {
            if (btn.textContent.charAt(0) === correctAnswer) {
                btn.classList.add('correct');
            }
        });
    }
    document.getElementById('explanation').innerHTML = `<strong>Explanation:</strong> ${explanation}`;
}
//feedback message
function showFeedback(message, type) {
    const feedbackDiv = document.createElement('div');
    feedbackDiv.textContent = message;
    feedbackDiv.className = `feedback ${type}`;
    document.getElementById('quizForm').appendChild(feedbackDiv);
}
// Start the quiz timer
function startTimer() {
    let timeLeft = 300;
    document.getElementById('time').textContent = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('time').textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
}
// End quiz
async function endQuiz() {
    clearInterval(timer);
    const userId = localStorage.getItem('userId');
    const username = localStorage.getItem('userName');
    sessionStorage.setItem('quizScore', score);
    sessionStorage.setItem('quizTotal', totalQuestions);
    sessionStorage.setItem('userId', userId);
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('quizSubject', subject);
    if (userId) {
        try {
            const response = await fetch(`https://full-stack-application-y2jd.onrender.com/api/users/${userId}/scores`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    subject: subject,
                    score: score
                })
            });
            if (!response.ok) {
                throw new Error('Failed to save score');
            }
            window.location.href = 'leaderboard.html';
        } catch (error) {
            console.error('Error saving score:', error);
            showQuizResults();
        }
    } else {
        showQuizResults();
    }
}
// guest mode
function showQuizResults() {
    const resultDiv = document.getElementById('quizResult');
    const percentage = Math.round((score / totalQuestions) * 100);
    let message = `Your Score: ${score} out of ${totalQuestions} (${percentage}%)`;
    if (percentage >= 80) {
        message += "<br>Excellent! 🏆";
    } else if (percentage >= 60) {
        message += "<br>Good job! 👍";
    } else {
        message += "<br>Keep practicing! 💪";
    }
    resultDiv.innerHTML = message;
    document.getElementById('restartButton').style.display = 'block';
}
// Restart the quiz
function restartQuiz() {
    document.getElementById('quizResult').innerHTML = '';
    document.getElementById('restartButton').style.display = 'none';
    document.getElementById('startButton').style.display = 'block';
    document.getElementById('hint').style.display = 'none';
    document.getElementById('progress').style.width = '0%';
}
document.getElementById('startButton').addEventListener('click', startQuiz);
document.getElementById('restartButton').addEventListener('click', restartQuiz);
document.getElementById('hint').style.display = 'none';
document.getElementById('startButton').style.display = 'block';
