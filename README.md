# prepare-tractable

## React + Redux app
 
 * Could you describe how to use redux to a junior developer?

## Typescript

<details> 
  <summary>How is it a not-entirely-strict type system?</summary>
   Type annotations and interfaces are optional (but probably encouraged). Interfaces don't require explicit inheritance / `implements` clauses - they require having the object shape that the interface expects.
</details>

Asynchronous coding with promises and await. How can you set off multiple Async tasks in parallel and then trigger only when all are finished using await?

[typescript example](./try_typescript.ts)

## Kafka

<details>
  <summary>Understand how partitions, consumer groups and offsets work.</summary>
  Partitions: guaranteed ordering in a partition, keys of message decide what partition a message goes to, ++partitions -> ++ throughput, memory usage, open files, unavailability, latency

  Consumer group: the group sees all messages for a given topic once, a consumer is assigned to one or more partitions, partitions are assigned to one and only one consumer.

  Offsets: each partition has (and remembers) an offset
</details>

<details>
  <summary>What is the difference between:
  * A) having 5 consumers on the same topic each with a different consumer group id  
  * B) having 5 consumers on the same topic where they all have the same consumer group id
  </summary>
  Suppose a single message is queued. In A, consumers will consume the message 5 times (one each). In B, consumers will consume the message once (one of the consumers will get the message and consume it). 
</details>

<details>
  <summary>How are keyed messages are assigned to partitions?</summary>
  Via some hashing function... I think they go to the lead broker first, who runs the hashing function against the key, then assigns it to the correct partition.
</details>

<details>
  <summary>What are Queue poisoning & queue blocking? How can you handle them?</summary>
  Queue poisoning is when a message exceeds retries. You have to commit to the offset to continue consuming other messages. You can write the poisoned message to another topic to handle it specially later.

  Queue blocking... can't find definition
</details>

## Cassandra

* Get comfortable with denormalisation and one-table-per-view
* When should you use secondary indexes?
* Time series data and time bucketing - how would you structure a C* table of to allow 
* New Cassandra 3 features (currently we don't use any but we are moving over to Cassandra 3)

## Statistics

### Courses

* https://www.coursera.org/learn/bayesian
* https://www.coursera.org/learn/probability-intro
* https://www.coursera.org/learn/inferential-statistics-intro

### Questions

<details> 
  <summary>What is the difference between a probability and an expectation value?</summary>
   Expectation value is the probability distribution x result value at each probability => the average of the values you get after running a simulation infinite times. Probability is the chance of something happening, given a set of conditions - the expectation value doesn't necessarily have a 100% probability (and won't be if there are any other possibilities).
</details>

<details> 
  <summary>What are precision and recall? How do you interpret a precision-recall graph?</summary>
   Precision is not getting false positives, recall is not getting false negatives. An increase in one usually results in a decrease in the other. Compare the cost of false positives vs false negatives to find optimal point in the curve. 
</details>

<details> 
  <summary>How do you combine multiple probabilities? E.g. How do you work out the probability that it's at least one person's birthday in a group of n people? (This is not just theory - this exact equation is used in our product code)</summary>
  [jupyter notebook](./birthday_probability.ipynb)
</details>
