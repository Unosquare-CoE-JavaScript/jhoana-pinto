#include <inttypes.h>
#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int rand_r(unsigned int *seed)
{
  unsigned int next = *seed;
  int result;

  next *= 1103515245;
  next += 12345;
  result = (unsigned int)(next / 65536) % 2048;

  next *= 1103515245;
  next += 12345;
  result <<= 10;
  result ^= (unsigned int)(next / 65536) % 1024;

  next *= 1103515245;
  next += 12345;
  result <<= 10;
  result ^= (unsigned int)(next / 65536) % 1024;

  *seed = next;

  return result;
}

uint64_t random64(uint32_t *seed)
{
  uint64_t result;
  uint8_t *result8 = (uint8_t *)&result;
  for (size_t i = 0; i < sizeof(result); i++)
  {
    result8[i] = rand_r(seed);
  }
  return result;
}

uint64_t sum_digits_squared(uint64_t num)
{
  uint64_t total = 0;
  while (num > 0)
  {
    uint64_t num_mod_base = num % 10;
    total += num_mod_base * num_mod_base;
    num = num / 10;
  }
  return total;
}
bool is_happy(uint64_t num)
{
  while (num != 1 && num != 4)
  {
    num = sum_digits_squared(num);
  }
  return num == 1;
}
bool is_happycoin(uint64_t num)
{
  return is_happy(num) && num % 10000 == 0;
}

int main()
{

  uint32_t seed = time(NULL);
  int count = 0;

  for (int i = 1; i < 10000000; i++)
  {

    uint64_t random_num = random64(&seed);

    if (is_happycoin(random_num))
    {
      printf("%" PRIu64 " ", random_num);
      count++;
    }
  }
  printf("\ncount %d\n", count);
  return 0;
}